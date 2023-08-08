import express from 'express'

import {User} from '../mongodb/models/blog.js'

const router = express.Router()

router.get('/', async (req,res) => {
  res.send("This is Register.js");
})

router.post('/', (req, res) => {
  try {
    const {userName, email, passwordHash} = req.body;
    const user = new User({userName, email, passwordHash})
    user.save()
    res.status(200).json("User registered successfully");
    console.log(`User ${userName} registered successfully!`);
  } catch (error) {
    res.status(500).send(error.message)
  }
})


export default router;