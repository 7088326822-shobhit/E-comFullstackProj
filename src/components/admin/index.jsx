import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()
  return (
    <div className='text-gray-100 h-screen  flex justify-center items-center'>
    <img src='../public/img/bg.svg' className='w-96 h-96'/>
      <div>
        <h1 className='text-4xl font-semibold mb-4'>Admin!!</h1>
        <form className='flex flex-col gap-4'>
          <input type='text' placeholder='Entre Admin secret'
          className='border p-4 bg-white rounded-md w-[450px]' required/>
          <button className='py-3.5 px-5 bg-violet-600 w-fit text-white font-semibold'>submit</button>
        </form>
      </div>
    </div>
  )
} 

export default Admin