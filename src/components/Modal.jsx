import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export const Modal = forwardRef(({children, buttonCaption},ref) => {
const dialog = useRef();

useImperativeHandle(ref,()=>{
    return{
        open(){
           dialog.current.showModal()
        }
    }
})


return createPortal( 
    <dialog ref={dialog}>{children} <form action="dialog"><button>{buttonCaption}</button></form></dialog>, document.getElementById("modal-root")
  )
}
)
