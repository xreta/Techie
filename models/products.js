const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    surname : {
        type : String,
        required : true,
    },
    dob : {
        type : String,
        default : Date.now(),
    },
    gender : {
        type : String,
        enum: {
             values : ["male" , "female", "other"],
             message : ` {VALUE} error`
        },
    },
});

module.exports = mongoose.model("Product", productSchema);