const fs = require('fs');
const path = require('path');

// Route to serve the JSON data
app.get('/api/posts', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'posts.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading blog data.");
        }
        res.json(JSON.parse(data));
    });
});

// Route to serve the Blog HTML page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});