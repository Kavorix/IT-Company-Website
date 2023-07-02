import React from 'react'
import Hero from './components/hero/Hero'
import Client from './components/client/Client'
import Services from './components/services/Services'
import Vision from './components/vision/Vision'
import Banner from './components/banner/Banner'
import Design from './components/design/Design'
import Customers from './components/customers/Customers'
import Blogs from './components/blogs/Blogs'
import Footer from '../../layout/footer/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <Client />
            <Services />
            <Vision />
            <Banner />
            <Design />
            <Customers />
            <Blogs />
        </>
    )
}

export default Home