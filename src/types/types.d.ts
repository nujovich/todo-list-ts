export interface Todo {
  id: number
  text: string
  completed: boolean
}

export type TableTodo = Array<Database['public']['Tables']['tasks']['Row']> | null

export type ListOfTodos = Todo[]

export type TodoId = Pick<Todo, 'id'>
export type TodoText = Pick<Todo, 'text'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
