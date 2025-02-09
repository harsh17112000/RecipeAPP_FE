import axios from "axios";


export const commonrequest = async(methods,url,body,header,auth)=>{
    const userToken = localStorage.getItem("userToken");

    let config ={
        method:methods,
        url,
        headers:{},
        data:body
    }


    if(auth == "user"){
        config.headers.Authorization = userToken;
    }

    if(header){
        config.headers["Content-Type"] = "multipart/form-data";
    }else{
        config.headers["Content-Type"] = "application/json";
    }

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        return error;
    }

}