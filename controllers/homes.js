exports.getAddHome = (req,res,next)=>{
       res.render('addHome',{pageTitle: 'Add Home to airbnb', currentPage: 'addHome'});
};

const registeredHomes =[];

exports.postAddHome=(req,res,next)=>{
       console.log('Home Registration successful for:', req.body);
       registeredHomes.push(req.body);
       res.render('homeAdded',{pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
};

exports.getHomes = (req,res,next)=>{
       console.log(registeredHomes);
       res.render('home',{registeredHomes : registeredHomes, pageTitle : 'airbnb home', currentPage: 'Home'});
};

//all are in one file so no need to exports this
//exports.registeredHomes = registeredHomes;