import React from 'react'
import Navbar from "../components/Navbar"
import Carousal from "../components/Carousal"
import BranchDetails from '../components/BranchDetails'
function Home() {
  return (
    <div className="container px-4 mx-auto">
      <Navbar currentLink="Home"/>
      <BranchDetails/>
      <Carousal />
    </div>
  )
}

export default Home;