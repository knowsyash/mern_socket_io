const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data')
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});
app.get('/api/chats', (req, res) => {

    res.send(chats);
  });
  app.get('/api/:id', (req, res) => {
    res.send(chats.find(ele => ele._id === req.params.id));
  });  

  

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
