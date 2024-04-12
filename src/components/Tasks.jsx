import React, { useRef } from 'react'
import { Input } from './Input'
import { Modal } from './Modal'

export const Tasks = ({onAdd , onCancel}) => {

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
        <h3>Invalid Input !</h3>
        </Modal>
    </div>
    <div className="w-[35rem] mt-16">
    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                New Project
            </h2>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-white px-6 py-2 rounded-md bg-red-600 hover:bg-red-500"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-custom-green text-white hover:bg-green-500"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
    <div>
   <Input ref={title} label="Title" />
   <Input ref={description} label="Description" textArea />
   <Input  type="date" ref={dueDate} label="Due Date" />
     </div>
     </div>
     
    </>
  )
}
