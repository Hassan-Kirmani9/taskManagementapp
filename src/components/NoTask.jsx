import React from 'react'

export const NoTask = ({onAddTask}) => {
  return (
    <>
    <div className='border-2 border-red-400'>
    <div>NoTask</div>
    <button className='bg-slate-400' onClick={onAddTask}>Add Task</button>
    </div>
    </>
  )
}
