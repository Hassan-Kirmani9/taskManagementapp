import React from 'react'
import { AddTaskSection } from './AddTaskSection'

export const SelectedTask = ({task, onDel, onAddNewTask,totalNewTasks , onDelNewTask}) => {
  return (
    <div>
        <h1>{task.title}</h1>
        <h1>{task.dueDate}</h1>
        <h1>{task.description}</h1>
        <button onClick={onDel}>Delete</button>
        <AddTaskSection onAddNewTask={onAddNewTask} totalNewTasks={totalNewTasks} onDelNewTask={onDelNewTask}/>
    </div>
  )
}
