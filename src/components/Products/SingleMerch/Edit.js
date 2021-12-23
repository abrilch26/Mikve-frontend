import React, { useEffect, useContext, useState } from "react"
import MerchContext from "../../../context/Merch/MerchContext"
import { Link, useParams, useNavigate } from "react-router-dom"

const Edit = () => {

    const navigate = useNavigate()
    const params = useParams
    const idProduct = params.id

    const ctx = useContext(MerchContext)

    const { singleProduct, getProduct, updateProduct } = ctx

    //ESTADO LOCAL
    const [productData, setProductData] = useState({
        productName: "",
        price: "",
        image: "",
        description: "",
        details: "",
        size: "",
        color: "",
        owner: ""
    })

    useEffect(() => {
        getProduct(idProduct)
    }, [])


    useEffect(() => {
        const {
            productName,
            price,
            image,
            description,
            details,
            size,
            color,
            owner
        } = ctx.singleProduct

        setProductData ({
            productName: productName,
            price: price,
            image: image,
            description: description,
            details: details,
            size: size,
            color: color,
            owner: owner  
        })
    }, [singleProduct])

    const handleChange = (e) => {
        e.preventDefault()

        setProductData ({
            ...productData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    updateProduct(productData,idProduct)
    navigate("/merch")
    }


    return (
        <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div>
                <div>
                  <h3 className="text-lg leading-6 font-medium font-mono text-gray-900">
                    Editar el producto
                  </h3>
               
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="producto"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Nombre del producto
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="productName"
                        value={singleProduct.productName}
                        required
                        className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 font-mono sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="first-name"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Precio
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="price"
                        value={singleProduct.price}
                        required
                        className="max-w-lg block w-full shadow-sm font-mono focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
  
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="last-name"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                      URL de la imagen
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="image"
                        value={singleProduct.image}
                        required
                        className="max-w-lg block w-full shadow-sm font-mono focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
  
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="email"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Descripción de producto
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        name="description"
                        type="text"
                        value={singleProduct.description}
                        required
                        className="block max-w-lg w-full shadow-sm font-mono focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="email"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Detalles del producto
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        name="details"
                        type="text"
                        value={singleProduct.details}
                        required
                        className="block max-w-lg w-full shadow-sm font-mono focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
  
  
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="street-address"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                    Talla del producto
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="size"
                        value={singleProduct.size}
                        required
                        className="block max-w-lg w-full font-mono shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
  
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      for="color"
                      className="block text-sm font-medium font-mono text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Color del producto
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <input
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        type="text"
                        name="color"
                        value={singleProduct.color}
                        required
                        className="max-w-lg block w-full shadow-sm font-mono focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="pt-5 mb-5">
              <div className="flex justify-end mb-5">
                <Link to="/courses">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium font-mono text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancelar
                  </button>
                </Link>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium font-mono rounded-md  bg-violet-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Guardar 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Edit;