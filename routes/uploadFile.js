import express from 'express';
import multer from 'multer'; // Import multer for handling file uploads
import path from 'path';

import { User, Blog } from '../mongodb/models/blog.js';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { topic, title, content, author } = req.body;
    const image = req.file ? req.file.path : null; // Get the path of the uploaded image

    const blog = new Blog({ topic, title, content, author, image });
    await blog.save();
    
    res.status(201).json({ blog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
