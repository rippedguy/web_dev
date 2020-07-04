//Setup
let express = require("express");
const bodyParser = require("body-parser");
let app = express();
let mongoose = require("mongoose");
let Campgrounds = require("./modules/campgrounds")
let seedDB = require("./seeds")
app.set("view engine" , "ejs");
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/yelp_camp",{useNewUrlParser:true},);

seedDB();

//Routes
app.get("/landingpage",function(req,res){
    res.render("landingPage");
});

app.get("/campgrounds", function(req,res){
    Campgrounds.find({},function(err,allCampgrounds){
        if (err) {
            alert("Something Went Wrong");
        }
        else {
            res.render("campgrounds",{campgrounds:allCampgrounds});
        }
    });
});

app.post("/campgrounds" , function(req,res){
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let input_data = {name:name , image:image , description:desc};
    Campgrounds.create(input_data,function(err,camp){
        if (err) {
            alert("Something Went wrong");
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new",function(req,res){
    res.render("new")
});


app.get("/campgrounds/:id",function(req,res){
    Campgrounds.findById(req.params.id,function(err,matchedCamp){
        if (err) {
            alert("Something Went Wrong!")
        }
        else {
            res.render("show",{campground:matchedCamp});
        }
    });
});



//Server
app.listen(3000,function(){
    console.log("Server Started!");
});