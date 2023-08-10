import express from 'express';
import { getReports, getPaymentRequests, confirmPaymentRequest } from '../Controllers/bookingControllers.js';
import { login } from '../Controllers/login.js';
import { getTurfRequests, reqAccept, getTurfsAccepted, reqCancel, ManageTurf } from '../Controllers/TurfControllers.js';
import { getUsers } from '../Controllers/UserControllers.js';
import { authVeify } from '../Helpers/JWT.js';
const router = express.Router()

router.post('/admin-login', login)

router.get('/turf-requests', authVeify, getTurfRequests)

router.get('/turf-accepted', authVeify, getTurfsAccepted)

router.put('/turf-accept', authVeify, reqAccept)

router.delete('/turf-cancel', authVeify, reqCancel)

router.put('/turf-manage', authVeify, ManageTurf)





router.get('/show-users', authVeify, getUsers)



//booking request

router.get('/all-booking-report', authVeify, getReports)


//payment requests

router.get('/payment-requests', authVeify, getPaymentRequests)

router.put('/payment-confirm', authVeify, confirmPaymentRequest)

export default router   