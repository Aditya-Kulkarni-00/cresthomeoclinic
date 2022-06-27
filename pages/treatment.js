import Image from 'next/image';
import React from 'react'
import Navbar from '../components/Navbar';

function Treatment() {
  return (
    <div className='container mx-auto px-4'>
      <Navbar currentLink={"Treatment"} />
      <h2 className='flex flex-row justify-center mt-5 text-xl font-sans font-semibold'>We Care , We Cure</h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 mt-6">
        <Image src={"/treatment/1.jpg"} width={500} height={600} className="rounded-lg" />
        <div>
          <div className='flex flex-row justify-around items-center font-semibold text-lg leading-loose'>
            <div className='mt-10'>
              <p className='text-gray-900'>HOMEOPATHIC TREATMENTS FOR ULCERS</p>
              <p className='text-blue-500'>TONSILLITIS</p>
              <p className='text-red-500'>EPILEPSY</p>
              <p className='text-green-500'>LUNG DISEASE</p>
              <p className='text-orange-500'>ECZEMA</p>
              <p className='text-sky-500'>OSTEOARTHRITIS</p>
              <p className='text-gray-900'>HYPERACIDITY</p>
              <p className='text-blue-500'>FISSURE</p>
              <p className='text-red-500'>CORN REMOVAL</p>
              <p className='text-green-500'>PARKINSON DISEASE</p>
              <p className='text-orange-500'>PSORIASIS</p>
            </div>
            <div className='mt-10'>
              <p className='text-gray-900'>INFERTILITY</p>
              <p className='text-blue-500'>PIMPLES</p>
              <p className='text-red-500'>DIGESTIVE PROBLEMS</p>
              <p className='text-green-500'>HAIR LOSS</p>
              <p className='text-orange-500'>ASTHMA</p>
              <p className='text-sky-500'>TINNITUS</p>
              <p className='text-gray-900'>PEPTIC ULCER</p>
              <p className='text-blue-500'>GASTROENTERITIS</p>
              <p className='text-red-500'>TYPHOID</p>
              <p className='text-green-500'>PILES</p>
              <p className='text-orange-500'>KIDNEY STONE</p>
              <p className='text-gray-900'>POLYCYSTIC OVARIAN SYNDROME</p>
            </div>
          </div>
        </div>
        <div className='my-10 font-bold flex flex-row justify-center items-center text-xl md:text-3xl'>NATURAL TREATMENT FOR CHRONIC DISEASE</div>
        <Image src={"/treatment/2.jpg"} width={500} height={600} className="rounded-lg" />
        <Image src={"/treatment/3.jpg"} width={500} height={600} className="rounded-lg" />
        <div className='my-10 font-bold flex flex-row justify-center items-center text-xl md:text-3xl'>HOMEOPATHIC REMEDY CONCOCTION</div>
      </div>
    </div>
  )
}

export default Treatment;