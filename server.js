//express//mongoose//cors/
const express = require('express');
const mongoose = require('mongoose')//for database
const cors = require('cors')

// middleware
const app = express();
app.use(cors())
const PORT = 3001//react runs on 3000

app.use(express.json())//call express.json for data

app.get('/', (req, res) => {
  res.send("post app")
})
app.listen(PORT, () => {
  console.log('listening to', PORT)
})

mongoose.connect('mongodb://localhost:27017/posts')
mongoose.connection.once('open', ()=>{
  console.log('connected to mongod...');
});
