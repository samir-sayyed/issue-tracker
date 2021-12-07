const express = require('express');
const port = 8000;
const app = express();


app.get('/', (req, res) =>{
    res.send("Hellow world!");
});

app.listen(port, ()=>{
    console.log("Express server up and running on port:  ", port );
})