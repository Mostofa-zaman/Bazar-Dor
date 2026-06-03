import React from 'react'
import BannerSliders from '../components/home/bannerSlider/Index'
import Category from '../components/home/category/Index'
import HomeProducts from '../components/home/homeProducts'


const Home = () => {
  return (
    <div>

        <BannerSliders/>
        <Category/> 
        <HomeProducts/>
        
    </div>
  )
}

export default Home