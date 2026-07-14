import React from 'react'
import BannerSliders from '../components/home/bannerSlider/Index'
import Category from '../components/home/category/Index'
import HighPriceSlider from '../components/home/highPriceSlider/Index'
import LowPriceSlider from '../components/home/lowPriceSlider/Index'
import GetTheApp from '../components/home/getTheApp/Index'
import GovtMess from '../components/home/govtMessage/Index'
import PastWeekMarket from '../components/home/pastWeekMarket/Index'
import HomeProducts from '../components/home/homeProducts/Index'


const Home = () => {
  return (
    <div>

        <BannerSliders/>
        <Category/> 
        <HomeProducts/>
        <HighPriceSlider/>
        <LowPriceSlider/>
        <PastWeekMarket/>
        <GetTheApp/>
        <GovtMess/>
    </div>
  )
}

export default Home