import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

export function Layout() {
    

    return (
        <>
            <Header />
           <Outlet />  
            {/* upar and niche sab same rhega but outlet vala could be changed */}
            <Footer />
        </>
    )
}
