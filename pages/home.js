import React from 'react'
import Navbar from "../components/Navbar"
import Carousal from "../components/Carousal"

function Home() {
  return (
    <div className="container px-4 mx-auto">
      <Navbar currentLink="Home"/>
      <Carousal />
    </div>
  )
}

export default Home;