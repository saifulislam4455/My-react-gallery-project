
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ResultCard from './ResultCard'
import { fetchphotos, fetchvideo, fetchGIF } from '../Api/MediaApi'
import { setloading, seteror, setresults } from '../REDUX/feature/searchslice'

const ResultGrid = () => {
  const dispatch = useDispatch()

  const { query, activeTab, results, loading, eror } =
    useSelector((store) => store.search)

  useEffect(() => {
    if (!query.trim()) return

    const getdata = async () => {
      try {
        dispatch(setloading())

        let data = []

        if (activeTab === 'photos') {
          const responce = await fetchphotos(query)
console.log(responce.data);

          data = responce.map((items) => ({
            id: items.id,
            type: 'photo',
            title: items.alt_description || 'Photo',
            thumbnail: items.urls.small,
            src: items.urls.full,
          }))
        } else if (activeTab === 'videos') {
          const responce = await fetchvideo(query)

          data = responce.map((items) => ({
            id: items.id,
            type: 'video',
            title: items.name || 'Video',
            thumbnail: items.videos.small.thumbnail,
            src: items.videos.small.url,
          }))
        } else if (activeTab === 'GIF') {
          const responce = await fetchGIF(query)

          data = responce.map((items) => ({
            id: items.id,
            type: 'GIF',
            title: items.content_description || 'GIF',
            thumbnail: items.media_formats?.tinygif?.url,
            src:
              items.media_formats?.gif?.url ||
              items.media_formats?.tinygif?.url,
          }))
        }

        dispatch(setresults(data))
      } catch (err) {
        console.error('Search API error:', err)
        dispatch(seteror(err.message || 'Something went wrong'))
      }
    }

    getdata()
  }, [query, activeTab, dispatch])

  if (eror) return <h1>Error: {String(eror)}</h1>

  if (loading) return <h1>Loading...</h1>
  

 
return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full h-[80%] overflow-y-auto px-5 py-4">
    {results.map((items) => (
      <ResultCard
        key={`${items.type}-${items.id}`}
        items={items}
      />
    ))}
  </div>
)

}

export default ResultGrid
