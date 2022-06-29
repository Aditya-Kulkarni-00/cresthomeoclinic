import React from 'react'

function BranchDetails() {
  return (
    <div className='border flex flex-col md:flex-row  my-6 rounded-md py-5 px-4 '>
        <div className='md:w-1/2'>
          <h2 className='font-semibold text-xl mb-4 text-rose-500'>Branch 1 : Crest Homeo Clinic</h2>
          <p className='text-gray-600'>Flat No :201/A, First Floor</p>
          <p className='text-gray-600'>Sri Kalki Chambers, Oppo. Pullareddy Sweets </p>
          <p className='text-gray-600'>Miyapur , Hyderabad, Pin 500050</p>
          <p className='text-gray-600'>State : Telangana , India</p>
          <p className='text-gray-600'>Phone : 8886911148</p>
          <p className='text-gray-600'>Phone : 8886911147</p>
        </div>
        <div className='md:w-1/2 mt-4 md:mt-0 md:flex flex-col items-end justify-end text-justify'>
          <h2 className='font-semibold text-xl mb-4 text-sky-400'>Branch 2: HHW Clinic</h2>
          <p className='text-gray-600'>Srinagar Colony , Oppo. HDFC Bank</p>
          <p className='text-gray-600'>Gannavaram , City Vijaywada</p>
          <p className='text-gray-600'>Dist : Krishna , Pin 521101</p>
          <p className='text-gray-600'>State : Andhra Pradesh, India</p>
          <p className='text-gray-600'>Phone : 9966450446</p>
          <p className='text-gray-600'>Phone : 8331890446</p>
        </div>

    </div>
  )
}

export default BranchDetails