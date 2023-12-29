export const loadState = () => {
  try {
    const state = localStorage.getItem('state')
    if (state === null) {
      return undefined
    }
    return JSON.parse(state)
  }
  catch (error) {
    return undefined
  }
}

export const setState = (state) => {
  try {
    const saveState = JSON.stringify(state)
    localStorage.setItem('state', saveState)
  }
  catch (error) {
    console.error(error)
  }
}