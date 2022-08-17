const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

// read all 
router.get('/', async(req, res)=> {
    // console.log('Get request')
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error '+ err)
    }
})

// read by id
router.get('/:id', async(req, res)=> {
    // console.log('Get request')
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send('Error '+ err)
    }
})

// create
router.post('/', async(req, res)=>{
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }

    catch(err){
        res.send('error' + err)
    }

})

// update
router.patch('/:id', async(req, res)=>{
    try{

        const alien = await Alien.findById(req.params.id)
        // changing the subscription
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)

    }catch(err){

        res.send('Error '+err)

    }
})

// delete
router.patch('/delete/:id', async(req, res)=>{
    try{

        const alien = await Alien.findById(req.params.id)
        //    deleting

        const a1 = await alien.remove()
        res.send("removed " + n)

    }catch(err){
        res.send('Error '+err)
    }
})
module.exports = router