const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const userschema = new Schema({
    customerID: {
        type: String,
        require: true,
        unique: true,
    },
    customerName: String,
    email: String,
    MobileNo: String,
    city: String,
});

const UserModel = db.model("Customers", userschema);
module.exports = UserModel;