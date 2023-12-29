
export const selectTodoFilter = (state, filter, theme) => {
  switch (filter) {
    case 'All': {
      return state.todos.filter(todo => todo.theme === theme.title)
      // return state.todos
    }
    case 'Active': {
      return state.todos.filter(todo => !todo.completed).filter(todo => todo.theme === theme.title)
    }
    case 'Completed': {
      return state.todos.filter(todo => todo.completed).filter(todo => todo.theme === theme.title)
    }
    default: return state.todos.filter(todo => todo.theme === theme.title)
  }
}

// switch (filter) {
//     case 'All': {
//       return state.todos
//     }
//     case 'Active': {
//       return state.todos.filter(todo => !todo.completed)
//     }
//     case 'Completed': {
//       return state.todos.filter(todo => todo.completed)
//     }
//     default: return state.todos
//   }