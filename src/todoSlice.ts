import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  userNumber: number;
}

export interface TodoListState {
  todos: Todo[]
}

const initialState: TodoListState = {
  todos: [],
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodoList: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTodoList } = todoListSlice.actions



export default todoListSlice.reducer