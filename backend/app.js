const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');
const scrapper = require('./scrapper');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const { randomInt } = require('crypto');
app.use("/public", express.static(__dirname + "/public"));
const dir = __dirname;
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.post('/scrape',async (req,res)=>
{
    const username = req.body.username;
    const password = req.body.password
    let result = await scrapper.start(username,password);
    result = result.reverse(); 
    console.log(result);
    res.send(result);

  

    // setTimeout(() => {
    //     const likes = [...Array(10).keys()].map(x => randomInt(50,200));
    //     const comments = [...Array(10).keys()].map(x => randomInt(0,20));
    //     res.send({likes,comments});
    // }, 500);
    
    
   
});

app.listen(3001);



   