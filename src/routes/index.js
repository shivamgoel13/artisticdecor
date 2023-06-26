const express = require("express");
const path = require("path")

const router = express.Router();

router.get('/', (req,res) =>{
    res.render("homepage")
})
router.get('/gallery', (req,res) =>{
    res.render("gallery")
})
router.get('/walls', (req,res) =>{
    const products = [
        "KERRADECO STONE LINE GREY STONE",
        "KERRADECO MONSTERA",
        "KERRADECO ANTHARACITE STONE",
        "KERRADECO MARBLE BOTTICINO STONE",
        "KERRADECO LOFT CONCRETE STONE",
        "KERRADECO WOOD CARBON",
        "KERRADECO CONCRETE",
        "KERRADECO WOOD VINTAGE",
        "KERRADECO SNOWY WOOD",
        "KERRADECO NORD WOOD GOLD",
        "KERRADECO SCANDINAVIAN WOOD",
        "KERRADECO ASH WOOD",
        "KERRADECO AFRICAN WOOD",
        "KERRADECO TWEED",
        "KERRADECO TEXTILE RETRO GREY",
        "KERRADECO TEXTILE BLUE TARTAN",
        "KERRADECO STONE LINE TERRAZZO",
        "KERRADECO STONE LINE STONE MISTY",
        "KERRADECO STONE LINE STONE IVORY",
        "KERRADECO STONE LINE LOFT CONCRETE",
        "KERRADECO STONE LINE GREY STONE",
        "KERRADECO STONE LINE DESERT STONE",
        "KERRADECO GRAPHICS CONCRETE ART",
        "KERRADECO GEOMETRIC HOUSES",
        "KERRADECO GEOMETRIC LIGHT",
        "KERRADECO WOOD BRANDY",
        "KERRADECO GEOMETRIC GREEN",
        "KERRADECO STONE LINE STONE MOON",
        "KERRADECO TEXTILE SCOTCH",
        "KERRADECO STONE LINE LOFT RUSTY"
      ];
      
    res.render("walls", {products:products})
})


module.exports = router;