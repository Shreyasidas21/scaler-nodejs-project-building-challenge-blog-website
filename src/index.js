const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 5000;
const MONGO_URL = "mongodb://localhost:27017/test";

const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));

mongoose.connect(MONGO_URL).then(()=>{
    console.log("Database Connected");
}).catch((err)=>console.log(err));

const blogSchema = new mongoose.Schema({
    category: String,
    title: String,
    date: Date,
    description: String,
    author: String,
});

// Create a model based on the schema
const Blog = mongoose.model('Blog', blogSchema);
const blogs = [
    {
      "category": "Tech",
      "title": "Introduction to JavaScript",
      "date": "2023-02-12",
      "description": "Learn the basics of JavaScript and how to use it in web development.",
      "author": "John Doe",
      "image": "images/js_intro.jpg",
      "authorImage": "images/john_doe.jpg"
    },
    {
      "category": "Food",
      "title": "Delicious Pasta Recipes",
      "date": "2022-02-12",
      "description": "Explore a variety of pasta recipes that are easy to make at home.",
      "author": "Jane Smith",
      "image": "images/pasta_recipes.jpg",
      "authorImage": "images/jane_smith.jpg"
    },
    {
      "category": "Tech",
      "title": "Getting Started with React",
      "date": "2020-02-21",
      "description": "A beginner's guide to getting started with React.js for building modern web applications.",
      "author": "Bob Johnson",
      "image": "images/react_intro.jpg",
      "authorImage": "images/bob_johnson.jpg"
    },
    {
      "category": "News",
      "title": "Global Events Update",
      "date": "2022-02-16",
      "description": "Stay informed about the latest global events happening around the world.",
      "author": "Emily Brown",
      "image": "images/global_events.jpg",
      "authorImage": "images/emily_brown.jpg"
    },
    {
      "category": "Tech",
      "title": "Building Responsive Websites with CSS Grid",
      "date": "2022-02-12",
      "description": "Learn how to create responsive layouts using CSS Grid for modern web design.",
      "author": "Chris Anderson",
      "image": "images/css_grid.jpg",
      "authorImage": "images/chris_anderson.jpg"
    },
    {
      "category": "News",
      "title": "Technology Advancements in 2021",
      "date": "2021-05-12",
      "description": "Explore the latest technological advancements that shaped the year 2021.",
      "author": "Alex White",
      "image": "images/tech_advancements.jpg",
      "authorImage": "images/alex_white.jpg"
    },
    {
      "category": "Tech",
      "title": "The Future of Artificial Intelligence",
      "date": "2022-03-12",
      "description": "An in-depth look at the future possibilities and challenges of artificial intelligence.",
      "author": "Sophie Davis",
      "image": "images/ai_future.jpg",
      "authorImage": "images/sophie_davis.jpg"
    },
    {
      "category": "News",
      "title": "Space Exploration Milestones",
      "date": "2022-01-01",
      "description": "Highlighting key milestones in the field of space exploration over the years.",
      "author": "Michael Turner",
      "image": "images/space_exploration.jpg",
      "authorImage": "images/michael_turner.jpg"
    },
    {
      "category": "Food",
      "title": "Healthy Smoothie Recipes",
      "date": "2022-02-12",
      "description": "Discover refreshing and nutritious smoothie recipes for a healthy lifestyle.",
      "author": "Olivia Wilson",
      "image": "images/smoothie_recipes.jpg",
      "authorImage": "images/olivia_wilson.jpg"
    }
  ]
  
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