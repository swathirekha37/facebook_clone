import React from 'react';
import SidebarRow from './SidebarRow';
import { useSession } from 'next-auth/react';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/outline';

function Sidebar() {
    
  const {data:session} = useSession()
  console.log(session)
  return (
    <div className='mt-6'>
      <SidebarRow src={session.user.image}/>
      <SidebarRow Icon={UsersIcon} title="Friends"/>
      <SidebarRow Icon={UserGroupIcon} title="Groups"/>
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SidebarRow Icon={CalendarIcon} title="Events"/>
      <SidebarRow Icon={ClockIcon} title="Memories"/>
      <SidebarRow Icon={ChevronDownIcon} title="See More"/>
    </div>
  );
}

export default Sidebar;
