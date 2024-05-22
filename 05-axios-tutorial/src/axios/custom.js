import axios from "axios"

const AuthFetch = axios.create({
    baseURL: 'https://www.course-api.com',
    headers: {
        Accept: 'application/json'
    }
})
export default AuthFetch