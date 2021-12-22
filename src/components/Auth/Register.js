import React, { useContext, useState } from "react"
import UserContext from "../../context/User/UserContext"

const Register = () => {
    const ctx = useContext(UserContext)
    const { registerUser, msg } = ctx

    // 1. ESTADO LOCAL
    const [newUser, getNewUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        e.preventDefault();

        getNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newUser)
        registerUser(newUser);
    }

    return (
        <div class="min-h-full flex bg-neutral-900">
            <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img class="h-12 w-auto  mb-11" src="https://i.ibb.co/r3phT9r/logob-w-12.png" alt="mikve full text logo" />
                        <h2 class="mt-6 text-xl font-mono font-extrabold text-yellow-50 opacity-90">
                            ¡Crea tu cuenta y únete a nuestra comunidad!
                        </h2>
                    </div>
                    <div class="mt-8">
                        <div class="mt-6">
                            <form onSubmit={(event) => {
                                handleSubmit(event);
                            }}
                                class="space-y-6">

                                <div>
                                    <label for="nombre" class="block text-xs font-mono font-medium text-yellow-50 opacity-90">
                                        Tu(s) nombre(s) ⬇️
                                    </label>
                                    <div class="mt-1">
                                        <input
                                        onChange={(event) => {
                                                handleChange(event)
                                            }}
        
                                         name="nombre" type="nombre" autocomplete="nombre" required class="appearance-none bg-neutral-300 font-mono block w-full px-3 py-2 border border-violet-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neutral-300 focus:border-emerald-700 text-xs" />
                                    </div>
                                </div>

                                <div>
                                    <label for="apellido" class="block text-xs  font-mono font-medium text-yellow-50 opacity-90">
                                        Tus Apellidos ⬇️
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            onChange={(event) => {
                                                handleChange(event)
                                            }}
                                            id="apellido" name="apellido" type="text" autocomplete="apellido" required class="appearance-none bg-neutral-300 font-mono block w-full px-3 py-2 border border-violet-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neutral-300 focus:border-emerald-700 text-xs" />
                                    </div>
                                </div>

                                <div>
                                    <label for="email" class="block text-xs font-mono font-mono text-yellow-50 opacity-90">
                                        Tu correo electrónico ⬇️
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            onChange={(event) => {
                                                handleChange(event)
                                            }}
                                            id="email" name="email" type="text" autocomplete="email" required class="appearance-none bg-neutral-300 font-mono block w-full px-3 py-2 border border-violet-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neutral-300 focus:border-emerald-700 text-xs" />
                                    </div>
                                </div>

                                <div class="space-y-1">
                                    <label for="password" class="block text-xs font-mono font-mono text-yellow-50 opacity-90">
                                        Tu contraseña ⬇️
                                    </label>
                                    <div class="mt-1">
                                        <input
                                            onChange={(event) => {
                                                handleChange(event);
                                            }}
                                            id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none bg-neutral-300 font-mono block w-full px-3 py-2 border border-violet-400 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-neutral-300 focus:border-emerald-700 text-xs" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-xs font-mono text-red-300">
                                        {msg && <p>{msg}</p>}
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" class="w-full mt-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-mono font-medium text-white bg-emerald-500 hover:bg-emerald-700 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-neutral-300">
                                        ¡Regístrame!
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block relative w-0 flex-1">
                <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1423&q=80" alt="gamer Girl on playing with atari led background" />
            </div>
        </div>
    )
}

export default Register
