import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const authVeify = (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if (!token) return res.status(403).send("Access Denied");
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" })
    }
}