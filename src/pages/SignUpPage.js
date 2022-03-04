import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // error message
  const [errorFirstName, setErrorFirstName] = useState('')
  const [errorLastName, setErrorLastName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  // validate form
  const validate = () => {
    let isValidated = true

    // regex for check email format
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // for first name
    if (firstName === "") {
      // if first name is empty
      setErrorFirstName('* first name cannot be empty')
      isValidated = false
    } else {
      setErrorFirstName('')
    }

    // for last name
    if (lastName === "") {
      // if last name is empty
      setErrorLastName('* last name cannot be empty')
      isValidated = false
    } else {
      setErrorLastName('')
    }

    // for email
    if (email === "") {
      // if email is empty
      setErrorEmail('* Email cannot be empty')
      isValidated = false
    }
    else if (!email.match(emailFormat)) {
      // if email does not match the email format
      setErrorEmail('* Email is invalid')
      isValidated = false
    }
    else {
      setErrorEmail('')
    }

    // for password
    if (password === "") {
      // if password is empty
      setErrorPassword('* password is invalid')
      isValidated = false
    }
    else if (password.length <= 4) {
      // if password length is less than 5
      setErrorPassword('* password length must be larger than 4')
      isValidated = false
    }
    else {
      setErrorPassword('')
    }

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

                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up Now</h2>
                  <p className="text-white-50 mb-5">Please register your account</p>

                  <form method='POST'>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeFirstName">First Name</label>
                      <input type="text" id="typeFirstName" className="form-control form-control-lg"
                        value={firstName} onChange={(event) => {
                          setFirstName(event.target.value)
                        }} />
                      <span>{errorFirstName}</span>
                    </div>


                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeLastName">Last Name</label>
                      <input type="text" id="typeLastName" className="form-control form-control-lg"
                        value={lastName} onChange={(event) => {
                          setLastName(event.target.value)
                        }} />
                      <span>{errorLastName}</span>
                    </div>


                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                      <input type="text" id="typeEmailX" className="form-control form-control-lg"
                        value={email} onChange={(event) => {
                          setEmail(event.target.value)
                        }} />
                      <span>{errorEmail}</span>
                    </div>


                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg"
                        value={password} onChange={(event) => {
                          setPassword(event.target.value)
                        }} />
                      <span>{errorPassword}</span>
                    </div>


                    <br /><br />

                    <button className="btn btn-outline-light btn-lg px-5" type="button"
                      onClick={() => {
                        if (validate()) {
                          alert('success')
                        } else {
                          alert('error')
                        }
                      }} >

                      Sign Up
                    </button>

                  </form>

                </div>

                <div>
                  <p className="mb-0">Do have an account? <Link to="/SignIn" className="text-white-50 fw-bold">Sign In</Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUp
