//external module
const express= require("express");
const hostRouter = express.Router();

//use like this or 
//const {getAddHome} = require("../controllers/homes");
//hostRouter.get("/add-home", getAddHome);

//like this 
const hostController = require("../controllers/hostController");
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home",hostController.postAddHome);
hostRouter.get("/host-home-list",hostController.getHostHomes);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/edit-home", hostController.postEditHome);

exports.hostRouter = hostRouter;
