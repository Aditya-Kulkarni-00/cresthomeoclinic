import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';

const imageArray = ["gallery/1.jpeg", "gallery/2.jpeg","gallery/3.jpeg","gallery/4.jpeg","gallery/5.jpeg","gallery/6.jpeg",
"gallery/7.jpeg","gallery/8.jpeg","gallery/9.jpeg","gallery/10.jpeg","gallery/11.jpeg","gallery/12.jpeg"]

function Gallery() {
    return (
        <div className='container mx-auto px-4 py-4'>
            <Navbar currentLink={"Gallery"} />
            <div class="grid grid-cols-4 gap-4">
                {
                    imageArray.map((img, index)=>(
                        <Image src={`/${img}`} width={300} height={300} className={`rounded-md`}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery;