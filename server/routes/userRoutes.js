const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()
const withAuth = require('../middleware/middleware')
const secret = require('../middleware/secret')
const app = express()


const jwt = require('jsonwebtoken');

router.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
}
)
router.post('/users/login', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    console.log(user)
    if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });

    } else {
      // Issue token
      const payload = req.body.email;
      const token = jwt.sign(payload, secret, {
        // expiresIn: '1h'
      });
      res.cookie('token', token, { httpOnly: true })
        .json(user);

    }

  } catch (e) {
    res.status(400).send(e);
  }
});


// Create new user
router.post('/users/signup', async (req, res) => {
  const user = new User({ username: req.body.username, password: req.body.password, email: req.body.email })

  try {
    await user.save()
    const payload = req.body.email;
    const token = jwt.sign(payload, secret, {
      // expiresIn: '1h'
    });
    res.cookie('token', token, { httpOnly: true })
      .sendStatus(200);

  } catch (e) {
    res.status(400).send(e)
  }
})

// // User login
// router.post('/users/login', async (req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         if(user){
//         res.send(200)
//         return console.log('Login Successful')
//         }

//     } catch (e) {
//         res.status(400).send()
//         return console.log('Login Failed')
//     }
// })

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