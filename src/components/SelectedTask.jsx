import React from 'react'

export const SelectedTask = ({task, onDel}) => {
  return (
    <div>
        <h1>{task.title}</h1>
        <h1>{task.dueDate}</h1>
        <h1>{task.description}</h1>
        <button onClick={onDel}>Delete</button>
    </div>
  )
}
