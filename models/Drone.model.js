// Iteration #1
const { Schema , model } = require("mongoose");

const dronesSchema = new Schema({
    name: String,
    propellers:Number,
    maxSpeed:Number,
})

const dronesModel = model("drones", dronesSchema);

module.exports = dronesModel;
