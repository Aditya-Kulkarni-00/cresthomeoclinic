import React from 'react'
import Navbar from "../components/Navbar"
import Carousal from "../components/Carousal"
import BranchHomeDetails from '../components/BranchHomeDetails'
function Home() {
  return (
    <div className="container px-4 mx-auto">
      <Navbar currentLink="Home"/>
      <BranchHomeDetails/>
      <Carousal />
    </div>
  )
}

export default Home;