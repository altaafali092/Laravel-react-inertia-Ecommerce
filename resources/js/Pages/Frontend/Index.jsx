import React from 'react'
import Navbar from './Partials/Navbar'

import Slider from './Partials/Slider'
import NewArrivial from './Index/NewArrivial'
import FeaturedProduct from './Index/FeaturedProduct'
import Footer from './Partials/Footer'

const Index = () => {
    return (
        <>

            <Navbar />
            <Slider/>
            <NewArrivial/>
            <FeaturedProduct/>
            <Footer/>

        </>
    )
}

export default Index
