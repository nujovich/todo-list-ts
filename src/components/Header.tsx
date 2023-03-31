
import { CreateTodo } from './CreateTodo'

interface HeaderProps {
  onAdd: (text: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onAdd }) => {
  return (
        <header className="header">
            <h1>todos<img
                style={{ width: '60px', height: 'auto' }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            /></h1>
            <CreateTodo onSave={onAdd}/>
        </header>
  )
}
