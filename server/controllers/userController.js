const user = require("../models/user.model");
const conn = require("../auth/mongoConnection");
// const asyncHandler = require("express-async-handler");
const userController = {
  //@desc Add a new Admin
  //@route POST /user/add
  //@access Admin
  addUser: async (req, res) => {
    const { username, userpassword, usermail } = req.body;
    const userCreate = await user.create({
      username,
      userpassword,
      usermail,
    });
    if (userCreate) {
      res.status(201).json({
        username: userCreate.username,
        password: userCreate.userpassword,
        usermail: userCreate.usermail,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  },
  getUser: async (req, res) => {
    const allUsers = await user.find({username:req.body.name, userpassword:req.body.pass});
    if(allUsers){
      res.status(200).json(allUsers)
    }else{
      res.status(400).json({validUser:false});
    }
  },
  test: (req, res) => {
    res.send("All Ok");
  },
};

module.exports = userController;
