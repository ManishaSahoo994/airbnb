const Home = require("../models/home");
const Favourite = require("../models/favourite");


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
      Favourite.getFavourites(favourites=>{
      Home.fetchAll((registeredHomes)=>{
            const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
              res.render('store/favourite-list',{favouriteHomes : favouriteHomes, pageTitle : 'My Favourites', currentPage: 'favourites'});
       });
      });
      };

 exports.postAddToFavourite = (req, res, next)=>{
      console.log("Came to add to favourite", req.body);
      Favourite.addToFavourite(req.body.id, error =>{
            if(error){
                  console.log("Error while marking favourite:", error);
            }
            res.redirect("/favourites");
      });
 }     

 exports.postRemoveFromFavourite = (req, res, next)=>{
      const homeId = req.params.homeId;
      Favourite.deleteById(homeId, error=>{
            if(error){
                  console.log("Error while removing from favourite", error);
            }
            res.redirect("/favourites");
      });
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