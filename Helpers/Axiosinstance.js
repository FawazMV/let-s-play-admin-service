import Axios from 'axios'


export const Axiosbooking = Axios.create({
    baseURL: 'https://let-s-play-booking-service.onrender.com'
})

export const Axiosuser = Axios.create({
    baseURL: 'https://let-s-play-user-service.onrender.com'
})

export const Axiosturf = Axios.create({
    baseURL: 'https://let-s-play-turf-service.onrender.com'
})
