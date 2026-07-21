import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env',

})

const JWT_SECRET = process.env.JWT_SECRET || '55gkYQQBSuP8tO5um1dNVUF3YhmP5sQ5D9vV0QsYqktE7B475HK0BhWeKMw'
export const generateToken = (user) => {
    return jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, JWT_SECRET, {
        expiresIn: '7d',
    })
}
export const verifyToken= (token)=> {
    return jwt.verify(token, JWT_SECRET)
}
