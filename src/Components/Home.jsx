import React from 'react'
import Banner from '../HomeComponents/Banner'
import HowItWorks from '../HomeComponents/HowItWorks'
import OurServices from '../HomeComponents/OurServices'

const Home = () => {
  return (
    <div>
        <Banner></Banner>

        <HowItWorks></HowItWorks>

        <OurServices></OurServices>
    </div>
  )
}

export default Home