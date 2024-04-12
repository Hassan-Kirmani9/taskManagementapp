import React from 'react'
import { NewTask } from './NewTask'

export const AddTaskSection = ({ onAddNewTask, totalNewTasks, onDelNewTask }) => {
  return (
    <div>

      <h2 className="text-xl font-extralight text-white mb-4">Add New Taks</h2>
      <NewTask onAddNewTask={onAddNewTask} />
      {totalNewTasks.length === 0 && (
        <p className="text-white my-4">
          No Task Added yet</p>)}
      {totalNewTasks.length > 0 && (<ul className="p-4 mt-8 rounded-md bg-slate-200">
        {
          totalNewTasks.map((newTask) => {
            return <li className="flex justify-between my-4" key={newTask.id}><span>{newTask.text}</span><button className="text-stone-700 hover:text-red-500"
              onClick={() => onDelNewTask(newTask.id)}>Clear</button></li>
          })
        }</ul>)}
    </div>
  )
}
