const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path')
const cors = require('cors');
app.set('view engine',ejs);
app.use("/public", express.static(__dirname + "/public"));
app.use(cors());
const dir = __dirname;
app.post('/getlikes',(req,res)=>
{
    const username = req.params.username;
    const password = req.params.password
    res.sendFile(dir+"/client/getlikes.html");
   
})
app.get('/',(req,res)=>
{
    
    res.sendFile(dir+"/client/home.html");
})
app.listen(3000);



   