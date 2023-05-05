import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, type TodoId, type FilterValue, type TableTodo } from './types/types'
import { TODO_FILTERS } from './types/consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { addTask, deleteTask, getTasks, updateTask } from './services/tasksService'

const todos = await getTasks().then((data) => data)

const App = (): JSX.Element => {
  const [todoList, setTodoList] = useState<TableTodo | undefined>(todos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = async ({ id }: TodoId): Promise<void> => {
    await deleteTask(id).then((data) => data)
    const newTodos = await getTasks().then((data) => data)
    setTodoList(newTodos)
  }

  const handleCompleted = async ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): Promise<void> => {
    await updateTask(id, completed)
    const todos = await getTasks().then((data) => data)
    setTodoList(todos)
  }

  const handleFilterChanged = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todoList?.filter((todo) => !todo.completed)
    setTodoList(newTodos)
  }

  const handleAdd = async (text: string): Promise<void> => {
    const newTodo = {
      text,
      completed: false
    }
    await addTask(newTodo.text)
    const todos = await getTasks().then((data) => data)
    setTodoList(todos)
  }

  const filteredTodos = todoList?.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return todo
  })
  return (
    <div className='todoapp'>
      <Header onAdd={handleAdd} />
      <Todos
        onCompleted={handleCompleted}
        onRemove={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCounts={filteredTodos?.filter((todo) => !todo.completed).length}
        completedCount={filteredTodos.length - filteredTodos.filter((todo) => !todo.completed).length}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        handleFilterChanged={handleFilterChanged}
      />
    </div>
  )
}
export default App
