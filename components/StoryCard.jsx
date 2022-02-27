import React from 'react';
import Image from 'next/image';

function StoryCard({name,src,profile}) {
  return (
      <div>
          
        <div className='relative flex  md:max-w-[200px] max-w-[50px] rounded-xl pr-4'>
        
        <div className={'absolute left-2 top-2 z-10'}><Image className='rounded-full'  src={profile} height={50} width={50}/></div>
        <div className={''}><Image className='rounded-xl' src={src}  height={200} width={150}/> <p>{name}</p></div>
        
        </div>
        

    </div>
  );
}

export default StoryCard;
