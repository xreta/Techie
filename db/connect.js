const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectDB = (uri) => {
    console.log("connecting with the db");
    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
};

module.exports = connectDB;