import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axiosClient from "./../../config/axios";

const UserState = (props) => {

    const initialState = {
        currentUser: {
            nombre: "",
            apellido: "",
            telefono: "",
            pais: "",
            email: "",
            userImage: "",
            bio: "",
            password: "",
            purchasedProducts: []
        },
        authStatus: false,
        msg: "",
    }

    const [globalState, dispatch] = useReducer(UserReducer, initialState)



    const registerUser = async (form) => {
        const res = await axiosClient.post("users/signup", form)
        const token = res.data.data
        const msg = res.data.msg

        if (msg) {
            dispatch({
                type: "REGISTER_FAIL",
                payload: msg
            })
        } else {
            dispatch({
                type: "REGISTER_SUCCEED",
                payload: token
            })
        }
    }


    const loginUser = async (form) => {
        const res = await axiosClient.post("users/login", form)
        const token = res.data.data

        dispatch({
            type: "LOGIN_SUCCEED",
            payload: token
        })
    }

    const verifyingToken = async () => {
        const token = localStorage.getItem("token")
        //anexar token a la peticion de axios
        if (token) {
            axiosClient.defaults.headers.common["x-auth-token"] = token
        } else {
            delete axiosClient.defaults.headers.common["x-auth-token"]
        }

        try {
            const res = await axiosClient.get("users/verifytoken")
            const userData = res.data.data

            dispatch({
                type: "GET_DATA_USER",
                payload: userData
            })

        } catch (error) {
            console.log(error)
        }
    }


    const logoutUser = async () => {
        dispatch({
            type: "LOGOUT_USER",
        })
    }


    const editProfile = async (form, idUser) => {
        const res = await axiosClient.put(`users/editprofile/${idUser}`, form);
    };

    return (
        <UserContext.Provider
            value={{
                currentUser: globalState.currentUser,
                authStatus: globalState.authStatus,
                msg: globalState.msg,
                purchasedProducts: globalState.purchasedProducts,
                registerUser,
                loginUser,
                verifyingToken,
                logoutUser,
                editProfile
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}


export default UserState
