import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import firebaseAppConfig from '../utils/firebase.config'

const auth = getAuth(firebaseAppConfig)

const Layout = ({children}) => {

  const [open, setOpen] = useState(false)
  const [accountMenu, setAccountMenu] = useState(false)
  const navigate = useNavigate()
  const [session, setSession] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setSession(user)
        }
        else{
          setSession(false)
        }
    })
  }, [])

  console.log(session);




  const menus = [
    {
      label : "Home",
      href: '/'
    },
    {
      label : "Product",
      href: '/product'
    },
    {
      label : "Category",
      href: '/category'
    },
    {
      label : "Contact Us",
      href: '/contact-us'
    },
  ]


  const mobileLink = (href) => {
      navigate(href)
      setOpen(false)
  }


  if (session === null) 
    return (
      <div className='bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center'>
        <span className='relative flex h-6 w-6'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-6 w-6 bg-sky-500'></span>
        </span>
      </div>
    )
  

  return (
    <div>
      <nav className='sticky top-0 shadow-lg bg-white z-50'>
        <div className='w-10/12 mx-auto flex items-center justify-between'>
          <img src='../public/img/download.jpg' className='w-20'/>

          <button className='md:hidden' onClick={() => setOpen(!open)}>
            <i className='ri-menu-3-fill text-3xl'></i>
          </button>

          <ul className='md:flex gap-4 items-center hidden'>
            {
              menus.map((item,index) => (
                <li key={index}>
                   <Link to={item.href} className='block py-3 hover:bg-rose-600 w-[100px] hover:text-white cursor-pointer text-center'>
                   {item.label}</Link>
                </li>
              ))
            }

            {
              !session && 
              <>
                <Link to="/login" className='block py-3 hover:bg-rose-600 w-[100px] hover:text-white cursor-pointer text-center'>Login</Link>
                <Link to="/signup" className='bg-blue-600 py-3 px-8 text-mdfont-semibold text-white  hover:bg-rose-600 w-[100px] hover:text-white cursor-pointer text-center'>Signup</Link>
              </>
            }
            {
              session && 
              <button className='relative' onClick={() => setAccountMenu(!accountMenu)}>
                <img src={session.photoURL ? session.photoURL : '../public/img/d.jpg'} className='w-10 h-10 rounded-full'/>
                {
                  accountMenu && 

                  <div className='flex flex-col items-start animate__animated animate__zoomIn w-[150px] py-1  bg-white absolute top-12 right-0 shadow-lg shadow-xl'>
                    
                    

                    <Link to="/profile" className='w-full text-left px-3 py-2 hover:bg-gray-300'>
                      My Profile
                      <i className='ri-user-line mr-2'></i>
                    </Link>


                    <Link to="/cart" className='w-full text-left px-3 py-2 hover:bg-gray-300'>
                      Cart<i className='ri-shopping-cart-line mr-2'></i>
                    </Link>
                    <button className='w-full text-left px-3 py-2 hover:bg-gray-300' onClick={() => signOut(auth)}>
                      Logout<i className='ri-logout-circle-r-line mr-2'></i>
                    </button>
                    
                  </div>
                }
              </button>
            }

            

          </ul>
        </div>
      </nav>
      
      <div>
        {children}
      </div>

      <footer className='bg-blue-400 py-16'>
      <div className='w-10/12 mx-auto grid md:grid-cols-4 md:gap-0 gap-8'>
       

        <div>
          <h1 className='text-white font-semibold text-2xl mb-3'>Website Link</h1>
          <ul className='space-y-2 text-slate-50'>
            {
              menus.map((item,index) => (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))
            }
            <li><Link to="/login">Login</Link></li>
            <li> <Link to="/signup">Signup</Link></li>
          </ul>
          
        </div>
        <div>
          <h1 className='text-white font-semibold text-2xl mb-3'>Follow us</h1>
          <ul className='space-y-2 text-slate-50'>
            
            <li><Link to="/login">Facebook</Link></li>
            <li> <Link to="/signup">Instagram</Link></li>
            <li> <Link to="/signup">Twitter</Link></li>
            <li> <Link to="/signup">linkedln</Link></li>
            <li> <Link to="/signup">Youtube</Link></li>
          </ul>
          
        </div>

        <div className='pr-4'>
          <h1 className='text-white font-semibold text-2xl mb-3'>Brand Details</h1>
          <p className='text-gray-100 mb-6'>lorem12</p>
          <img src='../public/img/download.jpg' className='w-[80px]'/>

        </div>

        <div>

          <h1 className='text-white font-semibold text-2xl mb-3'>Contact Us</h1>
           <form className='space-y-6'>
            <input
                 required 
                 type='text'
                 name='fullname'
                 placeholder='Enter Your Name'
                 className='bg-white w-full rounded p-3'
            />    
            <input 
                 required
                 type='email'
                 name='email'
                 placeholder='Enter Your Email'
                 className='bg-white w-full rounded p-3'
            /> 
            <textarea
               required
               name='message'  
               className='bg-white w-full rounded p-3'
               placeholder='message'
               rows={3}
            /> 
            <button className='py-3 px-8 rounded shadow-lg bg-blue-800 text-white font-semibold hover:bg-rose-600 hover:text-black'>Submit</button>  
           </form>

        </div>
        
      </div>

      </footer>

       {
        open && (
          <aside 
            className='overflow:hidden md:hidden bg-slate-900 shadow-lg fixed top-0 left-0 w-[250px] h-full z-50'
            style={{
              width: open ? 250 : 0,
              transition: '0.3s'
            }}
            >
            <div className='flex flex-col p-8'>

            {
              session && 
              <button className='relative' onClick={() => setAccountMenu(!accountMenu)}>
                <div className='flex items-center gap-3'>
                  <img src={session.photoURL ? session.photoURL : '../public/img/d.jpg'} className='w-10 h-10 rounded-full'/>
                  <p className='text-white capitalize text-left'>{session.displayName}</p>
                  <p className='text-white'>{session.email}</p>
                </div>
                {
                  accountMenu && 

                  <div className='flex flex-col items-start animate__animated animate__zoomIn w-[150px] py-1  bg-white absolute top-12 right-0 shadow-lg shadow-xl'>
                    
                    

                    <Link to="/profile" className='w-full text-left px-3 py-2 hover:bg-gray-300'>
                      My Profile
                      <i className='ri-user-line mr-2'></i>
                    </Link>


                    <Link to="/cart" className='w-full text-left px-3 py-2 hover:bg-gray-300'>
                      Cart<i className='ri-shopping-cart-line mr-2'></i>
                    </Link>
                    <button className='w-full text-left px-3 py-2 hover:bg-gray-300' onClick={() => signOut(auth)}>
                      Logout<i className='ri-logout-circle-r-line mr-2'></i>
                    </button>
                    
                  </div>
                }
              </button>
            }
              {
                menus.map((item,index ) => (
                  <button onClick={() => mobileLink(item.href)} key={index} className='text-white'>
                    {item.label}
                  </button>
                ))
              }
            </div>

          </aside>
        )
       }
      

    </div>
  )
}

export default Layout