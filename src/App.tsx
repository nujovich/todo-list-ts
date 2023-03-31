import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, type TodoId, type FilterValue } from './types/types'
import { TODO_FILTERS } from './types/consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const todos = [
  {
    id: 1,
    text: 'Ver el twitch de midudev',
    completed: true
  },
  {
    id: 2,
    text: 'Aprender React',
    completed: false
  },
  {
    id: 3,
    text: 'Sacar ticket de la midufest',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todoList, setTodoList] = useState(todos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todoList.filter((todo) => todo.id !== id)
    setTodoList(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodoList(newTodos)
  }

  const handleFilterChanged = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todoList.filter((todo) => !todo.completed)
    setTodoList(newTodos)
  }

  const handleAdd = (text: string): void => {
    const newTodo = {
      id: todoList.length + 1,
      text,
      completed: false
    }
    const newTodos = [...todoList, newTodo]
    setTodoList(newTodos)
  }

  const filteredTodos = todoList.filter((todo) => {
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
        activeCounts={filteredTodos.filter((todo) => !todo.completed).length}
        completedCount={filteredTodos.length - filteredTodos.filter((todo) => !todo.completed).length}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        handleFilterChanged={handleFilterChanged}
      />
    </div>
  )
}
export default App
