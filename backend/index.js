const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data')
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});
app.get('/chats', (req, res) => {
    console.log("sended");
    res.send(chats);
  });
  app.get('/:id', (req, res) => {
    res.send(chats.find(ele => ele._id === req.params.id));
  });  

  

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
