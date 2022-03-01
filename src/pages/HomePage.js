import React from 'react'

import Hero from "../components/HomePage/Hero"
import TypeList from '../components/HomePage/TypeList'
import BestSeller from "../components/HomePage/Bestseller"
import Footer from "../components/HomePage/Footer"

const HomePage = () => {
    return (
        <div>
            <Hero />
            <TypeList />
            <BestSeller />
            <Footer />
        </div>
    )
}

export default HomePage