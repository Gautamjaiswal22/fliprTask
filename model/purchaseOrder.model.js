const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const purchaseSchema = new Schema({
    PurchaseOrderID: {
        type: String,
        require: true,
        unique: true,
    },
    ProductName: String,
    Quantity: String,
    Pricing: Number,
    MRP: Number,
    CustomerID: String,
});

const PurchaseModel = db.model("PurchaseOrder", purchaseSchema);
module.exports = PurchaseModel;
