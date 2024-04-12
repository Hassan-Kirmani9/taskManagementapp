import React from 'react'
import { NewTask } from './NewTask'

export const AddTaskSection = ({onAddNewTask,totalNewTasks , onDelNewTask}) => {
  return (
    <div>
     <h1>Add New Taks</h1>
        <NewTask onAddNewTask={onAddNewTask} />
        {totalNewTasks.length===0 && (<p>No Task Added yet</p>)}
        {totalNewTasks.length>0 && (<ul>{
            totalNewTasks.map((newTask)=>{return <li key={newTask.id}><span>{newTask.text}</span><button onClick={()=>onDelNewTask(newTask.id)}>Clear</button></li>})
            }</ul>)}
    </div>
  )
}
