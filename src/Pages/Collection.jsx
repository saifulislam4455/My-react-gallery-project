
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Collectioncard from '../components/Collectioncard'
import { clearcollection } from '../REDUX/feature/collectionslice'

const Collection = () => {
  const dispatch = useDispatch()

  const collection = useSelector(
    state => state.collection.items
  )

  const clearCollection = () => {
    if (collection.length === 0) {
      toast.info('Collection is already empty!')
      return
    }

    dispatch(clearcollection())
    toast.success('Collection cleared successfully!')
  }

  return (
    <div className="min-h-screen w-full bg-gray-950 p-5 text-white">

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">
            My Collection
          </h1>

          <p className="mt-1 text-gray-400">
            {collection.length} items saved
          </p>
        </div>

        <button
          onClick={clearCollection}
          disabled={collection.length === 0}
          className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clear Collection
        </button>
      </div>

      {collection.length === 0 ? (
        <div className="flex min-h-60 flex-col items-center justify-center text-center">
          <h2 className="text-xl font-semibold">
            Your collection is empty
          </h2>

          <p className="mt-2 text-gray-400">
            Go to Home and save some photos, videos or GIFs.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {collection.map((item, idx) => (
            <Collectioncard
              key={item.id ?? idx}
              item={item}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default Collection
