import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";
import { NoTask } from "./components/NoTask";
import { SelectedTask } from "./components/SelectedTask";

function App() {

  const [taskselected , setTaskselected]=useState({
     selectedTasksId: undefined,
     tasks:[]
  })

 const handleAddTasks=()=>{
    
   setTaskselected(prevState=>{
    return {...prevState,  selectedTasksId: null}
   })
  }
  
  const handleDeleteTask =()=>{
    setTaskselected(prevState=>{
      return {...prevState,  selectedTasksId: undefined, tasks: prevState.tasks.filter((task)=> task.id !== prevState.selectedTasksId)}
     })
     
  } 
 const handleSelectTasks=(id)=>{
    
   setTaskselected(prevState=>{
    return {...prevState,  selectedTasksId: id}
   })
  }
 const handleCancelTask=()=>{
    
   setTaskselected(prevState=>{
    return {...prevState,  selectedTasksId: undefined}
   })
  }
 const handleAddTasks_action=(projectData)=>{
  const task_id = Math.random()
  const newProject = {
    ...projectData, 
    id: task_id
  }
   setTaskselected(prevState=>{
    return {...prevState,
    tasks: [ ...prevState.tasks, newProject ]   
    }
   })
  }

  
  console.log(taskselected)

const selectedTask = taskselected.tasks.find((project)=>{return project.id === taskselected.selectedTasksId})
  let content= <SelectedTask task={selectedTask} onDel={handleDeleteTask}/>;
 if(taskselected.selectedTasksId===null){
  content= <Tasks onAdd={handleAddTasks_action} onCancel={handleCancelTask}/>;
 }
 else if(taskselected.selectedTasksId=== undefined){
  content= <NoTask onAddTask={handleAddTasks}/>
 }
  return (
    <>
    <div className="flex h-scree my-6 gap-9">

      <Sidebar  onAddTask={handleAddTasks} totalTasks={taskselected.tasks}  onSelectTask={handleSelectTasks}/>
    {content}
       </div>
      
    </>
  );
}

export default App;
