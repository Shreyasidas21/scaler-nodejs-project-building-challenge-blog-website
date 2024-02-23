const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

require('./mongodb');

const Blog = require('./schema');

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

require('./blogdata');
  
// const addBlogs = async(blogs)=>{
//     await Blog.insertMany(blogs);
// }
// addBlogs(blogs);

// API endpoint to fetch all blog posts
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, ()=>{
    console.log(`Server Started at port ${PORT}`);
})