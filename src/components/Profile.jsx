import React, { useEffect, useReducer, useState } from 'react'
import firebaseAppConfig from '../utils/firebase.config'
import { onAuthStateChanged, getAuth, updateProfile} from 'firebase/auth'
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const auth = getAuth(firebaseAppConfig)
const db = getFirestore(firebaseAppConfig)
const storage = getStorage()


const Profile = () => {

    const [uploading, setUploading] = useState(false)
    const navigate = useNavigate()
    const [session, setSession] = useState(null)
    const [formValue, setFormValue] = useState({
        fullname: '',
        email: '',
        mobile: '',
        // address: '',
        // city: '',
        // state: '',
        // country: '',
        // pincode: ''
    })
    const [address, setAddress] = useState({
        address: '',
        city: '',
        state: '',
        pincode: '',
        country: ''
    })
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            }
            else{
                setSession(false)
                navigate("/login")
            }
        })
    }, [])


    useEffect(() => {
        if (session) {
            setFormValue({
                ...formValue,
                fullname: session.displayName,
                mobile: (session.phoneNumber ? session.phoneNumber : '')
            })
        }
    }, [session])

    const setProfilePicture = async(e) => {
        const input = e.target;
        const file = input.files[0]
        const filenameArray  = file.name.split('.')  
        const ext = filenameArray[filenameArray.lenght - 1]
        const filename  = Date.now()+'.'+ext
        const bucket = ref(storage, `picture/${filename}`)
        setUploading(true)
        const snapshot = await uploadBytes(bucket, file)
        const url = await getDownloadURL(snapshot.ref)
        await updateProfile(auth.currentUser, {
            photoURL: url
        })
        setUploading(false)
        setSession({
            ...session,
            photoURL: url
        })
        // console.log(snapshot);
        
    }

    const handleFormValue = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.value
        setFormValue({
            ...formValue,
            [name] : value
        })
    }

    const saveProfilePicture = async(e) => {
         e.preventDefault()

         await updateProfile(auth.currentUser, {
            displayName: formValue.fullname,
            phoneNumber: formValue.mobile
         })
         new swal({
            icon: 'success',
            title: 'Profile saved'
         })
            
    }

    const addAdressByUser = (e) => {
        e.preventDefault()
       
        console.log(address);
    }

    const handleAddressFormValue = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setAddress({
            ...address,
            [name] : value
        })    
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
    <Layout>
      <div className='mx-auto md:my-16 shadow-lg rounded-md p-8 w-7/12 border'>
        <div className='flex gap-3'>
            <i className='ri-user-line text-4xl'></i>
            <h1 className='text-3xl font-semibold'>Profile</h1>
        
        </div>
        <hr className='my-6'/>

        <div className='w-24 h-24 mx-auto relative mb-6'>
        {
            uploading ? (
              <img src='../public/img/loader.gif' className='rounded-full w-24 h-24'/>
            )
            : 
            (

            <img src={session.photoURL ? session.photoURL : '../public/img/d.jpg'} className='rounded-full w-24 h-24'/>
            )
        }
        <input type='file' accept="image/*" className='opacity-0 absolute top-0 left-0 w-full h-full ' onChange={setProfilePicture}/>
        </div>

        <form className='grid grid-cols-2 gap-6' onSubmit={saveProfilePicture}>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>FullName</label>
                <input 
                  onChange={handleFormValue}
                   name='fullname'
                   type='text'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.fullname}
                //    placeholder='Enter Your Name' 
                   required
                />   
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>Email</label>
                <input 
                   onChange={handleFormValue}
                   name='email'
                   type='email'
                //    placeholder='Enter Email'
                   className='p-2 rounded border border-gray-300'
                   value={session.email}
                required
                />   
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>Mobile No.</label>
                <input 
                   onChange={handleFormValue}

                   name='mobile'
                   type='number'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.mobile}
                //    placeholder='mobile number'
                   required
                />   
            </div>

            <div/>
             
            <button className='px-5 py-2 bg-rose-600 text-white rounded w-fit hover:bg-blue-600 hover:text-green-100'>
                <i className='ri-save-line mr-2'></i>
                Save
            </button>
           
            
            
            
            
                  


        </form>
      </div>
      <div className='mx-auto md:my-16 shadow-lg rounded-md p-8 w-7/12 border'>
        <div className='flex gap-3'>
            <i className='ri-link-unlink text-4xl'></i>
            <h1 className='text-3xl font-semibold'>Delivery address</h1>
        
        </div>
        <hr className='my-6'/>

        

        <form className='grid grid-cols-2 gap-6' onSubmit={addAdressByUser}>
            <div className='flex flex-col gap-2 col-span-2'>
                <label className='text-lg font-semibold'>Area/street/Villagew</label>
                <input 
                   onChange={handleAddressFormValue}
                   name='area'
                   type='text'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.address}
                // placeholder='Enter Address'
                required
                />   
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>City</label>
                <input 
                   onChange={handleAddressFormValue}
                   name='city'
                   type='text'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.city}
                // placeholder='Enter City'
                required
                />   
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>State</label>
                <input 
                   onChange={handleAddressFormValue}
                   name='state'
                   type='text'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.state}
                // placeholder='Enter State'
                required
                />   
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>Country</label>
                <input 
                   onChange={handleAddressFormValue}
                   name='country'
                   type='text'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.country}
                // placeholder='Enter Country'
                required
                />   
            </div>
            <div className='flex flex-col gap-2'>
                <label className='text-lg font-semibold'>Pincode:</label>
                <input 
                  onChange={handleAddressFormValue}
                   name='pincode'
                   type='number'
                   className='p-2 rounded border border-gray-300'
                   value={formValue.pincode}
                // placeholder='Enter Pincode'
                required
                />   
            </div>

            
             
            <button className='px-4 py-2 bg-rose-600 text-white rounded w-fit hover:bg-blue-600 hover:text-green-100'>
                <i className='ri-save-line mr-2'></i>
                Save
            </button>
           
            
            
            
            
                  


        </form>
      </div>
    </Layout>
  )
}

export default Profile