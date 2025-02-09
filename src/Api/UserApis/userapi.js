import { BASE_URL } from "../helper";
import { commonrequest } from "../CommonRequest";

// user register api
export const registerApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/userauth/api/register`,data,header,"user")
}