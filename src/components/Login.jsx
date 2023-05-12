import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Login = ({usuario, setUsuario}) => {

  const [matricula, setMatricula] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setMatricula(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario({
      matricula: matricula,
    });
    navigate("/");
  }

  return (
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
            Inicia sesion con tu cuenta
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Tu Matricula</label>
              <input onChange={handleChange} type="email" name="email" id="email" class=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Ej: 15800980" required="" />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" />

            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">Recuerdame</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Password olvidado?</a>
            </div>
            <button onClick={handleSubmit} type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesion</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              No tienes una cuenta?
              <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/register"> Registrarse</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login