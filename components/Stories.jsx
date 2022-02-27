import React from 'react';
import StoryCard from './StoryCard';

const stories=[
    {
        name:'Mark Zuckerburg',
        src:'https://links.papareact.com/xql',
        profile:'https://links.papareact.com/snf'
    },
    {
        name:'Jeff Bezoz',
        src:'https://links.papareact.com/k2j',
        profile:'https://links.papareact.com/f0p'
    },
    {
        name:'Bill Gates',
        src:'https://links.papareact.com/4u4',
        profile:'https://links.papareact.com/zvy'
    },
    {
        name:'Elon Musk',
        src:'https://links.papareact.com/4zn',
        profile:'https://links.papareact.com/kxk'
    }
]

function Stories() {
  return (
    <div className='flex justify-center  mt-10 ml-16 '>
      {stories.map(story => <StoryCard key={story.name} name={story.name} src={story.src} profile={story.profile}/>)}
    </div>
  );
}

export default Stories;
