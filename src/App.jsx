
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './Pages/HOme'
import Collection from './Pages/Collection'

const App = () => {
  const collection = useSelector(
    state => state.collection.items
  )

  useEffect(() => {
    localStorage.setItem(
      'collection',
      JSON.stringify(collection)
    )
  }, [collection])

  return (
    <div className="w-full min-h-screen bg-gray-950 text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </div>
  )
}

export default App
