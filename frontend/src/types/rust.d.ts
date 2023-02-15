/* This file is generated and managed by tsync */

interface AnsweredQuestion {
  live_question_id: number
  user_id: number
  selected: number
  created_at: Date
  updated_at: Date
}

interface AnsweredQuestionForm {
  selected: number
}

interface PaginationResult<T> {
  items: Array<T>
  total_items: number
  /** 0-based index */
  page: number
  page_size: number
  num_pages: number
}

interface LiveQuestion {
  id: number
  serialized_data: string
  lobby_id: number
  created_at: Date
  updated_at: Date
}

interface LiveQuestionForm {
  serialized_data: string
  lobby_id: number
}

interface PaginationResult<T> {
  items: Array<T>
  total_items: number
  /** 0-based index */
  page: number
  page_size: number
  num_pages: number
}

interface Lobby {
  id: number
  repository: string
  created_at: Date
  updated_at: Date
}

interface LobbyForm {
  repository: string
}

interface PaginationResult<T> {
  items: Array<T>
  total_items: number
  /** 0-based index */
  page: number
  page_size: number
  num_pages: number
}

interface Todo {
  id: number
  text: string
  created_at: Date
  updated_at: Date
}

interface TodoForm {
  text: string
}

interface PaginationResult<T> {
  items: Array<T>
  total_items: number
  /** 0-based index */
  page: number
  page_size: number
  num_pages: number
}

interface PaginationParams {
  page: number
  page_size: number
}
