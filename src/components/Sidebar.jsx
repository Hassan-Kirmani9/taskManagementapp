import React from 'react';
import Button from './Button';

export const Sidebar = ({onAddTask, totalTasks, onSelectTask, taskSelected}) => {
    return (

        <aside className="w-1/3 px-8 py-10 bg-black text-stone-50 md:w-72 rounded-r-xl h-screen relative bottom-4 overflow-hidden"> {/* Changed overflow-auto to overflow-hidden */}
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <div>
                <Button onClick={onAddTask}>New Project</Button>
            </div>
            <ul className="mt-8 max-h-[calc(100vh - 200px)] overflow-y-auto"> {/* Adjusted max height and added overflow-y-auto */}
                {totalTasks.map((task) => {
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-gray-500";
                    if (task.id === taskSelected) {
                        cssClasses += ' bg-stone-800 text-stone-200';
                    } else {
                        cssClasses += ' text-stone-400';
                    }
                    return (
                        <li key={task.id}>
                            <button className={cssClasses} onClick={() => onSelectTask(task.id)}>
                                {task.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
