
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/apiCall'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // error message
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const navigate = useNavigate()

    // Redux
    const dispatch = useDispatch()

    const { error } = useSelector((state) => state.user)

    const handleLogin = () => {
        loginUser({ email, password }, dispatch)

    }

    // validate form
    const validate = () => {
        let isValidated = true

        // regex for check email format
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // for email
        if (email === "") {
            // display this error message if email is null
            setErrorEmail("* Email cannot be empty")
            isValidated = false
        } else if (!email.match(emailFormat)) {
            // display this error message if email is not valid
            setErrorEmail("* Email is invalid")
            isValidated = false
        }
        else {
            // don't display the error message
            setErrorEmail('')
        }

        // for password
        if (password === "") {
            // display the error message if password is null
            setErrorPassword("* password cannot be empty")
            isValidated = false
        }
        else if (password.length <= 4) {
            // display the error message if password length is less than 5
            setErrorPassword("* password is too short")
            isValidated = false
        }
        else {
            // don't display the error message
            setErrorPassword('')
        }

        // return back validate() is true or false
        return isValidated
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password</p>
                                    <form >
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            <input type="text" id="typeEmailX" className="form-control form-control-lg"
                                                onChange={(event) => {
                                                    setEmail(event.target.value)
                                                }} />
                                            <span>{errorEmail}</span>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            <input type="password" id="typePasswordX" className="form-control form-control-lg"
                                                onChange={(event) => {
                                                    setPassword(event.target.value)
                                                }} />
                                            <span>{errorPassword}</span>
                                        </div>

                                        {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}


                                        {error && <span>Something wrong</span>}

                                        <br /><br />

                                        <button className="btn btn-outline-light btn-lg px-5" type="button"
                                            onClick={() => {
                                                // when click the button, validate the input
                                                if (validate()) {
                                                    // submit after validation                                  
                                                    handleLogin()

                                                    navigate('/Dashboard')
                                                } else {
                                                    alert('error')
                                                }
                                            }}>

                                            Sign In</button>


                                    </form>

                                </div>

                                <div>
                                    <p className="mb-0">Don't have an account? <Link to="/SignUp" className="text-white-50 fw-bold">Sign Up</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}




export default SignIn