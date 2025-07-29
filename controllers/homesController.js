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

 exports.postAddToFavourite = (req, res, next)=>{
      console.log("Came to add to favourite", req.body);
      res.redirect("/favourites");
 }     

      exports.getHomeDetails = (req,res,next)=>{
       const homeId = req.params.homeId;
      console.log("At home details page", homeId);
       Home.findById(homeId, home=>{
            if(!home){
                  console.log("Home not found");
                  res.redirect("/homes");
            }else{
             console.log("Home details found", home);
        res.render('store/home-detail',{pageTitle : 'Home Detail', currentPage: 'Home', home : home});
            }
      });
      };
       
//all are in one file so no need to exports this
//exports.registeredHomes = registeredHomes;