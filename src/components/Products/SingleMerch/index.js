import React, { useEffect, useContext } from "react"
import MerchContext from "../../../context/Merch/MerchContext"
import { Link, useParams } from "react-router-dom"

const SingleMerch = () => {
    const ctx = useContext(MerchContext)
    const { singleProduct, getProduct, deleteProduct} = ctx

    const params = useParams()
    const id = params.id

    useEffect(() => {
        getProduct(id)
      }, [])



    return (
        <>
        <div className="bg-neutral-900">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">

              <div className="mt-4">
                <h1 className="text-3xl font-mono font-extrabold tracking-tight text-violet-400 sm:text-4xl">{singleProduct.productName}</h1>
              </div>
    
              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
    
                <div className="flex items-center">
                  <p className="text-lg text-emerald-500 font-mono sm:text-xl mb-10"> ${singleProduct.price}.00 MXN </p>
                </div>
    
                <div className="mt-4 space-y-6">
                  <p className="text-base  text-yellow-50 opacity-90 font-mono">Descripción: {singleProduct.description}</p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base  text-yellow-50 opacity-90 font-mono">Detalles: {singleProduct.details}</p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base  text-yellow-50 opacity-90 font-mono">Color: {singleProduct.color}</p>
                </div>
                <div className="mt-4 space-y-6">
                  <p className="text-base  text-yellow-50 opacity-90 font-mono">Talla: {singleProduct.size}</p>
                </div>
    
              </section>
            </div>
    
            {/* oneProduct image */}
            <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img src={singleProduct.image} alt="" className="w-full h-full object-center object-cover" />


				<div className="mt-4 flex-end  md:mt-4">
                <Link to={`/merch/${id}/edit`}>
						<button
						  type="button"
						  className="flex-end ml-3 mb-3 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium font-mono text-white bg-violet-400 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
						  Editar 
						</button>
					  </Link>
                      </div>
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
                      className="w-full bg-emerald-500 font-mono border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Comprar
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
