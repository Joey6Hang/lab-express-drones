// Iteration #1
require("dotenv").config();
const mongoose = require("mongoose");


const seedModel = require("./../models/Drone.model");

const testSeed =  [ 
    {  name : "Creeper XL 500" ,  propellers : 3 ,  maxSpeed : 12  } , 
    {  name : "Racer 57" ,  propellers : 4 ,  maxSpeed : 20  } , 
    {  name : "Courier 3000i" ,  propellers : 6 ,  maxSpeed : 18  } 
  ] ;

mongoose.connect('mongodb://localhost/lab-express-drones')
.then(() => {
    seedModel.create(testSeed)
    .then(createdrones => {
        console.log(createdrones);
    })
    .catch(err => console.log(err));
})
.catch (err =>   console.log(err));
