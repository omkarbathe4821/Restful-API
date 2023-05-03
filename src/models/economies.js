const mongoose = require('mongoose');

const enconomySchema = mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    gdp:{
        type:String,
        required:true,
        trim:true
    },
    population:{
        type:String,
        required:true,
        trim:true
    },
    year:{
        type:Number,
        default:2023
    },
});

const EconomiesRanking = new mongoose.model("EconomyRanking", enconomySchema)

module.exports = EconomiesRanking;