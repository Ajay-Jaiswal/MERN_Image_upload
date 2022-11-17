const mongoose = require ("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId



const productSchema = new mongoose.Schema({
    name  : {
        type :  String,
        required: [true, "product name is required"],
        unique: true,
        trim : true
    },
    description : {
        type :  String,
        required: [true, "Product description are required"],
        trim : true
    },
    
    price: {
        type : Number, 
        default: 0,         //// Holds number of reviews of this book
    },
    bookcover: [String],
     
   

},{timestamps:true})

module.exports = mongoose.model("product",productSchema)