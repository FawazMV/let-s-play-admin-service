import { Axiosbooking as axios } from "../Helpers/Axiosinstance.js"

export const getReports = async (req, res) => {
    try {
        const response = await axios.get('/all-reports')
        return res.status(200).json(response.data)
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}

export const getPaymentRequests = async (req, res) => {
    try {
        const response = await axios.get('/payment-requests')
        return res.status(200).json(response.data)
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}

export const confirmPaymentRequest = async (req, res) => {
    try {
        const response = await axios.patch('/payment-confirm', { id: req.body.id })
        return res.status(200).json(response.data)
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error', err: error })
    }
}