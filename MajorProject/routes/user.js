const express = require("express"); 
const router = express.Router({});
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const { route } = require("./listing");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");


//signup
router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

router. post ("/signup", wrapAsync(async(req, res) =>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email,username});
        const registeredUser = await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            };
        req.flash("success","welcome to Wanderlust")
        res.redirect("/listings");
    });
    }catch(e){
        req.flash("error",e.message)
        res.redirect("/signup");
    }
    
}));

//login
router.get("/login",(req,res)=>{
    res.render("users/login.ejs")
});

router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", {
         failureRedirect: '/login',failureFlash:true
    }),
    async(req,res)=>{
     req.flash("success","Welcome back to Wanderlust");
     let redirectUrl = res.locals.redirectUrl || "/listings"
     res.redirect(redirectUrl);
});

//logout
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        };
        req.flash("success","You are logged out!");
        res.redirect("/listings");
    });
});


module.exports = router;
