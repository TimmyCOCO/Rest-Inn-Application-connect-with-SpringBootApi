import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/apiCall'


const Dashboard = () => {

    // Redux
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.currentUser)


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
                                            <p>{user.email}</p>
                                        </div>

                                        <br />
                                        {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                                        <Link to='/SignIn'><button className="btn btn-outline-light btn-lg px-5" type="button"
                                            onClick={() => {
                                                logoutUser(dispatch)
                                                alert('you logged out')
                                            }
                                            }
                                        >
                                            Log out</button></Link>


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