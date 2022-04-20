import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        // userInfo: {
        //     email: '',
        //     password: ''
        // },
        currentUser: null,
        pending: false,
        error: false
    },

    reducers: {
        loginStart: (state) => {
            state.pending = true
        },
        loginSuccess: (state, action) => {
            state.pending = false
            state.currentUser = action.payload
        },
        loginError: (state) => {
            state.error = true
            state.pending = false
        },
        // for logout
        logoutSuccess: (state) => {
            state.isFetching = false
            state.error = false
            state.currentUser = null
        }
    }
})

export const { loginStart, loginSuccess, loginError, logoutSuccess } = userSlice.actions
export default userSlice.reducer

