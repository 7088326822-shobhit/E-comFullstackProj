import React, { useState } from 'react'
import Layout from './Layout'


const Payments = () => {

    const [payments, setPayments] = useState([
        
        {
          paymentId : 'pay4231',
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Product: 'realme C31',
          amount : 10000,
          Date: '12-5-2024',
        },
        {
          paymentId : 'pay4231',
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Product: 'realme C31',
          amount : 10000,
          Date: '12-5-2024',
        },
        {
          paymentId : 'pay4231',
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Product: 'realme C31',
          amount : 10000,
          Date: '12-5-2024',
        },
        {
          paymentId : 'pay4231',
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Product: 'realme C31',
          amount : 10000,
          Date: '12-5-2024',
        },
        {
          paymentId : 'pay4231',
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Product: 'realme C31',
          amount : 10000,
          Date: '12-5-2024',
        },
        {
          paymentId : 'pay4231',
          customerName: 'Abhay kumar',
          email: 'abhay23@gmail.com',
          mobile: '9544525267' ,
          Product: 'realme C31',
          amount : 10000,
          Date: '12-5-2024',
        },
        
       
        
       
        
    ])

  return (
    <Layout>
        <div>
           <h1 className='text-xl font-semibold'>Orders</h1>
           <div className='mt-6'>
            <table className='w-full'>
                <thead>
                    <tr className='bg-rose-600 text-white text-center'>
                        <th>PaymentId</th>
                        <th className='py-4'>Customer Name</th>
                        <th>Email Id</th>
                        <th>Mobile</th> 
                        <th>Ammount</th>
                        <th>Product</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    payments.map((item,index) => (
                        <tr className='text-center' key={index} style={{
                            background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                        }}>
                        {/* <td className='capitalize px-4 py-2'>
                          <div className='flex gap-3 items-center'>
                            <img src='../public/img/d.jpg' className='w-10 h-10 rounded-full'/>
                            <div className='flex flex-col justify-center'>
                              <span className='font-semibold'>{item.customerName}</span>
                              <small className='text-gray-500'>{item.Date}</small>
                            </div>
                          </div>
                        </td> */}
                        
                            <td className='px-4 py-2'>{item.paymentId}</td>
                             <td>{item.customerName}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.amount.toLocaleString()}</td>
                            <td>{item.Product}</td>
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

export default Payments



