import React from 'react';

function HeaderIcon({Icon,active}) {
  return (
    <div className='hover:bg-slate-300 rounded-md text-gray-600 px-1'>
      <Icon className={` h-6 hover:text-blue-500 ${active && 'text-blue-500'}`}/>
    </div>
  );
}

export default HeaderIcon;
