import React from 'react'
import bgImg from './images/bg-01.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './CSS/App.css'
import './CSS/util.css'

const App = () => {

  const funcSignup = (e) => {
    e.preventDefault()
    console.log("holla")
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <div className="limiter">
              <div className="container-login100">
                <div className="wrap-login100">
                  <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-43">
                      Create Super Admin
                    </span>


                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                      <input className="input100" type="text" name="email" />
                      <span className="focus-input100"></span>
                      <span className="label-input100">Email</span>
                    </div>


                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                      <input className="input100" type="password" name="pass" />
                      <span className="focus-input100"></span>
                      <span className="label-input100">Password</span>
                    </div>

                    <div className="container-login100-form-btn">
                      <button className="login100-form-btn" onClick={funcSignup}>
                        Login
                      </button>
                    </div>

                    <div className="text-center p-t-46 p-b-20">
                      <span className="txt2">
                        Powered by Martian Corporation
                      </span>
                    </div>

                    <div className="login100-form-social flex-c-m">
                      <Link to="/" className="login100-form-social-item flex-c-m bg1 m-r-5">
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                      </Link>

                      <Link to="/" className="login100-form-social-item flex-c-m bg2 m-r-5">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>

                      <Link to="/" className="login100-form-social-item flex-c-m bg1 m-r-5">
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </form>

                  <div className="login100-more" style={{ backgroundImage: `url(${bgImg})` }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
