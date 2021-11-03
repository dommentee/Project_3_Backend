const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema(
  {
    title: String,
    description: String
  },
  {
    timestamps: true

  }
)
const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts
