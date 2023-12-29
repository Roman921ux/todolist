import React from 'react'
// icons
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
// redux
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../store/actions/todo-action';

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-between px-[0.5rem] py-[0.5rem] bg-teal-800 rounded-[0.5rem]'>
      <div className="flex items-center">
        {todo.completed ?
          (<button onClick={() => dispatch(toggleTodo(todo.id))} className='w-[1rem] pl-[0.8rem] pr-[1.7rem]'><RiCheckboxBlankCircleFill /></button>)
          :
          (<button onClick={() => dispatch(toggleTodo(todo.id))} className='w-[1rem] pl-[0.8rem] pr-[1.7rem]'><RiCheckboxBlankCircleLine /></button>)
        }
        <span className='ml-[1rem] w-[17rem] text-left overflow-hidden'>{todo.title}</span>
      </div>
      <button onClick={() => dispatch(removeTodo(todo.id))} className='w-[1rem] pl-[0.8rem] pr-[1.7rem]'>< MdDeleteOutline /></button>
    </div>
  )
}

export default TodoItem