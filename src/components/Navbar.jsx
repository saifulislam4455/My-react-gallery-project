import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    
        
<div>
  <div className="flex justify-between items-center p-6 px-10 bg-gray-700">
    <h2 className="font-medium text-2xl">Media Search</h2>

    <div className="flex gap-5 text-xl items-center">
      <Link
        className="text-base font-medium active:scale-95 bg-blue-800 text-white rounded px-4 py-2"
        to="/"
      >
        Search
      </Link>

      <Link
        className="text-base font-medium active:scale-95 bg-blue-800 text-white rounded px-4 py-2"
        to="/collection"
      >
        Collection
      </Link>
    </div>
  </div>

    </div>
  )
}

export default Navbar