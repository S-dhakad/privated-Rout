import { configureStore } from '@reduxjs/toolkit'
import CreateSlice from './CreateSlice'
export const store = configureStore({
  reducer: {
Protected:CreateSlice,
  },
})