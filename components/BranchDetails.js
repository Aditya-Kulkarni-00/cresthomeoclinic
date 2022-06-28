import React from 'react'

function BranchDetails() {
  return (
    <div className='border flex flex-col md:flex-row  my-6 rounded-md py-5 px-4 '>
        <div className='w-1/2'>
          <h2 className='font-semibold text-lg mb-4'>Branch 1 : Crest Homeo Clinic</h2>
          <p className='text-gray-600'>Flat No :201/A, First Floor</p>
          <p className='text-gray-600'>Sri Kalki Chambers, Oppo. Pullareddy Sweets </p>
          <p className='text-gray-600'>Miyapur , Hyderabad, Pin 500050</p>
          <p className='text-gray-600'>State : Telangana , India</p>
        </div>
        <div className='w-1/2 mt-4 md:mt-0'>
          <h2 className='font-semibold text-lg mb-4'>Branch 2: HHW Clinic</h2>
          <p className='text-gray-600'>Srinagar Colony , Oppo. HDFC Bank</p>
          <p className='text-gray-600'>Gannavaram , City Vijaywada</p>
          <p className='text-gray-600'>Dist : Krishna , Pin 521101</p>
          <p className='text-gray-600'>State : Andhra Pradesh, India</p>
        </div>

    </div>
  )
}

export default BranchDetails