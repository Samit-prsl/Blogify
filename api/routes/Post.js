const express = require('express');
const router = express.Router();
const Post = require('../models/post')


//Create New Post
router.post('/',async (req,res)=>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
})
//Delete
router.put('/:id',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.Username === req.body.Username)
        {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set : req.body
                },{new:true})
                res.status(200).json(updatedPost)
            } catch (error) {
                res.status(401).json(error)
            }
        }
        else
        res.status(401).json("You can update your own posts");
    } catch (error) {
        res.status(500).json(error)
    }
})

//Delete
router.delete('/:id',async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.Username === req.body.Username)
        {
            try {
                await Post.findByIdAndDelete(req.params.id)
                res.status(200).json("Its deleted")
            } catch (error) {
                res.status(401).json(error)
            }
        }
        else
        res.status(401).json("You can delete your own posts");
    } catch (error) {
        res.status(500).json(error)
    }
})

//get
router.get('/:id',async (req,res)=>{
    try {
        const GetInfo = await Post.findById(req.params.id)
        //res.status(200).json(GetInfo)
        res.status(200).json(GetInfo);
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all posts

router.get('/',async (req,res)=>{
    const Username = req.query.user
    const CatName = req.query.Cat
    try {
        let posts;
        if(Username)
        {
            posts = await Post.find({Username});
        }
        else if(CatName)
        {
            posts = await Post.find({Categories :{ $in :[CatName]}});
        }
        else
        posts = await Post.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router
