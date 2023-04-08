import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes/Routes.js'
import dashboard from './Routes/DashboardRoutes.js'
import mongoose from 'mongoose'
import cors from 'cors'


dotenv.config()
const app = express()
app.use(express.json());
const corsOptions = {
    origin: 'https://let-s-play.onrender.com',
    methods: 'GET,POST,PATCH,PUT,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions));


const DATABASE_URL = process.env.DATABASE_URL
mongoose.set("strictQuery", false);
mongoose.connect(DATABASE_URL, () => console.log('Database Connected'))


app.listen(7171, () => console.log('Connected to server 7171'))

app.use('/', Router)

app.use('/dashboard', dashboard) 