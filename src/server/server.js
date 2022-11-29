const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require("./models/user")

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const app = express()

const urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json(), urlencodedParser)

const dbURI = 'mongodb+srv://GroupR:GroupR@cluster0.xgjznrs.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology: true})
    .then((res) => {
        app.listen(process.env.PORT, () => console.log('Server is live'))
    })
    .catch(err => console.log(err))

app.post('/signup', async (req, res) => {
    const user = req.body;
    const taken = await User.findOne({username: user.username})

    if(taken){
        res.json('That username is already taken')
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)

        const dbUser = new User({
            username: user.username.toLowerCase(),
            password: user.password
        })
        dbUser.save()
        res.json('User information saved succesfully!')
    }
})

app.post('/login', (req, res) => {
    
    const userLoggingIn = req.body;

    User.findOne({username: userLoggingIn.username})
    .then(dbUser => {
        if(!dbUser){
            return res.json({
                message: 'Invalid Username or Password'
            })
        }
        bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then(isCorrect => {
            if(isCorrect){
                const payload = {
                    id: dbUser._id,
                    username: dbUser.username,
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn: 86400},
                    (err, token) => {
                        if (err) return res.json({message: err})
                        return res.json({
                            message: 'Success',
                            token: 'Bearer' + token
                        })
                    }
                )
            } else {
                return res.json({
                    message: 'Invalid Username or Password'
                })
            }
        })
    })
})

function verifyJWT(req, res, next){
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token){
        jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
            if (err) return res.json({
                isLoggedIn: false,
                message: 'Failed to Authenticate'
            })
            req.user = {};
            req.user.id = decoded.id
            req.user.username = decoded.username
            next()
        })
    } else {
        res.json({message: 'Incorrect Token Given', isLoggedIn: false})
    }
}

app.get('/getUsername', verifyJWT, (req, res) => {
    res.json({isLoggedIn: true, username: req.user.username})
})

//localStorage.removeItem('token')

