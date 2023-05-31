const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Post = require('../models/post')

//const salt = bcrypt.genSaltSync(10);

//Update
router.put('/:id',async (req,res)=>{
    if(req.body.UserId === req.params.id)
    {
         if(req.body.Password)
         {
             const salt = await bcrypt.genSalt(10);
             req.body.Password = await bcrypt.hash(req.body.Password,salt);
         }
        try { 
            const UpdatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set : req.body,
            },{new:true})
            res.status(200).json(UpdatedUser);
        } catch (error) {
            res.status(500).json(error)
        }
    }
     else
     res.status(401).json("You Can Only Update your Acc")
})

//Delete
router.delete('/:id',async (req,res)=>{
    if(req.body.UserId === req.params.id)
    {
        // try{
        // const user = await User.findbyId(req.params.id)
        
        try { 
          await Post.deleteMany({Username : User.Username})
          await User.findByIdAndDelete(req.params.id)
          res.status(200).json("User has been deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    // }catch(err)
    // {
    //     res.send(401).json("User not Found")
    // }
}
    else
    res.status(401).json("You Can Only delete your Acc")
})

//Get User
router.get('/:id',async (req,res)=>{
    try {
        const GetInfo = await User.findById(req.params.id)
        //res.status(200).json(GetInfo)
        const { Password , ...others} = GetInfo._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router
