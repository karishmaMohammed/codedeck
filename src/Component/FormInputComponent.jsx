import React from 'react'
import { Controller } from 'react-hook-form'
function FormInputComponent(
    {
        label,
        labelStrong,
        type,
        accept,
        name,
        control,
        required,
        ...props
    }
) {
  return (
    <div className='mt-2' >
        <label htmlFor={name} className='flex gap-2'>
            <h4 className='text-gray-500 text-sm'>{label}</h4>
            {required && <h6 className='text-red text-sm'>*</h6>}
        </label>
        <div>
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        value={props?.value}
                        id={name}
                        accept={props?.accept}
                        placeholder={props?.placeholder}
                        className='w-full border-2 bg-white p-3 mt-2 font-semibold shadow-lg rounded-lg'
                    />
                )}
            />
            {
                props?.error && <span className='text-red text-[8px]'>{props?.error}</span>
            }
        </div>

    </div>
  )
}

export default FormInputComponent