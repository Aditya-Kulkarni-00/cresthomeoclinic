import React from 'react'
import BranchDetails from '../components/BranchDetails';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div className='container px-4 mx-auto'>
        <Navbar currentLink={"Contact"}/>
        <BranchDetails/>
    </div>
  )
}

export default Contact;