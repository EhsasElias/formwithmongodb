const express = require('express');
const app = express();
const St = require('./models/students');

const mongoose = require("mongoose");

await mongoose.connect("mongodb://localhost:27017/coding")
.then( (result)=> {
    console.log(result);
    
})
.catch((error) =>{
    console.log(error)
})


app.set('view engine','ejs');
app.use(express.urlencoded());

app.get('/home' ,auth,(req,res) =>{
    res.render('home'); 
});
app.post('/add_user' ,auth,(req,res) =>{
// console.log(req.body);
res.render('userinfo',{info:req.body});
const s = new St({
    name:req.body.name,
    age:eeq.body.age,
    city:req.body.city
});
s.save();
});
function auth(req,res,next){
    next();
}
app.listen('3000');