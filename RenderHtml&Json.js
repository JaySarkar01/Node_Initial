const express = require('express');
const app = express();

app.get("",(req,resp)=>{
    resp.send("<h3 style=color: #fa9aba>this is home page...<h3>");
})

app.get("/about",(req,resp)=>{
    resp.send(`
        <h1>This is about page<h1>
        <input type = "text" placeholder="User name "value =${req.query.name}/>
        <button>Click Me</button> 
        `);
})

app.get("/help",(req,resp)=>{
    resp.send([
        {
            name:'jay',
            email:'text@.com'
        },
        {
            name:'Dhruv',
            email:'dhruv@test.com'
        }
        ]);
})

app.listen(3400);
