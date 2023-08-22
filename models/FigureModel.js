var mongoose = require('mongoose');
var FigureSchema = mongoose.Schema({
    name: String,
    brand: String,
    quantity: Number,
    price: Number,
    image: String,
    description: String,
    date : Date
});
const FigureModel = mongoose.model("Figure", FigureSchema, "Figure");
module.exports = FigureModel;