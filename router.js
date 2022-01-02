const express = require('express');
var router = express.Router();


const conditional = {
    email: "ahmad@gmail.com",
    password: "123456"
}


// route to handle login 
router.post("/login",(req,res)=>{
    if (req.body.email == conditional.email && req.body.password == conditional.password) {
        req.session.user  = req.body.email;
        res.redirect('/route/dashboard');
        // res.send("Login Successfull.....!");
    }
    else {
        res.send("Login Failed Invalid Email or Password");
    }
});


// route for Dashboard
router.get("/dashboard",(req,res)=>{
if (req.session.user) {
    res.render("dashboard",{user:req.session.user})
}else{
    res.send("Please Login First");
}
});


//route for logout
router.get("/logout",(req,res)=>{
req.session.destroy((err)=>{
    if(err){
        console.log(err);
        res.send("Error in logout");
    }
    else{
        res.render("base",{title:"Express",logout:"Logout Successfull...!"});
    }

});

});


module.exports = router;