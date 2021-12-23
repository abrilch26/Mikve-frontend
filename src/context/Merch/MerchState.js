import React, { useReducer }  from "react"

import MerchContext from "./MerchContext"
import MerchReducer from "./MerchReducer"

import axiosClient from "../../config/axios"



const MerchState = (props) => {
    const initialState = {
        products: [],
        singleProduct: {
            productName: "",
            price: "",
            image: "",
            description: "",
            details: "",
            size: "", 
            color: "",
            owner: ""
        }
    }

    const [globalState, dispatch] = useReducer(MerchReducer, initialState)

    const getProducts = async () => {
        const res = await axiosClient.get("merch/readall")
        const productsList = res.data.data

        dispatch ({
            type: "GET_PRODUCTS",
            payload: productsList
        })
    }


    const getProduct = async (merchId) => {
        const res = await axiosClient.get(`merch/readone/${merchId}`)
        const oneProduct = res.data.data

        dispatch({
            type: "GET_PRODUCT",
            payload: oneProduct
        })
    }


    const createProduct = async (form) => {
        const res = await axiosClient.post("merch/create", form)
    }


    const editProduct = async (form, idMerch) => {
        const res = await axiosClient.put (`merch/edit/${idMerch}`, form)
        const updatedProduct = res.data.data

        dispatch ({
            type: "UPDATE_PRODUCT",
            payload: updatedProduct
        })
    }

    const deleteProduct = async (idMerch) => {
        const res = await axiosClient.delete(`merch/delete/${idMerch}`)
    }

    return(
        <MerchContext.Provider
        value ={{
            products: globalState.products,
            singleProduct: globalState.singleProduct,
            createProduct,
            getProducts,
            getProduct,
            editProduct,
            deleteProduct
        }}
        >
        {props.children}
        </MerchContext.Provider>
    )
}

export default MerchState