const express = require('express');
const router = express.Router();
const Posts = require('../models/posts.js')

//create route
router.post('/', (req, res) => {
  Posts.create(req.body, (error, createdPosts) => {
    res.json(createdPosts)
  })
})

router.get('/', (req, res) => {
  res.send("post page")
})

module.exports = router