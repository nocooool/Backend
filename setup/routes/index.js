var express = require('express');
var router = express.Router();
const userModel = require("./users");

//create database
router.get("/create", async function(req, res){
  const createdUser = await userModel.create({
    //order of the values passed doesn't matter 
    user: "nocool",
    name: "nakul",
    age: 21,
  }); //this is async code so handle it with async await
  res.send(createdUser);
})

//find all documents
router.get("/allusers", async function(req, res){
  let finduser = await userModel.find();
  res.send(finduser);
})

//delete the collection
router.get("/delete", async function(req, res){
  let userDeleted = await userModel.findOneAndDelete({
    user: "nocool"
  })
  res.send(userDeleted)
})

//using session
//data flow : we havve to send data server --> client so req is used for session
//once a server is restarted the session gets deleted
// router.get("/", function(req, res){
//   req.session.ban = true; //ban is somedata for this browser
//   res.send("index");
// })

router.get("/checkban", function(req, res){
  if(req.session.ban === true){
    res.send("you are banned")
    console.log(req.session)
  }
  else{
    res.send("u are unbanned !!")
    console.log(req.session) //will give undedfined as session is deleted
  }
})

router.get("/unban", function(req, res){
  req.session.destroy(function(err){
    if (err) throw err;
    res.send("u are unbanned check again");
  })
  console.log(req.session);//will give undedfined as session is deleted
})

//using cookie
//data flow : we havve to send data client --> server so res is used for session
router.get("/", function(req, res){
  res.cookie("name", "nocool");
  res.cookie("age", 21);
  res.render("index")
});

//to read the cookie
//data is in the server so 
router.get("/read", function(req, res){
  console.log(req.cookies);
  res.send("check console");
})

router.get("/deleteCookie", function(req, res){
  res.clearCookie("age");
  res.send("cleared!")
})

//this is fucntion to find one user
//as kevqn doesn't exist in collection so it will return null
// router.get("/allusers", async function(req, res){
//   let finduser = await userModel.findOne({user: "kevqn"});
//   console.log(finduser);
//   res.send(finduser);
// })

module.exports = router;
