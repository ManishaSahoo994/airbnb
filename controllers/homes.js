const Home = require("../models/home");

exports.getAddHome = (req,res,next)=>{
       res.render('addHome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
};


exports.postAddHome=(req,res,next)=>{
       console.log('Home Registration successful for:', req.body);
         
       //there is repetation of req.body so do not use it 
       //const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
       
       //use this better approach
       const {houseName, price, location, rating, photoUrl} = req.body;
       const home = new Home(houseName, price, location, rating, photoUrl);
       home.save();

       res.render('homeAdded',{pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
};

exports.getHomes = (req,res,next)=>{
       const registeredHomes = Home.fetchAll();
       console.log(registeredHomes);
       res.render('home',{registeredHomes : registeredHomes, pageTitle : 'airbnb home', currentPage: 'Home'});
};

//all are in one file so no need to exports this
//exports.registeredHomes = registeredHomes;