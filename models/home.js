const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
//fake database
//const registeredHomes =[];
const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home{

    constructor(houseName, price, location, rating, photoUrl){
            this.houseName = houseName;
            this.price = price;
            this.location = location;
            this.rating = rating;
            this.photoUrl = photoUrl;
    }

    save (){
        Home.fetchAll((registeredHomes)=>{
            if(this.id){ //edit home case
           registeredHomes = registeredHomes.map(home =>{
            // using if else 

        //     if(home.id === this.id){
        //         return this;
        //     }
        //     return home;

       //in one line
        return home.id === this.id ? this : home;
           })

        }else{//add home case
        this.id = Math.random().toString();
            registeredHomes.push(this);
        }
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error =>{
        console.log("file writing concluded", error);
        });
    });
    }

    static fetchAll(callback){
        fs.readFile(homeDataPath,(err,data)=>{
           //console.log("File read:", err, data);
           callback(!err ? JSON.parse(data) : []);
        });
    }
    static findById(homeId, callback){
        this.fetchAll(homes =>{
         const homeFound = homes.find(home => home.id === homeId);
         callback(homeFound);
        })
    }
};