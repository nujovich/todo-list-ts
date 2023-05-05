import { type FilterValue } from '../types/types'
import { Filters } from './Filters'

interface FooterProps {
  activeCounts: number | undefined
  completedCount: number | undefined
  filterSelected: FilterValue
  handleFilterChanged: (filter: FilterValue) => void
  onClearCompleted: () => void
}

export const Footer: React.FC<FooterProps> = ({
  activeCounts = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChanged,
  onClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
              <strong>{activeCounts}</strong> tareas pendientes
            </span>
            <Filters
              filterSelected={filterSelected}
              onFilterChanged={handleFilterChanged}
            />
            {
              completedCount > 0 && (
                <button
                  className='clear-completed'
                  onClick={onClearCompleted}>
                  Borrar completadas
                </button>
              )
            }
        </footer>
  )
}
