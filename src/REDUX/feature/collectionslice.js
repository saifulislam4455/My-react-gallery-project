
import { createSlice } from '@reduxjs/toolkit'

const getSavedCollection = () => {
  try {
    const saved = localStorage.getItem('collection')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const collectionSlice = createSlice({
  name: 'collection',

  initialState: {
    items: getSavedCollection()
  },

  reducers: {
    addcollection: (state, action) => {
      const exists = state.items.some(
        item => item.id === action.payload.id
      )

      if (!exists) {
        state.items.push(action.payload)
      }
    },

    removecollection: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    },

    clearcollection: state => {
      state.items = []
    }
  }
})

export const {
  addcollection,
  removecollection,
  clearcollection
} = collectionSlice.actions

export default collectionSlice.reducer
