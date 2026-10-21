
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addcollection } from '../REDUX/feature/collectionslice'

const ResultCard = ({ items }) => {
  const dispatch = useDispatch()

  const collection = useSelector(
    state => state.collection.items
  )

  const saveMedia = () => {
    const exists = collection.some(
      item => item.id === items.id
    )

    if (exists) {
      toast.info('Already in your collection!')
      return
    }

    dispatch(addcollection(items))
    toast.success('Added to collection!')
  }

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white p-3 shadow-md">

      <div className="h-60 w-full overflow-hidden rounded-lg bg-gray-200">
        {items.type === 'photo' && (
          <img
            src={items.src}
            alt={items.title}
            className="h-full w-full object-cover"
          />
        )}

        {items.type === 'video' && (
          <video
            src={items.src}
            controls
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        )}

        {items.type === 'GIF' && (
          <img
            src={items.src}
            alt={items.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <h2 className="mt-3 truncate font-semibold text-gray-900">
        {items.title || 'Untitled media'}
      </h2>

      <button
        onClick={saveMedia}
        className="mt-3 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Save to Collection
      </button>

    </div>
  )
}

export default ResultCard
