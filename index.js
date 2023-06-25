const express = require("express");
const app = express();
require('dotenv').config()
const port =  process.env.PORT;
const routesPath = require('./src/routes')

app.set('view engine', 'ejs');
app.use(routesPath)
app.set('views', `${__dirname}/src/views`);
app.use('/assets', express.static(`${__dirname}/public/assets`));

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})