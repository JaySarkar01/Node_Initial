const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');
// app.use(express.static(publicPath));
app.get("",(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})
app.get("/about",(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})
app.get("/profile",(_,resp)=>{
    const user = {
        name: 'Jay Sarkar',
        age: 20,
        city: 'Dineshpur',
        skills:['c++','c','pyhon','java','NodeJs']
    }
    resp.render('profile',{user});
})
app.get("*",(_,resp)=>{
    resp.sendFile(`${publicPath}/pageNotFound.html`);
})

app.listen(5000);