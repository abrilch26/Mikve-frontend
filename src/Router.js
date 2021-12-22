import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"

import Profile from "./components/User/Profile"
import EditProfile from "./components/User/EditProfile"

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

import UserState from "./context/User/UserState"

import Auth from "./routes/Auth"
import Private from "./routes/Private"



const Router = () => {
    return (
        <>
            <UserState>
                <BrowserRouter>
                    <Routes>

                        <Route path="/" element={<Layout />} >
                            <Route index element={<Auth component={Home} />} />

                            <Route path="signup" element={<Auth component={Register} />} />
                            <Route path="login" element={<Auth component={Login} />} />

                            <Route path="profile" element={<Private component={Profile} />} />
                            <Route path="editprofile/:id" element={<EditProfile />} />

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
            </UserState>
        </>
    )
}



export default Router