import {configureStore} from "@reduxjs/toolkit";
import  UserSlice  from "../slice/userAuthSlice/userAuthSlice";


export const store = configureStore({
    reducer:{
        user:UserSlice
    }
})