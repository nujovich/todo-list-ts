import { Todo } from './Todo'
import { type Todo as TodoType, type TodoId, type TableTodo } from '../types/types'

interface TodosProps {
  todos: TableTodo | undefined
  onRemove: ({ id }: TodoId) => Promise<void>
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => Promise<void>
}
export const Todos: React.FC<TodosProps> = ({ todos, onRemove, onCompleted }) => {
  return (
        <ul className='todo-list'>
            {todos?.map((todo) => (
                <li
                  key={todo.id}
                  className={`${(todo.completed) ? 'completed' : ''}`}>
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onCompleted={onCompleted}
                    onRemove={onRemove}
                  />
                </li>
            ))}
        </ul>
  )
}
