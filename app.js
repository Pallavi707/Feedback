const express             = require('express'),
      app                 = express(),
      mongoose            = require('mongoose'),
      body                = require('body-parser'),
      expressSession      = require('express-session'),
      expressSanitizer    = require("express-sanitizer"),
      FeedbackData        = require("./models/FeedbackData");

// EXPRESS CONFIG
app.use(expressSession({
    secret: "we are going to mt fuji for eating curry.",
    resave: false,
    saveUninitialized: false,
}));

app.use(express.json());

// middleware
// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error = req.flash("error");
//     res.locals.success = req.flash("success");
//     next();
// });

// APP CONFIG
const uri = "mongodb+srv://root:rooted@wfd-qmifj.mongodb.net/WFDtest?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.set("view engine", "ejs");
app.use(body.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(expressSanitizer());


// Index route 
app.get('/', (req, res) => {
    res.render('feedback');
})


// Feedback route 
app.post('/feedback', (req, res) => {

    var foodQuality = req.body.ratingGroup55025;
    var orderAccuracy = req.body.ratingGroup55026;
    var staffService = req.body.ratingGroup55027;
    var hygiene = req.body.ratingGroup55028;
    var foodOptions = req.body.ratingGroup55029;
    var restaurantEnvironment = req.body.ratingGroup550210;
    var suggestions = req.body.suggestions;

    var newFeedbackData = {foodQuality: foodQuality, orderAccuracy: orderAccuracy, staffService: staffService, hygiene: hygiene, foodOptions: foodOptions, restaurantEnvironment: restaurantEnvironment, suggestions: suggestions};
    
    FeedbackData.create(newFeedbackData, function(err, newFeedbackData){
        if(err)
        {
            console.log(err);
            req.flash("error",err.message);
        }
        else
        {
            console.log(newFeedbackData);
        }    
    });

    res.send('afasfas');
})

// // Health route 
// app.post('/healthData', (req, res) => {

//     var name = req.body.name;
//     var healthIssue = req.body.healthIssue;
//     var beatRate = req.body.beatRate;
//     var bodyTemp = req.body.bodyTemp;
//     var serviceAvail = req.body.serviceAvail;

//     var newHealthData = {name : name, healthIssue:healthIssue, beatRate : beatRate, bodyTemp: bodyTemp, serviceAvail: serviceAvail};
    
//     HealthData.create(newHealthData, function(err, newHealthData){
//         if(err)
//         {
//             console.log(err);
//             req.flash("error",err.message);
//         }
//         else
//         {
//             console.log(newHealthData);
//         }    
//     });
// });


app.listen('5000', () => {
    console.log('Feedback server started.');
})