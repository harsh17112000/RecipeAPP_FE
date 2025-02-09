import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

// user register
export const UserRegister = createAsyncThunk("UserRegister",async(data)=>{
    try {
        
    } catch (error) {
        
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
    }
})


export default UserSlice.reducer;