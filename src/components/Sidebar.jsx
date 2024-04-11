import React from 'react'

export const Sidebar = ({onAddTask, totalTasks, onSelectTask}) => {
    const setlect=()=>{
        
    }
  return (
    <div className='border-2 border-sky-900'>
        Sidebar
        <div>
    <button className='bg-gray-400' onClick={onAddTask}>Add Task</button>
 </div>
 <ul>
      {totalTasks.map((task)=>{ return <li key={task.id}><button className='bg-slate-800' onClick={()=>onSelectTask(task.id)}>{task.title}</button></li>})}
 </ul>

 
        </div>
  )
}
