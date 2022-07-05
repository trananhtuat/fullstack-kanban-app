import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

export const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    setFavouriteList: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setFavouriteList } = favouriteSlice.actions

export default favouriteSlice.reducer