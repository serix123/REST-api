require('dotenv/config')
const port = process.env.PORT || 3000

// Web server code
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// importing routes
const postRoutes = require('./routes/postsRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/posts',postRoutes)

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Connecting to database
mongoose.connect(
  process.env.REST_DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
  console.log('Connected to DB')
})

// Listen to a port
app.listen(port, () => 
console.log(`listening on port ${port}`))

