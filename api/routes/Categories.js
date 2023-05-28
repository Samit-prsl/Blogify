const express = require('express');
const router = express.Router();
const Categories = require('../models/categories')

router.post('/', async (req,res)=>{
    const newCat = new Categories(req.body)
    try {
        const SavedCat = await newCat.save();
        res.status(200).json(SavedCat);
    } catch (error) {
        res.status(500).json(error)   
    }
})

router.get('/', async (req,res)=>{
    try {
       const Cats = await Categories.find();
       res.status(200).json(Cats) 
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router