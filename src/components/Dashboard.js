import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState(
        {
            id: '62548ec885e73f70c509c7cf',
            email: 'user@email.com',
            firstName: 'User',
            lastName: 'Dear'
        }
    )

    useEffect(() => {
        const getInfo = async () => {
            const url = `http://localhost:8080/customers/${userInfo.id}`

            try {
                const res = await axios(url)

                setUserInfo(res.data)

            } catch (err) {
                console.log(`Error ${err}`)
            }

        }

        getInfo()
    }, [])

    const logout = () => {
        alert('You logged out')
        navigate('/')
    }

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Dashboard</h2>
                                    <p className="text-white-50 mb-5">Your information</p>

                                    <form >
                                        <div className="form-outline mb-4">
                                            <label className="form-label text-white-50">Email</label>
                                            <p>{userInfo.email}</p>


                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label text-white-50" >First Name</label>
                                            <p>{userInfo.firstName}</p>


                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label text-white-50">Last Name</label>
                                            <p>{userInfo.lastName}</p>

                                        </div>

                                        <br />
                                        {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                                        <button className="btn btn-outline-light btn-lg px-5" type="button"
                                            onClick={logout}
                                        >
                                            Log out</button>


                                    </form>

                                </div>

                                {/* <div>
                                    <p className="mb-0">Don't have an account? <Link to="/SignUp" className="text-white-50 fw-bold">Sign Up</Link></p>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Dashboard