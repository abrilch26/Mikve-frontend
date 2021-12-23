import React from 'react'
import { Outlet } from "react-router-dom"

import  Header from "./Header"
import Footer from "./Footer"


export default function Layout() {
    return (
        <div>
            <div className="flex flex-col h-screen">

                <Header />

                
                    <Outlet />
                

               <Footer />

            </div>
        </div>
    )
}
