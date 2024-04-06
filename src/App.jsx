import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";
import { NoTask } from "./components/NoTask";

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

  let content;
 if(taskselected.selectedTasksId===null){
  content= <Tasks onAdd={handleAddTasks_action}/>;
 }
 else if(taskselected.selectedTasksId=== undefined){
  content= <NoTask onAddTask={handleAddTasks}/>
 }
  return (
    <>
    <div className="flex h-scree my-6 gap-9">

      <Sidebar onAddTask={handleAddTasks} totalTasks={taskselected.tasks}/>
    {content}
       </div>
      
    </>
  );
}

export default App;
