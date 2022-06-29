import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';

function Treatment() {
  return (
    <div className='container mx-auto px-4'>
      <Navbar currentLink={"Treatment"} />
      <h2 className='flex flex-row justify-center mt-5 text-3xl font-sans font-semibold'>We Care , We Cure</h2>

      <div className='flex flex-col justify-center w-full md:flex-row items-center mt-10'>
        <Image src={"/treatment/1.jpg"} width={600} height={600} className="rounded-lg"/>
        <div className='w-full md:w-1/2 mt-6 md:ml-6 md:mt-0 text-xl px-5 leading-loose  mr-4 flex-none'>
          <p className=''>
          <span className='text-black text-xl md:text-2xl font-semibold text-justify'>HOMEOPATHIC TREATMENTS FOR<br/> </span>
          <span>ULCERS, </span>
          <span className='text-sky-500'>TONSILLITIS, </span>
          <span className='text-rose-500'>EPILEPSY, </span>
          <span className='text-violet-500'>LUNG DISEASE, </span>
          <span className='text-green-500'> ECZEMA, </span>
          <span className='text-orange-400'>INFERTILITY, </span>
          <span className='text-sky-500'>DIGESTIVE PROBLEMS, </span>
          <span className='text-rose-500'>PIMPLES, </span>
          <span className='text-violet-500'>HAIR LOSS, </span>
          <span className='text-green-500'>ASTHMA, </span>
          <span className='text-orange-400'>OSTEOARTHRITIS, </span>
          <span className='text-sky-500'>HYPERACIDITY, </span>
          <span className='text-rose-500'>FISSURE, </span>
          <span className='text-violet-500'>CORN REMOVAL, </span>
          <span className='text-green-500'>PARKINSON DISEASE, </span>
          <span className='text-orange-500'>PSORIASIS, </span>
          <span className='text-sky-500'>TINNITUS, </span>
          <span className='text-black'>PEPTIC ULCER, </span>
          <span className='text-rose-500'>GASTROENTERITIS, </span>
          <span className='text-violet-500'>TYPHOID, PILES, </span>
          <span className='text-orange-500'>KIDNEY STONE, </span>
          <span className='text-sky-500'>POLYCYSTIC OVARIAN SYNDROME AND MORE.. </span>
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center w-full md:flex-row items-center mt-10'>
      <div className='w-full md:w-1/2 mb-6 text-3xl font-bold px-5 '>NATURAL TREATMENT FOR CHRONIC DISEASE</div>
      <Image src={"/treatment/2.jpg"} width={600} height={600} className="rounded-lg"/>
      </div>


      <div className='flex flex-col justify-center w-full md:flex-row-reverse items-center my-10'>
      <div className='w-full md:w-1/2 mb-6 md:ml-6 text-3xl font-bold px-5 '>HOMEOPATHIC REMEDY CONCOCTION</div>
      <Image src={"/treatment/3.jpg"} width={600} height={600} className="rounded-lg"/>
      </div>
    </div>
  )
}

export default Treatment;