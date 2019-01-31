const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get req'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'abc'
    })
})

module.exports = router