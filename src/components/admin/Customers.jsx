import React, { useState } from 'react'
import Layout from './Layout'

const Customers = () => {

    const [Customer, setCustomer] = useState([
        {
          srNo : 1,
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Date: '12-5-2024',
          amount:  40000,
          Products : 'HP laptop',
          status: 'success'
        },
        {
          srNo : 1,
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Date: '12-5-2024',
          amount:  40000,
          Products : 'HP laptop',
          status: 'success'
        },
        {
          srNo : 1,
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Date: '12-5-2024',
          amount:  40000,
          Products : 'HP laptop',
          status: 'success'
        },
        {
          srNo : 1,
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Date: '12-5-2024',
          amount:  40000,
          Products : 'HP laptop',
          status: 'success'
        },
        {
          srNo : 1,
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Date: '12-5-2024',
          amount:  40000,
          Products : 'HP laptop',
          status: 'success'
        },
       
        
       
        
    ])

  return (
    <Layout>
        <div>
           <h1 className='text-xl font-semibold'>Customer detail</h1>
           <div className='mt-6'>
            <table className='w-full'>
                <thead>
                    <tr className='bg-rose-600 text-white text-left'>
                        
                        <th className='py-3'>Customer Name</th>
                        <th>Email Id</th>
                        <th>Mobile</th> 
                        <th>Date</th>
                    
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    Customer.map((item,index) => (
                        <tr className='text-left' key={index} style={{
                            background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                        }}>
                            <td className='capitalize px-4 py-3'>
                              <div className='flex gap-3 items-center'>
                                <img src='../public/img/d.jpg' className='w-10 h-10 rounded-full'/>
                                <div className='flex flex-col justify-center'>
                                  <span className='font-semibold'>{item.customerName}</span>
                                  <small className='text-gray-500'>{item.Date}</small>
                                </div>
                                
                              </div>
                            </td>
                            
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.Date}</td>
                           
                           
                        </tr>
                    ))
                   }
                   
                    
                </tbody>
            </table>
           </div>
        </div>
    </Layout>
  )
}

export default Customers



