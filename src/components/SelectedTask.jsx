import React from 'react'
import { AddTaskSection } from './AddTaskSection'

export const SelectedTask = ({task, onDel, onAddNewTask,totalNewTasks , onDelNewTask}) => {
    const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
  return (
    <div className="w-[35rem] mt-16">
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white mb-2">
        {task.title}
          </h1>
          <button
            className="px-6 py-2 rounded-md bg-red-800 text-white hover:bg-red-900"
            onClick={onDel}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-white">{formattedDate}</p>
        <p className="text-white whitespace-pre-wrap">
          {task.description}
        </p>
      </header>
      <AddTaskSection onAddNewTask={onAddNewTask} totalNewTasks={totalNewTasks} onDelNewTask={onDelNewTask}/>
    </div>
  );
    {/* <div>
        <h1>{task.title}</h1>
        <h1>{task.dueDate}</h1>
        <h1>{task.description}</h1>
        <button onClick={onDel}>Delete</button>
        <AddTaskSection onAddNewTask={onAddNewTask} totalNewTasks={totalNewTasks} onDelNewTask={onDelNewTask}/>
    </div> */}
  
}
