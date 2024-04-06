import React, { useRef } from 'react'
import { Input } from './Input'
import { Modal } from './Modal'

export const Tasks = ({onAdd}) => {

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modal = useRef()
    
    const handleSave=()=>{
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = dueDate.current.value
        
        if(enteredDate.trim()==="" || enteredTitle.trim()==="" || enteredDescription.trim()===""){
            modal.current.open()
            return;
           }

        onAdd({
        title: enteredTitle, 
        description: enteredDescription, 
        dueDate: enteredDate
    })
       }



    return (
    <>
    <div>
        <Modal className='bg-amber-700' ref={modal} buttonCaption="Close">
        <h3>Invali Input !</h3>
        </Modal>
    </div>
    <div className="border-2 border-orange-400">
    <div>Tasks</div>
    <menu className='flex gap-4'>
     <li><button>Cancel</button></li>
     <li><button onClick={handleSave}>Save</button></li>
    </menu>
    <div className='border-2 border-blue-300'>
   <Input ref={title} label="Title" className="bg-slate-400" />
   <Input ref={description} label="Description" textArea className="bg-slate-400" />
   <Input  type="date" ref={dueDate} label="Due Date" className="bg-slate-400" />
     </div>
     </div>
    </>
  )
}
