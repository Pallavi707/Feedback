var mongoose = require("mongoose");

var FeedbackDataSchema = new mongoose.Schema({
    foodQuality:               Number,
    orderAccuracy:           Number,
    staffService:            Number,
    hygiene:            Number,
    foodOptions:               Number,
    restaurantEnvironment: Number,
    suggestions: String
});

module.exports = mongoose.model("FeedbackData", FeedbackDataSchema);
