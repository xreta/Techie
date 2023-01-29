const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json({ myData });
};

module.exports = {getAllProducts};