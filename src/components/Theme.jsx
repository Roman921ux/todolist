import React from 'react'
import { useState } from 'react'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, selectThemeActive } from '../store/selectors/theme-selector'
import { activeTheme, nameTheme } from '../store/actions/theme-action'

function Theme() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const themes = useSelector(state => state.theme)
  const themesActive = useSelector(selectThemeActive)

  const addTheme = () => {
    dispatch(nameTheme(value))
    setValue('')
    console.log(themes)
  }
  return (
    <div className='flex flex-col gap-[1rem]'>
      <div className="flex gap-[0.5rem]">
        <input
          onKeyPress={e => e.key === 'Enter' && addTheme()}
          type="text"
          className='w-[80%] h-[auto] rounded-[0.5rem]'
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => addTheme()}>add</button>
      </div>
      <div className="flex gap-[1rem] justify-center overflow-x-auto pb-[1rem]">
        {themes.map(theme => (
          <button onClick={() => dispatch(activeTheme(theme.id))}
            className={`${theme.check ? 'bg-green-500' : ''}`}>{theme.title}</button>
        ))}
      </div>
    </div>
  )
}

export default Theme