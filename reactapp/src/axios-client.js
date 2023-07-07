
import axios from "axios";
const axiosClient =axios.create({

baseURL:'${import.meta.env.VITE_API_BASE_URL}/api'
})


axiosClient.interceptors.request.use( (config)=>{

const token=localStorage.getItem('ACCESS_TOKEN')
config.headers.Authorization='Bearer ${token}'

return config;


})

axiosClient.interceptors.response.use( (response)=>{
    // return Promise.reject();

    return response;
},(error)=>{
    //handle error here
    const {response}=error;
if(response.status===401){
    localStorage.removeItem("ACCESS_TOKEN");
}else{
    console.log(`Error:${JSON.stringify(error)}`)
}

})

export default axiosClient;