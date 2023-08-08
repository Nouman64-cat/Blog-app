import express from 'express';
import { Blog } from '../mongodb/models/blog.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
