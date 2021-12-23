import React, { useContext } from "react";
import UserContext from '../context/User/UserContext'
import { Link } from 'react-router-dom'


const Home = () => {
    const ctx = useContext(UserContext)

  const {
  	verifyToken
  } = ctx

    return (
        
    <>
        <div className="relative  bg-neutral-900 pt-20">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-neutral-800 rounded-r-3xl lg:right-72"></div>
              <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* <!-- Testimonial card--> */}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/y59vsdn/acr1.jpg" alt="Founder profile pic"/>
                <div className="absolute inset-0 bg-emerald-200 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600 via-emerald-800 opacity-90"></div>
                <div className="relative px-8">
                  <div>
                    <img className="h-8 mb-10 mt-12" src="https://i.ibb.co/t88XmR8/logosencillo-b-w-04.png" alt="MIKVE LOGO SENCILLO EN BLANCO"/>
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-violet-900" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-sm relative font-mono text-yellow-50 opacity-90 ">
                      Este es el porqué del proyecto. Si no comenzamos a desarrollar soluciones o propuestas para el futuro y no para el presente, no podremos celebrar nunca una victoria.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold font-mono text-emerald-100">Abril Chávez, fundadora.</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* <!-- Content area --> */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-2xl text-violet-400 font-extrabold font-mono tracking-tight sm:text-4xl mb-10">
              La fusión armónica de los opuestos 
              </h2>
              <div className="mt-6 font-mono text-yellow-50 opacity-90 space-y-6">
                <p className="text-md">
                  MIKVE es una desarrolladora de videojuegos con perspectiva de género que representa, visibiliza e incluye a las mujeres en el universo del "gaming".

                  La resiliencia de las jugadoras (y los jugadores que sufren de acoso todos los días es algo que necesita resaltarse, no se busca minimizar a las víctimas, sino todo lo contrario, enaltecerlos por mantenerse, por haber los comentarios negativos del día a día, aún cuando la lucha debería de permanecer enla pantalla.

                </p>
                <p className="text-md leading-7">
                Los recientes intentos del sector por atraer a más videojugadoras, lejos de mejorar el panorama, lo han empeorado. Hay algunos casos en que empresas de videojuegos desarrollan productos “exclusivos para mujeres” en los cuales únicamente se refuerzan los roles y estereotipos de género
                  
                </p>
               
              </div>
            </div>
  
            {/* <!-- Stats section --> */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-mono text-yellow-50 opacity-90">Fundado</dt>
                  <dd className="text-3xl font-extrabold tracking-tight font-mono text-emerald-500 ">2021</dd>
                </div>
  
                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-mono text-yellow-50 opacity-90">Empleados</dt>
                  <dd className="text-3xl font-extrabold font-mono text-emerald-500 tracking-tight">15</dd>
                </div>
  
                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-mono text-yellow-50 opacity-90">Usuarios Beta</dt>
                  <dd className="text-3xl font-extrabold font-mono text-emerald-500 tracking-tight">521</dd>
                </div>
  
                <div className="border-t-2 border-gray-100 pt-6">
                  <dt className="text-base font-mono text-yellow-50 opacity-90">Capital</dt>
                  <dd className="text-3xl font-extrabold font-mono text-emerald-500 tracking-tight">$25M</dd>
                </div>
              </dl>

            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Logo cloud section --> */}
      <div className="p-32 bg-neutral-900">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center ">
            <div>
              <h2 className="text-3xl font-extrabold font-mono text-violet-400 tracking-tight sm:text-4xl">
                Algunos de nuestros socios
              </h2>
              <p className="mt-6 max-w-3xl text-md font-mono leading-7 text-yellow-50 opacity-90">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.
              </p>
              <div className="mt-6">
               
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <div className="col-span-1 flex justify-center py-8 px-8 bg-neutral-800">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"/>
              </div>
  
              <div className="col-span-1 flex justify-center py-8 px-8 bg-neutral-800">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
              </div>
  
              <div className="col-span-1 flex justify-center py-8 px-8 bg-neutral-800">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
              </div>
  
              <div className="col-span-1 flex justify-center py-8 px-8 bg-neutral-800">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel"/>
              </div>
  
              <div className="col-span-1 flex justify-center py-8 px-8 bg-neutral-800">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
              </div>
  
              <div className="col-span-1 flex justify-center py-8 px-8 bg-neutral-800">
                <img className="max-h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*   
      <!-- CTA section --> */}
      <div className="relative pt-20 pb-20 bg-neutral-900">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-neutral-800 rounded-r-3xl mb-4"></div>
          <svg className="absolute top-8 left-1/2 -ml-3" width="404" height="392" fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="8228f071-bcee-4ec8-905a-2a059a2cc4fb" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-violet-400 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                <path className="text-violet-700 text-opacity-20" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                <path className="text-violet-600 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold font-mono text-yellow-50 opacity-90 tracking-tight sm:text-4xl">
                  Suscríbete a nuestro newsletter
                </h2>
                <p className="mt-6 mx-auto max-w-2xl text-md font-mono text-yellow-50 opacity-90">
                  ¡Recibe semanalmente artículos y reportes sobre la industria y tips para mejorar tu nivel de jugadoras profesionales!
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="min-w-0 flex-1">
                  <label for="cta-email" className="sr-only">Correo electrónico</label>
                  <input id="cta-email" type="email" className="block w-full border border-transparent rounded-md px-5 py-3 font-mono text-sm placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-violet-400" placeholder="Correo electrónico"/>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button type="submit" className="block w-full rounded-md border border-transparent px-5 py-3 bg-emerald-600 text-sm font-mono text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10">¡Estoy dentro!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>

    )
}

export default Home;
