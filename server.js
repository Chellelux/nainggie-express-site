const express = require('express');
const path = require('path');
const fs = require('fs'); // Added this - you need it to read the JSON file!

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Navigation Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html')); 
});

// Blog Page Route
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// API Route for Blog Data
app.get('/api/posts', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'posts.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data.");
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});