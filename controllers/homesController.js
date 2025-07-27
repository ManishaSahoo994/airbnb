const Home = require("../models/home");


exports.getIndex = (req,res,next)=>{
       const registeredHomes = Home.fetchAll((registeredHomes)=>{
             res.render('store/index',{registeredHomes : registeredHomes, pageTitle : 'airbnb home', currentPage: 'index'});
       });
       
};
exports.getHomes = (req,res,next)=>{
       const registeredHomes = Home.fetchAll((registeredHomes)=>{
             res.render('store/home-list',{registeredHomes : registeredHomes, pageTitle : 'Home List', currentPage: 'Home'});
       });
      };

exports.getBookings = (req,res,next)=>{
             res.render('store/bookings',{pageTitle : 'My bookings', currentPage: 'bookings'});
       };

 exports.getFavouriteList =  (req,res,next)=>{
      Home.fetchAll((registeredHomes)=>{
              res.render('store/favourite-list',{registeredHomes : registeredHomes, pageTitle : 'My Favourites', currentPage: 'favourites'});
       });
      };
       
//all are in one file so no need to exports this
//exports.registeredHomes = registeredHomes;