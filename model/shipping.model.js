const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const shippingschema = new Schema({
    shippingID: {
        type: String,
        require: true,
        unique: true,
    },
    Address: String,
    City: String,
    Pincode: String,
    PurchaseOrderID: String,
    CustomerID: String,
});

const ShippingModel = db.model("Shipping", shippingschema);
module.exports = ShippingModel;
