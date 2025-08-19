import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2MzOTY2OTAyZmYwODM3NWVmMzcyZTg0YTEyZmMyNSIsIm5iZiI6MTc1NTE2Nzg3Ny40NjgsInN1YiI6IjY4OWRiYzg1OTQxYjczMmI2ZTFhM2RjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kVieF87MfE2pfNfar8eMDBH609h4GVYc9LC4fD0zNCQ"

    config.headers.Authorization = `Bearer ${token}`

    return config
})