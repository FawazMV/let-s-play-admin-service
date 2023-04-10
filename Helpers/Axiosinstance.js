import Axios from 'axios'


export const Axiosbooking = Axios.create({
    baseURL: 'http://localhost:4321'
})

export const Axiosuser = Axios.create({
    baseURL: 'http://3.26.144.127'
})

export const Axiosturf = Axios.create({
    baseURL: 'http://3.27.116.175'
})
