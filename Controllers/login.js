import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import adminModel from '../Models/Admin_Model.js'
dotenv.config()

export const login = async (req, res, next) => {
    try {
        const user = await adminModel.findOne({ email: req.body.email })
        if (!user) return res.status(401).json({ msg: "Invalid credentials." });
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) return res.status(401).json({ msg: "Invalid credentials.." });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        res.status(200).json({ token });
    }
    catch (err) {
        next(error)
    }
}