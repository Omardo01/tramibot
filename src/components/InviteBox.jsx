import React from 'react'
import { Link } from 'react-router-dom'

const InviteBox = () => {
  return (

    <div
        className="flex flex-col items-center bg-red-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
      >
        

        <div className="text-sm mb-3 font-semibold mt-2">Actualmente estas como invitado:</div>
        <Link className="font-bold border rounded m-2 text-sm text-black bg-indigo-100 hover:text-indigo-300" to="/login">Inicia sesion</Link>
        <Link className="font-bold border rounded m-2 text-sm text-black bg-indigo-100 hover:text-indigo-300" to="/register">Registrate</Link>
                
      </div>
      
  )
}

export default InviteBox