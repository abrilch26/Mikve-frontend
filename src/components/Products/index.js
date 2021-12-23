import React, { useEffect, useContext } from "react";
import MerchContext from "../../context/Merch/MerchContext"
import { Link } from "react-router-dom";

const Products = () => {
  const ctx = useContext(MerchContext)
  const { products, getProducts } = ctx

  useEffect(() => {
    getProducts()
  }, [])
  return (

    <>
    <div className="bg-neutral-900">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold font-mono tracking-tight text-violet-400"> ❤️ Mikve goods ❤️</h2>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {products.map((products) => (
            <div key={products.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={products.image}
                  alt="Mikve goodies product photohraphy"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />

              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-mono text-emerald-500">
                  <Link to={`/merch/${products._id}`} key={products._id} >
                      <span aria-hidden="true" className="absolute inset-0" />
                      </Link>
                      {products.productName}
                  </h3>
                  <p className="mt-1 text-sm font-mono text-yellow-50 opacity-90">{products.color}</p>
                </div>
                <p className="text-sm font-medium font-mono text-yellow-50 opacity-90"> ${products.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </>
  )
}

export default Products