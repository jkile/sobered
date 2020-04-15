const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()


// Create new user
router.post('/users', async (req, res) => {
    
    const user = new User({username: req.body.username, password: req.body.password, email: req.body.email})

    try {
        await user.save()
        res.send(200)

    } catch (e) {
        res.status(400).send(e)
    }
})

// User login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        if(user){
        res.send(200)
        return console.log('Login Successful')
        }
   
    } catch (e) {
        res.status(400).send()
        return console.log('Login Failed')
    }
})

// user logout - single device
// router.post('/users/logout', auth, async (req, res) => {
//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token
//         })

//         await req.user.save()
//         res.send()
        
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router