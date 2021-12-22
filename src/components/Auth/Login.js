import React, { useState, useContext } from "react";
import UserContext from "./../../context/User/UserContext";

const Register = () => {
  const ctx = useContext(UserContext);
  const { registerUser, msg } = ctx;
  console.log(ctx);
  //ESTADO LOCAL cuando trabajamos con el formulario lo guardamos local
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(newUser);
  };
  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-900 ">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto mb-12" src="https://i.ibb.co/VtgMvpq/mikvelogo-png-10.png" alt="MIKVE abstraction logo" />
      <h2 class="mt-6 mb-10 text-center text-2xl font-mono font-extrabold text-yellow-50 opacity-90">
        Ingresa a tu cuenta
      </h2>
     
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST" >
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only ">Correo electrónico</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none bg-neutral-300 font-mono block w-full px-3 py-2 border border-emerald-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-neutral-300 focus:border-violet-400 text-xs mb-6" placeholder="Correo electrónico" />
        </div>
        <div>
          <label for="password" class="sr-only ">contraseña</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none bg-neutral-300 font-mono block w-full px-3 py-2 border border-emerald-700  rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-neutral-300 focus:border-violet-400 text-xs mb-4" placeholder="Password" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-yellow-50 opacity-90 focus:ring-emerald-500 border-gray-300 rounded" />
          <label for="remember-me" class="ml-2 block text-xs font-mono text-yellow-50 opacity-90">
            Recordarme
          </label>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent font-mono text-xs font-medium rounded-md text-white bg-violet-400 hover:bg-violet-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-neutral-300">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <!-- Heroicon name: solid/lock-closed --> */}
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Ingresar
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Register;