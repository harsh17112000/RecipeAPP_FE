import React, { useState } from 'react'
import "../Login/Login.scss"
import { NavLink } from 'react-router-dom'

const Register = () => {
    const [passShow,setPassShow] = useState(false);
    const [cpassShow,setCPassShow] = useState(false);
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="profile_div text-center">
                        <img src="/logo192.png" alt="" style={{ width: "50px" }} />
                    </div>
                    <form>
                        <div className="form_input">
                            <input type="text" name="username" id="" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <input type="email" name="email" id="" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <input type="file" name="userprofile" id=""  />
                        </div>
                        <div className="form_input">
                            <div className="two">
                                <input type={!passShow ? "password":"text"} name="password" id="" placeholder='Enter Your password' />
                                <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                                    {!passShow ? "Show" :"Hide"}
                                </div>
                                
                            </div>
                        </div>
                        <div className="form_input">
                            <div className="two">
                                <input type={!cpassShow ? "password":"text"} name="email" id="" placeholder='Enter Your confirm password' />
                                <div className="showpass" onClick={()=>setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" :"Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn'>Sign Up</button>
                        <p>Already have an Account ? <NavLink to="/login">Login</NavLink> </p>
  
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register