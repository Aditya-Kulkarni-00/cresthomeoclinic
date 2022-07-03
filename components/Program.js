import React, { useState } from 'react'

function Program({title , tiles}) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className='border rounded-md py-4 px-4 bg-slate-300'>
        <button onClick={()=> setDropdown(!dropdown)} className={`w-full flex flex-row justify-start items-center ${dropdown && 'mb-4'}`}>{title}</button>
        {dropdown &&  tiles.map((tile)=>(
            <p>{tile}</p>
        ))}
    </div>
  )
}

export default Program