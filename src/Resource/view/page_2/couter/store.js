
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './createSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
