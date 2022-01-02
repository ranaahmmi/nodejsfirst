
const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const {v4:uuidv4} = require('uuid');
const router= require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// load static assests 
app.use("/static",express.static(path.join(__dirname, 'public')));
app.use("/assets",express.static(path.join(__dirname, 'public/assets')));

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
}));

app.use('/route',router);


// home route
app.get('/',(req,res)=>{
return res.render('base',{title:'Login System'});
})


app.listen(PORT,()=>{
console.log(`Server started at port: http://localhost:${PORT}`);
})