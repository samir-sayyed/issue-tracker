const express = require('express');
const port = 5000;
const app = express();
const expressLayouts = require('express-ejs-layouts'); //for accesing all ejs files in single layout
const db = require('./config/mongoose');

app.use(express.static('./assets'));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes')); //when url req. comes it will redirect to routes

app.set("view engine", "ejs");
app.set("views",'views');





app.listen(port, (err)=>{

    if(err){
        console.log("Error in running the server", err);
    }
    console.log("Express server up and running on port:  ", port );
});