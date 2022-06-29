import React from 'react'

function BranchHomeDetails() {
    return (
        <div className='border flex flex-col md:flex-row  my-6 rounded-md py-5 px-4 '>
            <div className='md:w-1/2'>
                <p className='text-gray-600 font-bold'>Branch 1:</p>
                <h2 className='font-semibold text-xl my-4 text-rose-500'>Crest Homeo Clinic</h2>
                <p className='text-gray-600'>Miyapur , Hyderabad, Pin 500050</p>
                <p className='text-gray-600'>State : Telangana , India</p>
            </div>
            <div className='md:w-1/2 mt-4 md:mt-0 md:flex flex-col items-end justify-end text-justify'>
                <p className='text-gray-600 font-bold'>Branch 2:</p>
                <h2 className='font-semibold text-xl my-4 text-sky-400'>HHW Clinic</h2>
                <p className='text-gray-600'>Gannavaram , City Vijaywada</p>
                <p className='text-gray-600'>State : Andhra Pradesh, India</p>
            </div>

        </div>
    )
}

export default BranchHomeDetails