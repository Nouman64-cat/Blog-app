import express from 'express';

import { Blog } from '../mongodb/models/blog.js';

const router = express.Router();

router.get('/', async (req, res) => {
  //Feting all the blogs from the database
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch{
    res.status(500).json({ message: 'Internal server error' });
  }
})

export default router;