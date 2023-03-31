import { type TodoId, type Todo as TodoType } from '../types/types'

interface TodoProps extends TodoType {
  onRemove: ({ id }: TodoId) => void
  onCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<TodoProps> = ({ id, text, completed, onRemove, onCompleted }) => {
  const onToggleCompletedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onCompleted({
      id,
      completed: event.target.checked
    })
  }
  return (
        <div className="view">
            <input
                className="toggle"
                checked={completed}
                type="checkbox"
                onChange={onToggleCompletedChange}
            />
            <label>{text}</label>
            <button
                className="destroy"
                onClick={() => {
                  onRemove({ id })
                }}/>
        </div>
  )
}
