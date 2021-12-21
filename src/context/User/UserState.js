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
		owner: ""
        }
    }
}