import React, { useState } from 'react'
import Layout from './Layout'


const Products = () => {

  const [products, setProducts] = useState([
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk1.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk1.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk7.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk2.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk5.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk6.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk6.jpg'
    },
    {
      title : 'Speaker',
      price : 4500,
      discount : 20,
      description : 'this is best speaker in market',
      image : '../public/img/spk6.jpg'
    },
  ])
  return (
    <Layout>
        <div>
          <h1 className='text-xl font-semibold mb-4'>Products</h1>
          <div className='grid md:grid-cols-4 gap-8'>
            {
              products.map((item,index) => (
                <div key={index} className='bg-white shadow-lg rounded-md'>
                  <img src={item.image} className='rounded-t-md h-[270px] w-full object-cover'/>
                  <div className='p-4'>
                    <h1 className='text-md capitalize font-semibold'>{item.title}</h1>
                    <p className='text-gray-600 capitalize'>{item.description.slice(0,50)}</p>
                    <div className='flex gap-4 mt-1'>
                    <p>{item.price-(item.price*item.discount)/100}</p>
                      <del>{item.price}</del>
                      <label className='text-gray-600'>{item.discount} % off</label>
                    </div>
                  </div>
                  
                </div>
              ))
            }
          </div>
        </div>
    </Layout>
  )
}

export default Products