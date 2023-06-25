const express = require("express");
const path = require("path")

const router = express.Router();

router.get('/', (req,res) =>{
    res.render("homepage")
})
router.get('/gallery', (req,res) =>{
    res.render("gallery")
})


module.exports = router;