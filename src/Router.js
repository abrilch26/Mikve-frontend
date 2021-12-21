import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"

import Blogs from "./components/Blogs"
import CreateBlog from "./components/Blogs/Create"
import SingleBlog from "./components/Blogs/SingleBlog"
import EditBlog from "./components/Blogs/SingleBlog/Edit"
import DeleteBlog from "./components/Blogs/SingleBlog/Delete"

import Merch from "./components/Merch(es)"
import CreateMerch from "./components/Merch(es)/Create"
import SingleMerch from "./components/Merch(es)/SingleMerch"
import EditMerch from "./components/Merch(es)/SingleMerch/Edit"
import DeleteMerch from "./components/Merch(es)/SingleMerch/Delete"


const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />

                        <Route path="registro" element={<Register />} />

                        <Route path="iniciar-sesion" element={<Login />} />

                        {/* <Route path="profile" element={<Private component={Profile} />} /> */}

                        <Route path="blogs" element={<Blogs />} />
                        <Route path="blogs/create" element={<CreateBlog />} />
                        <Route path="blogs/:id" element={<SingleBlog />} />
                        <Route path="blogs/:id/edit" element={<EditBlog />} />
                        <Route path="blogs/:id/delete" element={<DeleteBlog />} />

                        <Route path="merch" element={<Merch />} />
                        <Route path="merch/create" element={<CreateMerch />} />
                        <Route path="merch/:id" element={<SingleMerch />} />
                        <Route path="merch/:id/edit" element={<EditMerch />} />
                        <Route path="merch/:id/delete" element={<DeleteMerch />} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}



export default Router