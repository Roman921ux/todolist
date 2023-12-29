export const nameTheme = (theme) => {
  return ({
    type: 'SET_THEME',
    payload: theme,
  })
}

export const activeTheme = (id) => {
  return ({
    type: 'TOGGLE_CHECK',
    payload: id,
  })
}

