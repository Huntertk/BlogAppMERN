const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
console.log(User);

const salt = bcrypt.genSaltSync(10)
const secret = 'aq12wsxzd34fr6tnnjb7y7kh8165ed87fg4sfd98g4ea9'

const app = express()
app.use(cors({
    credentials: true,
    origin:'http://localhost:5173'
}))
app.use(express.json())

mongoose.connect('mongodb+srv://factsofuniverse8:k4eqlD0QesBadYnR@cluster0.crbpqqo.mongodb.net/?retryWrites=true&w=majority')

app.post("/register", async (req, res) => {
    const {username, password} = req.body
    try{
        const userDoc = await User.create({
            username, 
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc)
    } catch(err){
        res.status(400).json(err)
    }
})

app.post("/login", async (req, res) => {
    const {username, password} = req.body
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
        //login
        jwt.sign({username, id: userDoc._id},secret,{}, (err, token) => {
            if(err){
                throw err
            } 
            res.cookie('token', token).json('ok')
        })
    } else{
        res.status(400).json("wrong credentails")
    }
})

app.listen(4000, () => {
    console.log("Server is Started on Port 4000");
})

//MongoDB Atlas Database Password
// mongodb+srv://factsofuniverse8:k4eqlD0QesBadYnR@cluster0.crbpqqo.mongodb.net/?retryWrites=true&w=majority
// k4eqlD0QesBadYnR
