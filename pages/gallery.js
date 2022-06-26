import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';

const imageArray = ["gallery/1.jpeg", "gallery/2.jpeg","gallery/3.jpeg","gallery/4.jpeg","gallery/5.jpeg"]

function Gallery() {
    return (
        <div className='container mx-auto px-4 pb-4'>
            <Navbar currentLink={"Gallery"} />
            <div className="grid grid-cols-4 gap-4">
                {
                    imageArray.map((img, index)=>(
                        <Image src={`/${img}`} width={400} height={400} className={`rounded-md`} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery;