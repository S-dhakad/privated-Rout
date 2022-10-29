import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    LoginUser: (state) => {
   state.isAuthenticated=true;
    },
    Logout: (state) => {
        state.isAuthenticated=false;
    },
  
  },
})

export const { LoginUser,Logout } = counterSlice.actions

export default counterSlice.reducer