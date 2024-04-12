import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Tasks } from "./components/Tasks";
import { NoTask } from "./components/NoTask";
import { SelectedTask } from "./components/SelectedTask";

function App() {

  const [taskselected , setTaskselected]=useState({
     selectedTasksId: undefined,
     tasks:[],
     newTasks:[]
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
    return {
      ...prevState,
      selectedTasksId: undefined,
    tasks: [ ...prevState.tasks, newProject ]   
    }
   })
  }
  const handleAddNewTasks=(text)=>{
    console.log("Adding new task with text:", text);
    setTaskselected((prevState)=>{

      const newtask_id = Math.random()
      const newAddedTask = {
        text:text,
        task_id:prevState.selectedTasksId,
        id: newtask_id
      }
       return{
        ...prevState,
        newTasks:[newAddedTask, ...prevState.newTasks]
       }
    })
    
    }

    
 const handleDeleteNewTasks=(id)=>{
    
  setTaskselected(prevState=>{
    return {...prevState, newTasks: prevState.newTasks.filter((newTask)=> newTask.id !== id)}
   })
   
  }
  
  // console.log(taskselected)

const selectedTask = taskselected.tasks.find((project)=>{return project.id === taskselected.selectedTasksId})
const taskSpecificNewTasks = taskselected.newTasks.filter(task => task.task_id === taskselected.selectedTasksId);
  
let content= <SelectedTask task={selectedTask} onDel={handleDeleteTask} onDelNewTask={handleDeleteNewTasks} onAddNewTask={handleAddNewTasks}  totalNewTasks={taskselected.newTasks}/>;
 if(taskselected.selectedTasksId===null){
  content= <Tasks onAdd={handleAddTasks_action} onCancel={handleCancelTask}/>;
 }
 else if(taskselected.selectedTasksId=== undefined){
  content= <NoTask onAddTask={handleAddTasks}/>
 }else {
  // Pass only the filtered new tasks to the SelectedTask component
  content = <SelectedTask 
              task={selectedTask} 
              onDel={handleDeleteTask} 
              onDelNewTask={handleDeleteNewTasks} 
              onAddNewTask={handleAddNewTasks} 
              totalNewTasks={taskSpecificNewTasks}
            />;
}
  return (
    <>
    <div className="flex h-scree my-6 gap-9 bg-custom-gray ">

      <Sidebar taskSelected={taskselected.selectedTasksId} onAddTask={handleAddTasks} totalTasks={taskselected.tasks}  onSelectTask={handleSelectTasks}/>
    {content}
       </div>
      
    </>
  );
}

export default App;
