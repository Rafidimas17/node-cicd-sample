const express=require('express')
const router=express.Router()

router.get('/home1',(req,res)=>{
    res.send("Halo ini home")
})

module.exports=router
