import React from 'react'
import Navbar from '../components/Navbar';
import Program from '../components/Program';

function Customized () {
  const programList = [
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]},
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]},
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]},
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]},
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]},
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]},
    {title : "This is a title", tile: ["this is a tile", "this is a tile", "this is a tile"]}
  ]
  return (
    <div className='container mx-auto'>
    <Navbar currentLink={"Customized"}/>
    <div className='grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4'>
      {programList.map((program ,i) =>(
        <Program key={i} title={program.title} tiles={program.tile}/>
      ))}
    </div>
  </div>
  
  )
}

export default Customized; 