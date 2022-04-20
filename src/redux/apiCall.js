import axios from 'axios'
import { loginStart, loginSuccess, loginError, logoutSuccess } from './userSlice'

export const loginUser = async (user, dispatch) => {
    dispatch(loginStart())

    try {
        const res = await axios.post('http://localhost:8080/auth', user)

        dispatch(loginSuccess(res.data))

    } catch (err) {
        dispatch(loginError())
    }
}

// for logout
export const logoutUser = async (dispatch) => {
    dispatch(logoutSuccess())
}

