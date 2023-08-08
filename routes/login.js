import express from 'express'

import {User} from '../mongodb/models/blog.js'

const router = express.Router()

router.get('/', async (req,res) => {
  try {
    const users = await User.find()
    res.send(users)
    console.log(`users: ${users} logged in successfully`)
  } catch (error) {
    res.status(500).send(error.message);
  }
})

export default router;