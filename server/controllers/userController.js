const user = require("../models/user.model");
const conn = require("../auth/mongoConnection");
// const asyncHandler = require("express-async-handler");
const userController = {
  //@desc Add a new Admin
  //@route POST /user/add
  //@access Admin
  addUser: async (req, res) => {
    const { username, password, usermail } = req.body;
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
  getUsers: async (req, res) => {},
  test: (req, res) => {
    res.send("All Ok");
  },
};

module.exports = userController;
