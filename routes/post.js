const router = require('express').Router();
const verify = require('../routes/verifytoken');

router.get('/',verify,(req,res)=>{
    res.json({posts:{
        title:'my fist post',
        description:'should not access'
    }})
})

module.exports= router;