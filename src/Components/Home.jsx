import React, { Suspense } from 'react'
import Banner from '../HomeComponents/Banner'
import HowItWorks from '../HomeComponents/HowItWorks'
import OurServices from '../HomeComponents/OurServices'
import Brands from '../HomeComponents/Brands'
import ParceLInfo from '../HomeComponents/ParceLInfo'
import CustomerSatisfy from '../HomeComponents/CustomerSatisfy'
import CustomerSayings from '../HomeComponents/CustomerSayings'
import Reviews from '../HomeComponents/Reviews'


const Home = () => {
  const reviewPromise = fetch('/reviews.json').then(res=>res.json())

  return (
    <div>
        <Banner></Banner>

        <HowItWorks></HowItWorks>

        <OurServices></OurServices>

        <Brands></Brands>

        <ParceLInfo></ParceLInfo>

        <CustomerSatisfy></CustomerSatisfy>

        <CustomerSayings></CustomerSayings>

        <Suspense fallback={<span>Loading...</span>}>
            <Reviews reviewPromise={reviewPromise}></Reviews>
        </Suspense>
    </div>
  )
}

export default Home