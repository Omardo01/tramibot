import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const UserBox = ({ usuario, setUsuario }) => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const cerrarSesion = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUsuario(false);
      navigate('/');
    }, 3000);
      
  }

  return (
    <div
        className="flex flex-col items-center bg-stone-300 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
      >
        <div className="h-10 w-10 rounded-full border overflow-hidden">
          <img
            src="https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>

        {isLoading ? <div className="text-sm font-semibold mt-2"> Cerrando sesion ...</div> : 
          <>
          <div className="text-sm font-semibold mt-2">{usuario.matricula}</div>
          <div className="text-xs text-gray-500">{usuario.matricula}</div>
          <button type="submit" onClick={cerrarSesion} class=" mt-5 w-10/12 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cerrar sesion</button>
          </>
        }

        {/* <div className="text-sm font-semibold mt-2">{usuario.matricula}</div>
        <div className="text-xs text-gray-500">{usuario.matricula}</div>
        <button type="submit" onClick={cerrarSesion} class=" mt-5 w-10/12 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cerrar sesion</button> */}
        
      </div>


  )
}

export default UserBox