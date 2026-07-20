import *  as AuthModel from "../models/authModel.js";

export async function registerUser(req, res) {
    const user = await AuthModel.registerUser(req.body);
    if(user) {
        return res.status(201).json({message: "User registered successfully", "data": user});
    }
    return res.status(400).json({message: "User registration failed"});
}

export async function loginUser(req, res) {
    const user = await AuthModel.registerUser(req.body);
    if(user) {
        return res.status(201).json({message: "User registered successfully", "data": user});
    }
    return res.status(400).json({message: "User registration failed"});
}
