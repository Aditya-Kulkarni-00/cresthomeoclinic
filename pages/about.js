import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
function about() {
  return (
    <div className='container mx-auto px-4'>
      <Navbar currentLink={"About"}/>
      <div className='container mx-auto'>
      <div className='flex flex-col md:flex-row justify-start items-center mt-8 w-full'>
          <div className='flex flex-row justify-center lg:block'>
          <Image src={`/photos/1.jpeg`} height={200} width={200} className='object-cover rounded-lg h-64'/>
          </div>
          <div className='md:w-1/2 flex flex-col items-start justify-start md:ml-8 my-8'>
            <p className='font-bold text-xl flex flex-row justify-center w-full'>Dr. HANUP KUMAR</p>
            <p className='font-lg mt-4'><span className='font-bold text-justify'>Bachelor of Homeopathic Medicine and Surgery (BHMS)</span> from NTR Univesity of Health Sciences formerly UHS , Vijaywada Andra Pradesh </p>
            <p className='text-lg font-light mt-4 text-justify'>Specialist in curing Ulcers, Tonsillitis, Epilepsy, Lung Disease, Eczema, Infertility, Digestive Problems, Pimples, Hair Loss, Asthma, Osteoarthritis, Hyperacidity, Fissure, Corn Removal, Parkinson Disease, Psoriasis, Tinnitus, Peptic Ulcer, Gastroenteritis, Typhoid, Piles, Kidney Stone, Polycystic Ovarian Syndrome and more..</p>
            <p className='text-md mt-4 font-bold text-justify'>Dr Hanup has been practicing Homeopathy since 1995.</p>
          </div>
      </div>
      </div>

    </div>
  )
}

export default about