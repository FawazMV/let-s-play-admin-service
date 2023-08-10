import dotenv from 'dotenv'
import express from 'express'
import Router from './Routes/Routes.js'
import dashboard from './Routes/DashboardRoutes.js'
import mongoose from 'mongoose'
import cors from 'cors'
import connectDB from './Models/config.js'


dotenv.config()
const app = express()
app.use(express.json());
const corsOptions = {
    origin: ['https://let-s-play.onrender.com', 'https://master.des0fpb6pp73d.amplifyapp.com'],
    methods: 'GET,POST,put,PUT,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions));



app.use('/', Router)

app.use('/dashboard', dashboard)

connectDB()
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(7171, () => {
        console.log(`Server running on port 7171 - admin service`);
    });
});