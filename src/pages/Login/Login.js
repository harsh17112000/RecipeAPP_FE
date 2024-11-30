import React, { useState } from 'react'
import "./Login.scss"
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign In</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} name="email" id="" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn'>Login</button>
                        <p>Don't have an Account ? <NavLink to="/register">Signup</NavLink> </p>
                        <p>ForGot Password <NavLink to="/forgotpassword">Click Here</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login