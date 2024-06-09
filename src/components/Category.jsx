import React from 'react'
import Layout from './Layout'
import { useState } from 'react'

const Category = () => {
const [category, setCategory] = useState([
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
    {
        title: 'Trimer Haircutting'
    },
])

  return (
    <Layout>
       <div className='md:p-16 p-8'>
          <div className='md:w-10/12 mx-auto grid md:grid-cols-4 gap-16'>
            {
                category.map((item,index) => (
                    <div key={index} className='hover:bg-orange-600 hover:text-white border rounded-lg'>
                        <i className='ri-menu-search-line text-6xl'></i>
                        <h1 className='text-2xl font-bold'>{item.title}</h1>
                    </div>
                ))
            }
          </div>
       </div>
    </Layout>
  )
}

export default Category