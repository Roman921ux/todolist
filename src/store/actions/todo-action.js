export const addTodo = (title, theme) => {
  return ({
    type: 'ADD_TODO',
    title: title,
    theme: theme.title,
  })
}
export const toggleTodo = (id) => {
  return ({
    type: 'TOGGLE_TODO',
    payload: id,
  })
}
export const removeTodo = (id) => {
  return ({
    type: 'REMOVE_TODO',
    payload: id,
  })
}