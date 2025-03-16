import React, { useState } from 'react'
import "./Login.scss"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { UserLogin } from '../../redux/slice/userAuthSlice/userAuthSlice';

const Login = () => {
    const [passShow, setPassShow] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [inputvalue,setInputValue] = useState({
        email:"",
        password:""
    });
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setInputValue({
            ...inputvalue,
            [name]:value
        })
    }


    const handleSubmit = (e)=>{
        e.preventDefault();

        const {email,password} = inputvalue;

         if(email == ""){
            toast.error("email is requried")
        }else if(!email.includes("@")){
            toast.error("enter valied email")
        }else if(password == ""){
            toast.error("password is requried")
        }else{

            dispatch(UserLogin(inputvalue)).then((res)=>{
                if(res.payload !== undefined){
                    navigate('/')
                }
            }).catch((error)=>{
                console.log("error",error)
            })

        }


    }

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
                            <input type="email" name="email" onChange={handleChange} id="" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={handleChange} name="password" id="" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={handleSubmit}>Login</button>
                        <p>Don't have an Account ? <NavLink to="/register">Signup</NavLink> </p>
                        <p>ForGot Password <NavLink to="/forgotpassword">Click Here</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login