import { supabase } from '../supabase'
import { type TableTodo } from '../types/types'

export async function getTasks (): Promise<TableTodo | null> {
  return (await supabase.from('tasks').select('*')).data
}

export async function addTask (text: string, completed?: boolean, createdAt?: Date): Promise<TableTodo | null> {
  return (await supabase.from('tasks').insert({ completed, createdAt, text })).data
}

export async function deleteTask (id: number): Promise<TableTodo | null> {
  return (await supabase.from('tasks').delete().match({ id })).data
}

export async function updateTask (id: number, completed: boolean): Promise<TableTodo | null> {
  return (await supabase.from('tasks').update({ completed }).match({ id })).data
}
