const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    id: mongoose.Schema.ObjectId
    //one set of previlage
    //mongoose id type for schema
  }
)
const Users = mongoose.model('Users', postsSchema);
module.exports = Users