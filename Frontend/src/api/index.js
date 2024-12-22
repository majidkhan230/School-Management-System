import axios from "axios";

const apiClient = axios.create({
baseURL:"",
timeout:3000,
headers:{
    "Content-Type":'application/json'
}
})


export default  apiClient