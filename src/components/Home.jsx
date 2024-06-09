import React from 'react'
import Layout from './Layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import { useState } from 'react';

const Home = () => {
   const [products, setProducts] = useState([
      {
         title: 'New smart LCD',
         price: 18000,
         discount: 14,
         thumbnail: "../public/img/tv1.jpg"
      },
      {
         title: 'New smart LCD',
         price: 15000,
         discount: 14,
         thumbnail: "../public/img/w3.jpg"
      },
      {
         title: 'New smart LCD',
         price: 12000,
         discount: 14,
         thumbnail: "../public/img/w4.jpg"
      },
      {
         title: 'New smart LCD',
         price: 21567,
         discount: 14,
         thumbnail: "../public/img/tv4.jpg"
      },
      {
         title: 'New smart LCD',
         price: 34999,
         discount: 14,
         thumbnail: "../public/img/tv5.jpg"
      },
      {
         title: 'New smart LCD',
         price: 1200,
         discount: 14,
         thumbnail: "../public/img/tv6.jpg"
      },
      {
         title: 'New smart LCD',
         price: 1200,
         discount: 14,
         thumbnail: "../public/img/trm6.jpg"
      },
      {
         title: 'New smart LCD',
         price: 1200,
         discount: 14,
         thumbnail: "../public/img/w7.jpg"
      },
   ])
  return (
    <Layout>
        <div>
            <header>
                <Swiper
                    className='z-[-1]'
                    pagination={true}
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={1}
                    
                    >
                    <SwiperSlide>
                       <img src='../public/img/b8.jpg' className='w-full'/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                       <img src='../public/img/b1.jpg' className='w-full'/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                       <img src='../public/img/b6.jpg' className='w-full'/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                       <img src='../public/img/b7.jpg' className='w-full '/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                       <img src='../public/img/b4.jpg' className='w-full'/>
                    </SwiperSlide>
                    
        
                </Swiper>
            </header>

            <div className='md:p-16 p-8'>
               <h1 className='text-3xl font-bold text-center'>Latest Products</h1>
               <p className='text-center mx-auto text-gray-600 md:w-7/12 mt-2 mb-6'>lorem</p>
               <div className='md:w-10/12 mx-auto grid md:grid-cols-4 gap-12 '>
                  {
                     products.map((item,index) => (
                        <div key={index} className='bg-white shadow-lg border'>
                           <img src={item.thumbnail}/>
                           <div className='p-4'>
                              <h1 className='text-lg font-semibold'>{item.title}</h1>
                              <div className='space-x-2'>
                              <label className='font-bold text-lg'>{item.price - (item.price*item.discount)/100}</label>
                                 <del>{item.price}</del>
                                 <label className='text-gray-600'>({item.discount}%)</label>
                              </div>
                              <button className='bg-green-500 py-2 w-full text-white font-semibold rounded mt-4'>Buy now</button>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
        </div>
    </Layout>
  )
}

export default Home