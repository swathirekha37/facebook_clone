import Image from 'next/image';
import React from 'react';
import fb_logo from '../public/images/fb_logo.jpeg'
import { BellIcon, ChatIcon, ChevronDownIcon, FlagIcon, HomeIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon';
import {SearchIcon} from '@heroicons/react/outline'
import Login from './Login';
import { signOut, useSession } from 'next-auth/react';


function Header() {

  const {data:session} = useSession()
console.log(session)
  return (
    <div className='flex border-b-2 border-solid px-2'>
      <div className='flex p-2'>

          <Image className='flex justify-start' src={fb_logo} height={40} width={40}/>

          <div className='flex items-center ml-3 bg-gray-200 rounded-full '>
              <SearchIcon className=' h-5 w-6 text-gray-800 ml-3 '/>
              <input type="text" placeholder="Search Facebook" className='outline-none hidden md:inline-flex text-slate-500 ml-2 bg-transparent'/>
          </div>

      </div>

          <div className='flex space-x-6 items-center md:space-x-11 justify-center mr-5 flex-grow'>
              <HeaderIcon Icon={HomeIcon} active/>
              <HeaderIcon Icon={FlagIcon} />
              <HeaderIcon Icon={PlayIcon} />
              <HeaderIcon Icon={ShoppingCartIcon} />
              <HeaderIcon Icon={UserGroupIcon} />
          </div>
          
          <div className="flex items-center ">
            
              {session?.user?.image && <Image src={session.user.image} className="rounded-full cursor-pointer"  width="40px" height="40px" onClick={signOut}/> }
              <h3 className='mr-2 font-semibold'>{session.user.name}</h3>
              
              <div className='flex justify-between hidden xl:inline-flex'>
                <HeaderIcon Icon={ViewGridIcon} />
                <HeaderIcon Icon={ChatIcon} />
                <HeaderIcon Icon={BellIcon}/>
                <HeaderIcon Icon={ChevronDownIcon} />
              
              </div>
          </div>
    </div>
  );
}

export default Header;
