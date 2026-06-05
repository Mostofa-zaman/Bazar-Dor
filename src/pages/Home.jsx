import React from 'react'
import BannerSliders from '../components/home/bannerSlider/Index'
import Category from '../components/home/category/Index'
import HomeProducts from '../components/home/homeProducts'
import HighPriceSlider from '../components/home/highPriceSlider/Index'
import LowPriceSlider from '../components/home/LowPriceSlider/Index'


const Home = () => {
  return (
    <div>

        <BannerSliders/>
        <Category/> 
        <HomeProducts/>
        <HighPriceSlider/>
        <LowPriceSlider/>
        
    </div>
  )
}

export default Home