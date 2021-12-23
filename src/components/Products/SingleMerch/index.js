import React, { useEffect, useContext } from "react"
import MerchContext from "../../../context/Merch/MerchContext"
import { Link, useParams } from "react-router-dom"

const SingleMerch = () => {
    const ctx = useContext(MerchContext)
    const { oneProduct, getProduct, deleteProduct} = ctx

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getProduct(id)
      }, [])



    return (
        <>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">

              <div className="mt-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{oneProduct.productName}</h1>
              </div>
    
              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
    
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl"> {oneProduct.price} </p>
                </div>
    
                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">{oneProduct.description}</p>
                </div>
    
              </section>
            </div>
    
            {/* oneProduct image */}
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img src={oneProduct.image} alt="" className="w-full h-full object-center object-cover" />
              </div>
            </div>
    
            {/* Product form */}
            <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>
    
                <form>
                  <div className="sm:flex sm:justify-between">
                   
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Add to bag
                    </button>
                  </div>
                  </div>

                </form>
              </section>
            </div>
          </div>
        </div>
        </>
      )

}

export default SingleMerch
