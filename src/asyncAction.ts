import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "./store"
import { setTodoList } from "./todoSlice"
import {Todo} from "./todoSlice"

interface TodoJson {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const getTodoFromJson = (json: TodoJson): Todo => ({
  id: json.id || 0,
  userId: json.userId || 0,
  title: json.title || "",
  completed: json.completed || false,
  userNumber: json.id + json.userId
})

export const fetchTodoList = createAsyncThunk<void, void, {state: RootState}>(
  'todoList/fetchTodoList',
  async (_, {dispatch}) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
              const todoListJson: TodoJson[] = response.data
              const todos = todoListJson.map((json) => (getTodoFromJson(json)))
              dispatch(setTodoList(todos))
    } catch (error) {
      
    }
  }
)