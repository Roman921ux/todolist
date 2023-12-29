import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NameFiltr } from '../store/actions/filter-action'

function Filter() {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center gap-[1rem]'>
      <button onClick={() => dispatch(NameFiltr('All'))}>All</button>
      <button onClick={() => dispatch(NameFiltr('Active'))}>Active</button>
      <button onClick={() => dispatch(NameFiltr('Completed'))}>Completed</button>
    </div>
  )
}

export default Filter