
import { configureStore } from '@reduxjs/toolkit'
import searchreducer from './feature/searchslice.js'
import collectionreducer from './feature/collectionslice.js'

export const store = configureStore({
  reducer: {
    search: searchreducer,
    collection: collectionreducer
  }
})
