
import express from 'express'
const router = express.Router()

import { dashboardGraphDetails, getUsersCount, getTurfsCount, getProfit } from "../Controllers/DashboardControllers.js";
import { authVeify } from '../Helpers/JWT.js';

router.get('/graph-details', authVeify, dashboardGraphDetails)

router.get('/get-user-count', authVeify, getUsersCount)

router.get('/get-turf-count', authVeify, getTurfsCount)

router.get('/get-profit', authVeify, getProfit)

export default router   
