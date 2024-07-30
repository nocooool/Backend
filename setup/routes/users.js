//mongoDB configuration

const mongoose = require("mongoose")

//demodb - database name
mongoose.connect("mongodb://127.0.0.1:27017/demodb");

const userSchema = mongoose.Schema({
  user: String,
  name: String,
  age: Number,
})

//here user - name of the model 
//userSchemna - name of schema variable
module.exports = mongoose.model("user", userSchema);
