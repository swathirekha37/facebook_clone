import React from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

function InputBox() {
    const {data:session} = useSession()
  return (
    <div className='flex'>
      {session?.user?.image && <Image src={session.user.image} className="rounded-full "  width="40px" height="40px" /> }
       
       {/* <form>
        <input type="text" value="swathi" className={"border-2 rounded-lg w-full"}/>
       </form> */}
    </div>
  );
}

export default InputBox;
