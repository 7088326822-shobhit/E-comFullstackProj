import React from 'react'
import Layout from "./Layout"



const Contact = () => {
  
  return (
    <Layout>
       <div>
          <header className='md:w-6/12 mx-auto md:my-16 md:shadow-lg bg-white border'>
             <img src='../public/img/contact.jpg' className='w-full'/>
              <div className='p-8'>
              <form className='mt-8 space-y-6'>
                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>FullName:</label>
                    <input
                      type='text'
                      name='fullname'
                      placeholder='Enter Your Name'
                      className='p-3 border border-gray-300 rounded'
                      required
                    
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Email:</label>
                    <input
                      type='email'
                      name='email'
                      placeholder='Enter Your Email'
                      className='p-3 border border-gray-300 rounded'
                      required
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold text-lg mb-1'>Message:</label>
                    <textarea
                      name='message'
                      placeholder='Enter Your Message'
                      className='p-3 border border-gray-300 rounded'
                      required
                    />
                    
                    
                </div>
                    <button className='py-3 px-8 rounded shadow-lg bg-blue-600 text-white font-semibold hover:bg-rose-600 hover:text-black'>Submit</button>
              </form>
              </div>
          </header>
       </div>
    </Layout>
  )
}

export default Contact