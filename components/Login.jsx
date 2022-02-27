
import React from 'react'
import fb_logo from '../public/images/fb_logo.jpeg'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid grid-rows-2 place-items-center mt-10 pt-10'>
      
      <Image src={fb_logo} height={200} width={200}/>
      <h1 onClick={signIn} className='rounded-full bg-blue-500 cursor-pointer text-white p-4'>Login with Facebook</h1>
      
    </div>
  )
}

export default Login
