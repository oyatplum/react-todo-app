import React from 'react'

export default function Form({handleSubmit, value, setValue}) {
  console.log('Form Component')

    const handleChange = (e) => {
        setValue(e.target.value)
     }

  return (
    <div>
        <form onSubmit = {handleSubmit} className ="flex pt-2">
          <input 
            type = "text"
            name = "value"
            className='w-full px-3 py-2 mr-4 text-gray-500 border rounded-lg shadow-lg'
            placeholder = "Enter your to do."
            value = {value}
            onChange = {handleChange}
          />
          <input className='p-1.5 text-red-300 border-2 border-red-300 rounded-lg hover:text-white hover:bg-red-200 shadow-lg'
            type = "submit"
            value = "Enter"
          />
        </form>
    </div>
  )
}
