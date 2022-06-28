import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';

function Treatment() {
  return (
    <div className='container mx-auto px-4'>
      <Navbar currentLink={"Treatment"} />
      <h2 className='flex flex-row justify-center mt-5 text-xl font-sans font-semibold'>We Care , We Cure</h2>

      <div className='flex flex-col justify-center w-full md:flex-row items-center mt-10'>
        <Image src={"/treatment/1.jpg"} width={600} height={600} className="rounded-lg"/>
        <div className='w-full md:w-1/2 mt-6 md:ml-6 md:mt-0 text-2xl px-5 leading-loose  mr-4 flex-none'>
          <p className=''>
          <span className='text-black text-3xl font-semibold'>HOMEOPATHIC TREATMENTS FOR </span>
          <span>ULCERS, </span>
          <span className='text-sky-500'>TONSILLITIS, </span>
          <span className='text-rose-500'>EPILEPSY, <br/></span>
          <span className='text-violet-500'>LUNG DISEASE, </span>
          <span className='text-green-500'>ECZEMA, </span>
          <span className='text-orange-400'>INFERTILITY, <br/></span>
          <span className='text-sky-500'>DIGESTIVE PROBLEMS, </span>
          <span className='text-rose-500'>PIMPLES, </span>
          <span className='text-violet-500'>HAIR LOSS, </span>
          <span className='text-green-500'>ASTHMA, </span>
          <span className='text-orange-400'>OSTEOARTHRITIS, <br/></span>
          <span className='text-sky-500'>HYPERACIDITY, </span>
          <span className='text-rose-500'>FISSURE, </span>
          <span className='text-violet-500'>CORN REMOVAL, </span>
          <span className='text-green-500'>PARKINSON DISEASE, </span>
          <span className='text-orange-500'>PSORIASIS, </span>
          <span className='text-sky-500'>TINNITUS, <br/></span>
          <span className='text-black'>PEPTIC ULCER, </span>
          <span className='text-rose-500'>GASTROENTERITIS, <br/></span>
          <span className='text-violet-500'>TYPHOID, PILES, </span>
          <span className='text-orange-500'>KIDNEY STONE, </span>
          <span className='text-sky-500'>POLYCYSTIC OVARIAN SYNDROME AND MORE.. </span>
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center w-full md:flex-row-reverse items-center mt-10'>
      <Image src={"/treatment/2.jpg"} width={600} height={600} className="rounded-lg"/>
      <div className='w-full md:w-1/2 mt-6 text-3xl font-bold px-5 '>NATURAL TREATMENT FOR CHRONIC DISEASE</div>
      </div>


      <div className='flex flex-col justify-center w-full md:flex-row items-center my-10'>
      <Image src={"/treatment/3.jpg"} width={600} height={600} className="rounded-lg"/>
      <div className='w-full md:w-1/2 mt-6 md:ml-6 text-3xl font-bold px-5 '>HOMEOPATHIC REMEDY CONCOCTION</div>
      </div>
    </div>
  )
}

export default Treatment;