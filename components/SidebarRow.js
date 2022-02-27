import React from 'react';
import Image from 'next/image';

function SidebarRow({src,Icon,title}) {
    return (

        <div className='flex ml-5 mb-2  md:max-w-[200px] max-w-[50px] p-1 cursor-pointer rounded-xl hover:bg-gray-300'>
            {src && <Image src={src} className="mt-7" height="30px" width="30px" />}
            {Icon && <Icon className={"h-8 text-blue-500"} />}
            <h1 className={`hidden md:inline-flex pl-3 `}>{title}</h1>
        </div>

    );
}

export default SidebarRow;
