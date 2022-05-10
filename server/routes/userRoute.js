const express = require("express");
const userController = require("../controllers/userController");
const server = express();
const userRouter = express.Router();

console.log("inside user router");
userRouter.post("/addUser", userController.addUser);
userRouter.post("/getUser", userController.getUser);
userRouter.get("/getSession", userController.getSession);
userRouter.get("/logout", userController.logoutUser);
// userRouter.get("/getUser", userController.test);

module.exports = userRouter;
