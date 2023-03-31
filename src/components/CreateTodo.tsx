import { useState } from 'react'

interface HeaderProps {
  onSave: (text: string) => void
}
export const CreateTodo: React.FC<HeaderProps> = ({ onSave }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSave(inputValue)
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
         className='new-todo'
         value={inputValue}
         onChange={(event) => { setInputValue(event.target.value) }}
         placeholder='¿Qué necesitas hacer?'
         autoFocus
         />
    </form>

  )
}
