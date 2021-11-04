//express//mongoose//cors/
const express = require('express');
const mongoose = require('mongoose')//for database
const cors = require('cors')
require('dotenv').config()

// middlewaregit
const app = express();
const db = mongoose.connection;
app.use(cors())

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

// const PORT = 3001//react runs on 3000
// const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const PROJECT3_DB = process.env.PROJECT3_DB;

// Connect to Mongo
mongoose.connect(PROJECT3_DB,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(express.json())//call express.json for data
// console.log(process.env)

app.get('/', (req, res) => {
  res.send("post app")
})

//controllers
const postsController = require('./controllers/post.js')
app.use('/posts', postsController)

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port', PORT));

// app.listen(PORT, () => {
//   console.log('listening to', PORT)
// })
//
// mongoose.connect('mongodb://localhost:27017/posts')
// mongoose.connection.once('open', ()=>{
//   console.log('connected to mongod...');
// });
