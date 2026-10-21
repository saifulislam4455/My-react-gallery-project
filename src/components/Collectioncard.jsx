
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { removecollection } from '../REDUX/feature/collectionslice'

const Collectioncard = ({ item }) => {
  const dispatch = useDispatch()

  const removeMedia = () => {
    dispatch(removecollection(item.id))
    toast.info('Removed from collection')
  }

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-md">

      <div className="h-60 w-full bg-gray-200">
        {item.type === 'photo' && (
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        )}

        {item.type === 'video' && (
          <video
            src={item.src}
            controls
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        )}

        {item.type === 'GIF' && (
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="p-3">
        <h2 className="truncate font-semibold text-gray-800">
          {item.title || 'Untitled media'}
        </h2>

        <button
          onClick={removeMedia}
          className="mt-3 w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Remove
        </button>
      </div>

    </div>
  )
}

export default Collectioncard
