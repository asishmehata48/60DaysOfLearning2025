const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to My Express Server</h1>
        <p>Try visiting these:</p>
        <ul>
            <li><a href="/greet?name=Asish">Asish</a></li>
            <li><a href="/info?topic=express">express</a></li>
        </ul>
    `);
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}. Welcome to the server.`);
});

app.get('/info', (req, res) => {
    const topic = req.query.topic;

    if (!topic) {
        res.send('Please provide a topic using ?topic=something');
        return;
    }

    if (topic.toLowerCase() === 'express') {
        res.send('Express is a fast and simple web framework for Node.js.');
    } else if (topic.toLowerCase() === 'node') {
        res.send('Node.js allows you to run JavaScript on the server.');
    } else {
        res.send(`Sorry, I don’t have information about "${topic}".`);
    }
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});
