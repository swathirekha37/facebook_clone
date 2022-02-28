import React, { useRef } from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db } from '../firebase';
import firebase from 'firebase/app';

function InputBox() {
    const {data:session} = useSession()
    const inputRef = useRef(null)

    const onSubmit = (e) => {
      e.preventDeafult()

      if(!inputRef.current.value) return ;

      db.collection('posts').add({
        message:inputRef.current.value,
        name:session.user.name,
        email:session.user.email,
        image:session.user.image,
        timestamp:firebase.firestore.FieldVlaue.serverTimestamp()
      })
      inputRef.current.value=''
    }
  return (
    <div className=' border-2 rounded-lg mx-11 mt-4 bg-slate-100 '>
      <div className='w-full flex p-4'>
        {session?.user?.image && <Image src={session.user.image} className="rounded-full"  width="50px" height="20px" /> }
        
        <form className='flex flex-1 px-4 '>
          <input type="text" ref={inputRef} placeholder={`What's on your mind, ${session.user.name}?`} className={"p-3  focus:outline-none  rounded-full w-full items-center"}/>
          <button type='submit' onClick={onSubmit} hidden>Submit</button>
        </form>
      </div>

       <div className='w-full flex  justify-evenly py-4'>
         <div className='flex hover:bg-slate-300 p-2 cursor-pointer rounded-xl'>
           <VideoCameraIcon className='h-5 text-red-600'/>
           <p className='text-sm pl-1'>Live Video</p>
         </div>
         <div className='flex hover:bg-slate-300 p-2 cursor-pointer rounded-xl'>
           <CameraIcon className='h-5 text-green-600'/>
           <p className='text-sm pl-1'>Photo/Video</p>
         </div>
         <div className='flex hover:bg-slate-300 p-2 cursor-pointer rounded-xl'>
            <EmojiHappyIcon className='h-5 text-yellow-600'/>
            <p className='text-sm pl-1'>Feeling/Activity</p>
         </div>
       </div>
    </div>
  );
}

export default InputBox;
