import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebaseAppConfig from '../utils/firebase.config'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

const auth = getAuth(firebaseAppConfig)


const Singup = () => {
    
    const navigate = useNavigate()
    const [passwordType, setPasswordType] = useState('password')
    const [error ,setError] = useState(null)
    const [loader,setLoader] = useState(false)
    const [formValue, setFormValue] = useState({
       fullname: '',
       email: '',
       password: ''
    })

    const handleSubmit = async(e) => {
      try {
        e.preventDefault();
        setLoader(true)
        await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
        await updateProfile(auth.currentUser, {displayName: formValue.fullname})
        navigate("/")

      } catch (err) {
        setError(err.message)
      }
      finally{
        setLoader(false)
      }
    }

    const handleOnChange = (e) => {
      const input = e.target
      const name = input.name
      const value = input.value
      setFormValue({
        ...formValue,
        [name] : value
      })
      setError(null)
    }

  return (
    <div className='grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__zoomIn'>
      <img src='../public/img/signup.jpg' className='w-full md:h-full h-25 object-cover'/>
      <div className='flex flex-col md:p-16 p-8'>
        <h1 className='text-3xl font-bold'>New User</h1>
        <p className='text-gray-600 text-lg'>Create your account to start Shopping</p>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <label className='font-semibold text-lg mb-1'>FullName:</label>
                <input
                  onChange={handleOnChange}
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
                   onChange={handleOnChange}
                   type='email'
                   name='email'
                   placeholder='Enter Your Email'
                   className='p-3 border border-gray-300 rounded'
                   required
                />
            </div>
            <div className='flex flex-col relative'>
                <label className='font-semibold text-lg mb-1'>Password:</label>
                <input
                   onChange={handleOnChange}
                   type={passwordType}
                   name='password'
                   placeholder='************'
                   className='p-3 border border-gray-300 rounded'
                   required
                />
                
                <button type='button' onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")} className='absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-white'>
                    <i className='ri-eye-line'></i>
                    {
                        passwordType === "password" ?
                        <i className="ri-eye-line"></i>
                        :
                        <i className="ri-eye-off-line"></i>
                    }
                </button>
            </div>
            {
              loader ? 
              <h1 className='text-lg font-semibold text-gray-600'>loading...</h1> 
              :

            <button className='py-3 px-8 rounded shadow-lg bg-blue-600 text-white font-semibold hover:bg-rose-600 hover:text-black'>Signup</button>
            }
        </form>
        <div className='mt-2'>
            Already have an account ? <Link to="/login" className='bg-blue-400 font-semibold p-1'>Signin</Link>
        </div>

        {
          error && (
            <div className='flex justify-between items-center mt-2 bg-rose-600 p-3 rounded shadow text-white font-semibold animate__animated animate-pulse'>
             <p>{error}</p>
             <button onClick={() => setError(null)}>
                <i className='ri-close-line'></i>
             </button>
           </div>
          )
        }

       
      </div>
    </div>
  )
}

export default Singup