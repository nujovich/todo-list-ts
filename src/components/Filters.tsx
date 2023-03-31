import { FILTER_BUTTONS } from '../types/consts'
import { type FilterValue } from '../types/types'

interface FilterProps {
  filterSelected: FilterValue
  onFilterChanged: (filter: FilterValue) => void
}

export const Filters: React.FC<FilterProps> = ({
  filterSelected,
  onFilterChanged
}) => {
  return (
        <ul className="filters">
        {
            Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = filterSelected === key
              const className = isSelected ? 'selected' : ''
              return (
                    <li key={key}>
                        <a href={href}
                           className={className}
                           onClick={(event) => {
                             event.preventDefault()
                             onFilterChanged(key as FilterValue)
                           }}
                        >
                            {literal}
                        </a>
                    </li>
              )
            })
        }
        </ul>
  )
}
