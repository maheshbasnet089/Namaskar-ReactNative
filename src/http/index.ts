import axios from 'axios'

const API = axios.create({
    baseURL : 'http://10.0.2.2:3000/',
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})



export default API