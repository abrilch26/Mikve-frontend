import React, {useEffect, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'

export default function Header() {

	const ctx = useContext(UserContext)

	const {
		currentUser,
		verifyingToken,
        logoutUser
	} = ctx


	useEffect(() => {
		verifyingToken()
	}, [])

  const [isOpen, setisOpen] = useState(false)

    return (
<header className="bg-indigo-600">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
    <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
      <div className="flex items-center">

      <Link to="/">
          <span className="sr-only">Workflow</span>
          <img className="h-6 w-auto mb-1" src="https://i.ibb.co/r3phT9r/logob-w-12.png" alt="mikve full logo" />
        </Link>

        <div className="hidden ml-10 space-x-8 lg:block">
        <Link to="/merch" className="font-mono text-sm text-white hover:text-indigo-50" key="Merch">
            Merch
          </Link>

          {/* <Link to="/blogs" className="font-mono  text-sm text-white hover:text-indigo-50" key="Blog">
            Blog
          </Link> */}

          <Link to="/about-us" className="font-mono  text-sm text-white hover:text-indigo-50" key="Sobre Nosotras">
            Sobre nosotras
          </Link>

          <a onClick={() => logoutUser()} href="/" className="font-mono  text-sm text-white hover:text-indigo-50">Cerrar sesión</a>
        </div>
      </div>
      
      <div className="ml-10 space-x-4">
        <Link to="login"  className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md  font-mono  text-sm text-white hover:bg-opacity-75">Iniciar sesión</Link>
        <Link to="signup" className="inline-block bg-white py-2 px-4 border border-transparent rounded-md font-mono text-sm text-indigo-600 hover:bg-indigo-50">Registrarme</Link>
      </div>
    </div>

    <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
    <Link to="/merch" className="font-mono text-sm text-white hover:text-indigo-50" key="Merch">
            Merch
          </Link>

          {/* <Link to="/blog" className="font-mono  text-sm text-white hover:text-indigo-50" key="Blog">
            Blog
          </Link> */}

          <Link to="/about-us" className="font-mono  text-sm text-white hover:text-indigo-50" key="Sobre Nosotras">
            Sobre nosotras
          </Link>
          <a onClick={() => logoutUser()} href="/" className="font-mono  text-sm text-white hover:text-indigo-50">Cerrar sesión</a>


    </div>
  </nav>
</header>

    )
}