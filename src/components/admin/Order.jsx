import React, { useState } from 'react'
import Layout from './Layout'

const Order = () => {

    const [order, setOrder] = useState([
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
           <h1 className='text-xl font-semibold'>Orders</h1>
           <div className='mt-6'>
            <table className='w-full'>
                <thead>
                    <tr className='bg-rose-600  text-white'>
                        <th>Sr No</th>
                        <th>Customer Name</th>
                        <th>Email Id</th>
                        <th>Mobile</th> 
                        <th>Ammount</th>
                        <th>Products</th>
                        <th>Date</th>
                        <th>status</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    order.map((item,index) => (
                        <tr className='text-center' key={index} style={{
                            background: (index+1)%2 === 0 ? '#f1f5f9' : 'white'
                        }}>
                            <td className='p-4'>{index+1}</td>
                            <td>{item.customerName}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td>{item.amount}</td>
                            <td>{item.Products}</td>
                            <td>{item.Date}</td>
                            <td>
                              <select>
                                <option value="success">Success</option>
                                <option value="returned">Return</option>
                                <option value="dispatch">Dispatch</option>
                                <option value="Pending">Pending</option>
                              </select>
                            </td>
                           
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

export default Order



