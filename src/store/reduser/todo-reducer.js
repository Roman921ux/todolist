import { nanoid } from "@reduxjs/toolkit"

export const todos = (state = [{ id: nanoid(), title: 'Todo_1', completed: false, theme: 'Basi' }], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [{ id: nanoid(), title: action.title, completed: false, theme: action.theme }, ...state]
    }
    case 'TOGGLE_TODO': {
      return state.map(todo => {
        if (todo.id === action.payload) return { ...todo, completed: !todo.completed }
        return todo
      })
    }
    case 'REMOVE_TODO': {
      return state.filter(todo => todo.id !== action.payload)
    }
    default: {
      return state
    }
  }
}