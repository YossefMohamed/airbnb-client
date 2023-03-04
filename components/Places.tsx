import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

function Places() {
  return (
    <>
        <div className="w-[35%] bg-red-400 h-full flex">

<Image
src="/apartment.png"
alt="image"
layout="responsive"
width={10}
height={10}
objectFit="cover"
className="flex-1"
/>
</div>
 <div className=" flex flex-col justify-evenly flex-1 gap-5">
   <h2 className="text-2xl font-bold border-b-2 py-2">Cape Town,South Africa</h2>
   <div className="text-sm mt-2 flex flex-col flex-1 gap-3">
     
     
<div className="data flex flex-col justify-center text-slate-500 ">
<div className="details">2 bedrooms , 1bathroom</div>
<div className="date">Added 11 Weeks ago</div>
</div>
<div className="flex items-center justify-between">
<div className="price text-lg font-bold">$43 night</div>
<div className="text-2xl hover:text-red-500 fill-red-500">
 <AiOutlineHeart />
</div>
</div>

     </div>
 </div>
    </>
  )
}

export default Places