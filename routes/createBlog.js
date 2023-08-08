import express from 'express';
import { Blog } from '../mongodb/models/blog.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { topic, title, content, author } = req.body;

    // Create a new Blog instance
    const blog = new Blog({
      topic,
      title,
      content,
      author,
      // image,
      // createdAt will be automatically generated when saving
    });

    // Save the blog to the database
    await blog.save();
    console.log('Blog saved successfully');
    res.status(201).json({ blog });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
});

export default router;
