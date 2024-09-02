import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://www.course-api.com'
});

authFetch.interceptors.request.use((request)=>{
    request.headers['Accept'] = 'application/json';
    console.log('Request Sent');
    return request
},(error)=>{
    return Promise.reject(error)
})

authFetch.interceptors.response.use((response)=> {
    console.log('Got Response');
    return response
},(error)=> {
    if(error.response.status === 404){
        console.log('Page Not Found');
    }
    return Promise.reject(error)
})

export default authFetch;