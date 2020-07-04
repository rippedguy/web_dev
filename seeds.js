
let Campgrounds = require("./modules/campgrounds");
let Comments = require("./modules/comments");

let data = [
    {
        name:"Forest Fear",
        image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg",
        description:"Blah Blah blah blah Blah Blah blah blah Blah Blah blah blah"
    },
    
    {
        name:"Tesca Mountain",
        image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg",
        description:"Blah Blah blah blah Blah Blah blah blah Blah Blah blah blah"
    },
    
    {
        name:"Forest Fear IV",
        image:"https://images-na.ssl-images-amazon.com/images/I/71GveW4leGL._SX355_.jpg",
        description:"Blah Blah blah blah Blah Blah blah blah Blah Blah blah blah"
    }
];

function seedDB () {
    Campgrounds.remove({},function(err){
        if (err) {
            console.log(err);
        }    
        else {
            console.log("Removed All Camping Sites!");
            data.forEach(function(seed){
                Campgrounds.create(seed,function(err){
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("A Campground Has Been Successfully Added!");
                        Comments.create ({
                            title:"Really Great  Place, Definately worth it.",
                            author:"Chris"
                        },function(err,comment){
                            if (err) {
                                console.log(err);
                            }
                            else {
                                Campgrounds.comments.push(comment);
                                Campgrounds.save();
                                console.log("comment added");
                            }
                        });
                    }
                    
                });
            });
        }
    });
}

module.exports = seedDB;