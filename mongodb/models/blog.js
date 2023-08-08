import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: String, required: true},
  // image: { type: String, required: true },
});


const Blog = mongoose.model('Blog', blogSchema);

export { Blog };
