import { Todo } from './Todo'
import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types/types'

interface TodosProps {
  todos: ListOfTodos
  onRemove: ({ id }: TodoId) => void
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todos: React.FC<TodosProps> = ({ todos, onRemove, onCompleted }) => {
  return (
        <ul className='todo-list'>
            {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`${todo.completed ? 'completed' : ''}`}>
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
