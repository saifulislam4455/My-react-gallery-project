
import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

// Unsplash Photos
export async function fetchphotos(query, page = 1, per_page = 20) {
  try {
    const res = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: {
          query: query,
          page: page,
          per_page: per_page
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`
        }
      }
    )

    console.log(res.data.results)
    return res.data.results

  } catch (error) {
    console.log('Photos API Error:', error.response?.data || error.message)
    return []
  }
}

// Pixabay Videos
export async function fetchvideo(query, per_page = 15) {
  try {
    const res = await axios.get(
      'https://pixabay.com/api/videos/',
      {
        params: {
          key: PIXABAY_KEY,
          q: query,
          per_page: per_page
        }
      }
    )

    console.log(res.data.hits)
    return res.data.hits

  } catch (error) {
    console.log('Video API Error:', error.response?.data || error.message)
    return []
  }
}

// GIPHY GIFs
export async function fetchGIF(query, limit = 20) {
  try {
    const res = await axios.get(
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          api_key: GIPHY_KEY,
          q: query,
          limit: limit,
          rating: 'g'
        }
      }
    )

    console.log(res.data.data)
    return res.data.data

  } catch (error) {
    console.log('GIF API Error:', error.response?.data || error.message)
    return []
  }
}
