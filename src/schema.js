const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    category: String,
    title: String,
    date: Date,
    description: String,
    author: String,
    image: String
});

module.exports = new mongoose.model('Blog', blogSchema);