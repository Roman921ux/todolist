export const selectTheme = (state) => state.theme
export const selectThemeActive = (state) => state.theme.find(them => them.check === true)