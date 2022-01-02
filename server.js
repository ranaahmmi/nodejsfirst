
const express = require('express');
const path = require('path');
const session=require('express-session');
const cookie=require('cookie-parser');
const app = express();

const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');

// load static assests
app.use("/static",express.static(path.join(__dirname, 'public')));

// home route
app.get('/',(req,res)=>{
return res.render('base',{title:'Login System'});
})


app.listen(PORT,()=>{
console.log(`Server started at port: http://localhost:${PORT}`);
})