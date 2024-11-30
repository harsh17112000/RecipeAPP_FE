import React, { useState } from 'react'

const ResetPassword = () => {
    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Reset Your Password</h1>
                    </div>

                    <form>

                        <div className="form_input">
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} name="password" id="" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>

                            </div>
                        </div>
                        <div className="form_input">
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} name="email" id="" placeholder='Enter Your confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn'>Submit</button>


                    </form>
                </div>
            </section>
        </>
    )
}

export default ResetPassword