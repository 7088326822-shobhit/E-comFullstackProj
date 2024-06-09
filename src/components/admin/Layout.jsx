import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom"

const Layout = ({children}) => {

   const [size, setSize] = useState(280);
   const [mobileSize, setMobileSize] = useState(280)
   const [menu, setMenu] = useState(false);
   const location = useLocation();

   const menus = [
    {
        label: 'Dashbord',
        icon: <i className="ri-dashboard-3-line mr-2"></i>,
        link: '/admin/dashbord'
    },
    {
        label: 'Customer',
        icon: <i className="ri-user-line"></i>,
        link: '/admin/customers'
    },
    {
        label: 'Products',
        icon: <i className="ri-shopping-cart-line mr-2"></i>,
        link: '/admin/products'
    },
    {
        label: 'Orders',
        icon: <i className="ri-shape-line mr-2"></i>,
        link: '/admin/order'
    },
    {
        label: 'Payments',
        icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
        link: '/admin/payments'
    },
    {
        label: 'Settings',
        icon: <i className="ri-settings-3-line mr-2"></i>,
        link: '/admin/setting'
    },
    {
        label: 'Logout',
        icon: <i className="ri-logout-circle-r-line mr-2"></i>,
        link: '/admin/logout'
    },
   ]

  return (
   <>
   {/* desktop */}
      <div className="md:block hidden">
       <aside className='w-[280px] bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden'
       style={{
        width: size,
        transition: '1s'
       }}
       >
        <div className="flex flex-col">
          {
            menus.map((item,index) => (
                <Link to={item.link} key={index} className="px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white"
                 style={{
                    background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                 }}
                >
                
                {item.icon}
                {item.label}
                </Link>
            ))
          }
          
        </div>
       </aside>
       <section className='bg-red-300 h-screen' style={{
            marginLeft: size,
            transition: '1s'
        }}>
            <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0'>
                <div className='flex gap-4 items-center'>
                    <button 
                       onClick={() => setSize(size === 280 ? 0 : 280)}
                       className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8'>
                       <i className='ri-menu-2-line text-xl'></i>
                    </button>
                    <h1 className='text-md font-semibold'>ShopCart</h1>
                </div>

                <div>
                    <button className='relative'>
                        <img src='../public/img/d.jpg' className='w-10 h-10 rounded-full' 
                            onClick={() => setMenu(!menu)}
                        />

                        {
                            menu &&
                            <div className='absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg'>
                            <div>
                                <h1 className='text-lg font-semibold'>Shobhit</h1>
                                <p className='text-gray-500'>example@gmail.com</p>
                                <div className='h-px bg-gray-200 my-4'/>
                                    <button>
                                        <i className='ri-logout-circle-r-line mr-2'>Logout</i>
                                    </button>
                                
                            </div>
                        </div>
                        }
                    </button>
                </div>
            </nav>
            <div className='p-6'>
                {children}
            </div>
       </section>
         
    </div>

    {/* phone */}
    <div className="md:hidden block">
       <aside className='w-[280px] bg-indigo-600 fixed top-0 left-0 h-full z-50 overflow-hidden'
       style={{
        width: mobileSize,
        transition: '0.3s'
       }}
       >
        <div className="flex flex-col">
           <button className="text-left mx-4 mt-4"
           onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}
           >
              <i className="ri-menu-2-fill text-white text-xl"></i>
           </button>
          {
            menus.map((item,index) => (
                <Link to={item.link} key={index} className="px-4 py-3 text-gray-50 text-[17.5px] hover:bg-rose-600 hover:text-white"
                 style={{
                    background: (location.pathname === item.link) ? '#E11D48' : 'transparent'
                 }}
                >
                
                {item.icon}
                {item.label}
                </Link>
            ))
          }
          
        </div>
       </aside>
       <section className='bg-red-300 h-screen' >
            <nav className='bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0'>
                <div className='flex gap-4 items-center'>
                    <button 
                       onClick={() => setMobileSize(size === 0 ? 280 : 0)}
                       className='bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8'>
                       <i className='ri-menu-2-line text-xl'></i>
                    </button>
                    <h1 className='text-md font-semibold'>ShopCart</h1>
                </div>

                <div>
                    <button className='relative'>
                        <img src='../public/img/d.jpg' className='w-10 h-10 rounded-full' 
                            onClick={() => setMenu(!menu)}
                        />

                        {
                            menu &&
                            <div className='absolute top-18 right-0 bg-white w-[200px] p-6 shadow-lg'>
                            <div>
                                <h1 className='text-lg font-semibold'>Shobhit</h1>
                                <p className='text-gray-500'>example@gmail.com</p>
                                <div className='h-px bg-gray-200 my-4'/>
                                    <button>
                                        <i className='ri-logout-circle-r-line mr-2'>Logout</i>
                                    </button>
                                
                            </div>
                        </div>
                        }
                    </button>
                </div>
            </nav>
            <div className='p-6'>
                {children}
            </div>
       </section>
         
    </div>
   </>
  )
}

export default Layout