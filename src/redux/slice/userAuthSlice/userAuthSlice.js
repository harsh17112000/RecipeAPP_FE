import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../../../Api/UserApis/userapi";
import toast from "react-hot-toast";

// user register
export const UserRegister = createAsyncThunk("UserRegister",async(data)=>{
    try {
        const response = await registerApi(data.data,data.header);

        console.log("resssss",response)


        if(response.status == 200){
            toast.success("user sucessfully registered")
            return response.data
        }else{
            toast.error(response.response.data.error)
        }
    } catch (error) {
        throw error;
    }
})

// user login
export const UserLogin = createAsyncThunk("UserLogin",async(data)=>{
    try {
        const response = await loginApi(data);

        if(response.status == 200){
            localStorage.setItem("usertoken",response.data.result.token)
            toast.success("user sucessfully login")
            return response.data
        }else{
            toast.error(response.response.data.error)
        }
    } catch (error) {
        throw error;
    }
})


// create slice(action and reducer)

export const UserSlice = createSlice({
    name:"UserSlice",
    initialState:{
        user:[],
        userLoggedIn:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(UserRegister.pending,(state)=>{
            state.loading = true
        })
        .addCase(UserRegister.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload
        })
        .addCase(UserRegister.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })

        // user login add case
        .addCase(UserLogin.pending,(state)=>{
            state.loading = true
        })
        .addCase(UserLogin.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload
        })
        .addCase(UserLogin.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})


export default UserSlice.reducer;