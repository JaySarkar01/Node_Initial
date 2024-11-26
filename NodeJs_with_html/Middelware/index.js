const express = require('express');
const app = express();

const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please enter age")
    }
    else if(req.query.age<18){
        resp.send("you cant access this website");
    }
    else{
        resp.send("welcom back")
        next();
    }
};
app.use(reqFilter)
app.listen(2000);