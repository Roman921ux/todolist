import { combineReducers } from "@reduxjs/toolkit";
import { todos } from "./todo-reducer";
import { filter } from "./filter-reducer";
import { theme } from "./theme-reducer";

export const rootreducer = combineReducers({
  todos: todos,
  filter: filter,
  theme: theme,
})