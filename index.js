import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './mongodb/connect.js'

// import register from './routes/register.js'
// import login from './routes/login.js'
// import uploadFile from './routes/uploadFile.js'
import createBlog from './routes/createBlog.js'
import readBlog from './routes/readBlog.js'
import readAllBlog from './routes/readAllBlog.js'
dotenv.config()


const app = express()

app.use(cors())

app.use(express.json())


// app.use('/api/register', register)
// app.use('/api/login', login)
// app.use('/api/upload-file', uploadFile)
app.use('/api/create-blog', createBlog)
app.use("/api/read-blog", readBlog);
app.use("/api/read-all-blog", readAllBlog);
app.get("/", (req, res) => {
  res.send("This is Index.js");
});

const startServer = () => {
  try{
    connectDB(process.env.MONGODB_URL)
    app.listen(process.env.PORT, () => console.log(`Server is running on http://localhost:${process.env.PORT}`));
  } catch(error){
    console.log(error)
  }
};

startServer();