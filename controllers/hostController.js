const Home = require("../models/home");

exports.getAddHome = (req,res,next)=>{
       res.render('host/addHome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
};

exports.getHostHomes = (req,res,next)=>{
       const registeredHomes = Home.fetchAll((registeredHomes)=>{
             res.render('host/host-home-list',{registeredHomes : registeredHomes, pageTitle : 'Host Home List', currentPage: 'host-home'});
       });
      };

exports.postAddHome=(req,res,next)=>{
       console.log('Home Registration successful for:', req.body);
         
       //there is repetation of req.body so do not use it 
       //const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoUrl);
       
       //use this better approach
       const {houseName, price, location, rating, photoUrl} = req.body;
       const home = new Home(houseName, price, location, rating, photoUrl);
       home.save();

       res.render('host/homeAdded',{pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
};

//all are in one file so no need to exports this
//exports.registeredHomes = registeredHomes;