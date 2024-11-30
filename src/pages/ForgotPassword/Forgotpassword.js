import React from 'react'

const Forgotpassword = () => {
  return (
    <>
         <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Forgot Password</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" placeholder='Enter Your Email Address' />
                        </div>
                        <button className='btn'>Submit</button>
                       
                    </form>
                </div>
            </section>
    </>
  )
}

export default Forgotpassword