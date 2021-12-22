import React from 'react'
import { Outlet } from "react-router-dom"

import  Header from "./Header"
import Footer from "./Footer"


export default function Layout() {
    return (
        <div>
            <div class="flex flex-col h-screen justify-between">

                <Header />

                
                    <Outlet />
                

               <Footer />

            </div>
        </div>
    )
}
