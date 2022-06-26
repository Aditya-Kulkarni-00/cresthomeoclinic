import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';

const imageArray = ["social/1.jpeg", "social/2.jpeg","social/3.jpeg","social/4.jpeg","social/5.jpeg","social/6.jpeg",
"social/7.jpeg","social/8.jpeg","social/9.jpeg","social/10.jpeg","social/11.jpeg","social/12.jpeg"]

function Social() {
  return (
    <div className='container mx-auto px-4 mb-4'>
        <Navbar currentLink={"Social"}/>
        <div className="grid grid-cols-4 gap-4">
                {
                    imageArray.map((img, index)=>(
                        <Image src={`/${img}`} width={300} height={300} className={`rounded-md`} key={index}/>
                    ))
                }
            </div>
    </div>
  )
}

export default Social;