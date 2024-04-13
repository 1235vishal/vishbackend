require('dotenv').config();//for .env pakage run porpose
const express = require('express');
const app = express();

const port = 4000;

app.get('/',(req,resp)=>{
    resp.send("Hello world");
})

app.get('/twitter',(req,resp)=>{
    resp.send('vishal.com');
})

app.get('/login',(req,resp)=>{
    resp.send('<h1>login on choi or code</h1>')
})

app.get('/youtube',(req,resp)=>{
    resp.send('<h1>chai or code</h1>')
})

app.listen(process.env.PORT, () =>{
    console.log(`Example app listening  on port  ${port}`)
}) 