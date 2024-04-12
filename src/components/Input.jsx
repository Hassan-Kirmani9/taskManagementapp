import React, { forwardRef } from 'react'

export const Input = forwardRef( ({label , textArea , ...props},ref) => {
  const classes =
  'w-full p-1 rounded-sm border-[1px] border-white bg-custom-gray text-white focus:outline-none focus:border-stone-600';

    return (
      <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-white ">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});
