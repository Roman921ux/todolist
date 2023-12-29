import { nanoid } from "@reduxjs/toolkit"

export const theme = (state = [{ id: nanoid(), title: 'Basi', check: true }], action) => {
  switch (action.type) {
    case 'SET_THEME': {
      return [...state, { id: nanoid(), title: action.payload, check: false }]
    }
    case 'TOGGLE_CHECK': {
      return state.map(theme => {
        if (theme.id === action.payload) {
          return { ...theme, check: true }
        }
        return { ...theme, check: false }
      })
    }
    default: return state
  }
}