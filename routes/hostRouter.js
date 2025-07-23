//external module
const express= require("express");
const hostRouter = express.Router();

//use like this or 
//const {getAddHome} = require("../controllers/homes");
//hostRouter.get("/add-home", getAddHome);

//like this 
const homesController = require("../controllers/homes");
hostRouter.get("/add-home", homesController.getAddHome);

hostRouter.post("/add-home",homesController.postAddHome);
exports.hostRouter = hostRouter;
