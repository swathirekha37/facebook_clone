// import { getServerSession } from 'next-auth'
// import { getSession, useSession } from "next-auth/react"
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home({session}) {

  if(!session)return <Login/>
  console.log(session);

  return (
    
    <div className=''>
      <Head>
        <title>Facebook clone</title>
        
      </Head>

      <Header/>

      <main className='flex'>
        <Sidebar/>
        <Feed/>
        
        {/* widgets */}
      </main>

      
    </div>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering

export async function getServerSideProps(context){
  const session=await getSession(context)
  return{
    props : {
      session
    }
  }
}
