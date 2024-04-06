import React, { forwardRef } from 'react'

export const Input = forwardRef( ({label , textArea , ...props},ref) => {
 
    return (
    <div>
    <label>
    {label}
    </label>
    {textArea ? <textarea  ref={ref} {...props}/> : <input ref={ref} {...props}/>}
    </div>
  )
})
