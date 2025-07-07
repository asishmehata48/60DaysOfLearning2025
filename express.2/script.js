const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Welcome to my Node.js app!');
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`You requested user with ID: ${userId}`);
});

app.get('/posts/:postId/comments/:commentId', (req, res) => {
  const { postId, commentId } = req.params;
  res.send(`Post ID: ${postId}, Comment ID: ${commentId}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
