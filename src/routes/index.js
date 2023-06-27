const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

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
router.post('/contactForm', (req, res) =>{
    const { name, email, message, number } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'contactartisticdecor@gmail.com',
          pass: 'gitiamikcgkedacw',
        },
      });
      const mailOptions = {
        from: email,
        to: 'contactartisticdecor@gmail.com',
        subject: 'New Contact Form Submission on artistic Decor',
        text: `
          Name: ${name}
          Email: ${email}
          Number: ${number}
          Message: ${message}
        `,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.send('Error');
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Success');
        }
      });
    });


module.exports = router;