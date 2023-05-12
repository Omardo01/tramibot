import React from 'react'

const MensajeUser = ({ mensaje }) => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0 bg-orange-400"
        >
          <img
            src="https://png.pngtree.com/element_origin_min_pic/00/00/06/12575cb97a22f0f.jpg"
            alt="Avatar"
            className="h-full w-full"
          />
        </div>
        <div
          className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
        >
          <div>{mensaje}</div>
        </div>
      </div>
    </div>
  )
}

export default MensajeUser