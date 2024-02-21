import React from 'react'

const FullForm = () => {
  return (
    <div className='App'>
     <form className='flex flex-col justify-center items-center mt-3 m-auto border border-slate-600 w-[340px] p-4'>
        <input type="text" placeholder='Name' className='border border-blue-400 p-2 bg-slate-300' />
        <input type="text" placeholder='@gmail.com'className='border border-blue-400 p-2 mt-6  bg-slate-300' />
        <input type="text" placeholder='password'className='border border-blue-400 p-2 mt-6  bg-slate-300'/>
        <input type="submit" className='border border-blue-400 p-2 mt-6 bg-slate-600 rounded-lg text-white' />
     </form>
    </div>
  )
}

export default FullForm
