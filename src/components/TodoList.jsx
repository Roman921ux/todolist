import React from 'react'
import { useState } from 'react';
// icons
import { IoAddCircleOutline } from "react-icons/io5";
// redux
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todo-action'
import TodoItem from './TodoItem'
import Filter from './Filter';
import { selectTodoFilter } from '../store/selectors/todo-selector';
// com
import Theme from './Theme'
import { selectThemeActive } from '../store/selectors/theme-selector';

function TodoList() {
  const [value, setValue] = useState()
  const dispatch = useDispatch()
  const theme = useSelector(selectThemeActive)
  const filter = useSelector(state => state.filter)
  const todos = useSelector(state => selectTodoFilter(state, filter, theme))

  const addTask = () => {
    dispatch(addTodo(value, theme))
    setValue('')
    console.log(theme, todos)
  }
  return (
    <div className='border-2 border-pink-600 w-[25rem] flex flex-col gap-[1rem]'>
      <div className="flex gap-[0.5rem]">
        <input onKeyPress={e => e.key === 'Enter' && addTask()} type="text" className='w-[80%] h-[auto] rounded-[0.5rem]' onChange={(e) => setValue(e.target.value)} value={value} />
        <button onClick={() => addTask()}>add</button>
      </div>
      <h2>{filter}</h2>
      <Filter />
      <Theme />
      <div className="flex flex-col gap-[0.5rem]">
        {todos.map(todo => <TodoItem todo={todo} />)}
      </div>
    </div>
  )
}

export default TodoList