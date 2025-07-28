//core module
const path = require("path");
//external module
const express=require("express");
const userRouter = express.Router();
//const rootDir = require("../utils/pathUtil");

const homesController = require("../controllers/homesController");

userRouter.get("/", homesController.getIndex);
userRouter.get("/bookings", homesController.getBookings);
userRouter.get("/homes", homesController.getHomes);
userRouter.get("/favourites", homesController.getFavouriteList);

userRouter.get("/homes/:homeId", homesController.getHomeDetails);

 module.exports = userRouter;