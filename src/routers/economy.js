const express = require("express");
const router = new express.Router();
const EconomiesRanking = require("../models/economies");


// we will handle post req

router.post("/economies", async (req, res)=>{
    try{
        const addEconomiesRecords = new EconomiesRanking(req.body)
        console.log(req.body)
        const insertEconomies = await addEconomiesRecords.save();
        res.status(201).send(insertEconomies);

    }catch(err){
        res.status(400).send(err);

    }
});

// we will handle get req

router.get("/economies", async (req, res)=>{
    try{
        const getEconomies = await EconomiesRanking.find({}).sort({"ranking": 1});
        res.send(getEconomies);

    }catch(err){
        res.status(400).send(err);

    }
});

// we will handle get req of individual

router.get("/economies/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const getEconomy = await EconomiesRanking.findById(_id);
        res.send(getEconomy);

    }catch(err){
        res.status(400).send(err);
    }
});

// we will handle patch req of individual

router.patch("/economies/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const getEconomy = await EconomiesRanking.findByIdAndUpdate(_id,req.body, {
            new:true
        });
        res.send(getEconomy);

    }catch(err){
        res.status(500).send(err);

    }
});

// we will handle delete request of individual

router.delete("/economies/:id", async (req, res)=>{
    try{
        const getEconomy = await EconomiesRanking.findByIdAndDelete(req.params.id);
        res.send(getEconomy);

    }catch(err){
        res.status(500).send(err);

    }
});

module.exports = router;
