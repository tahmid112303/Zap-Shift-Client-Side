import React from 'react'
import Banner from '../HomeComponents/Banner'
import HowItWorks from '../HomeComponents/HowItWorks'
import OurServices from '../HomeComponents/OurServices'
import Brands from '../HomeComponents/Brands'
import ParceLInfo from '../HomeComponents/ParceLInfo'

const Home = () => {
  return (
    <div>
        <Banner></Banner>

        <HowItWorks></HowItWorks>

        <OurServices></OurServices>

        <Brands></Brands>

        <ParceLInfo></ParceLInfo>
    </div>
  )
}

export default Home