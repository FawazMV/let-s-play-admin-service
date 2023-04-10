import mongoose from 'mongoose'
const adminSchema = new mongoose.Schema
    (
        {
            email: {
                type: String,
                unique: true,
                trim: true
            },
            password: {
                type: String,
                trim: true,
            },

        }
    )

const adminModel = mongoose.model('admin', adminSchema)

export default adminModel