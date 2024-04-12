import React from 'react'
import Button from './Button';

export const NoTask = ({onAddTask}) => {
  return (
    <div className="mt-24 text-center w-2/4 mb-20">

      <h2 className="text-xl font-bold text-white my-4">
        No Project Selected
      </h2>
      <p className="text-white mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <button className="px-4 py-2 text-xs md:text-base rounded-md text-white hover:bg-green-600 bg-custom-green" onClick={onAddTask}>Create new project</button>
      </p>
    </div>
  );
}
