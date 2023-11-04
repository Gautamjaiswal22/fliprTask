const mongoose = require("mongoose");
const connection = mongoose.createConnection('mongodb+srv://jaiswalgautam252:testpwd@cluster0.fldfz2m.mongodb.net/?retryWrites=true&w=majority');
// const url1 = "mongodb://localhost:27017/customer";

// connection = mongoose.connection;
connection.on('open', () => {
    console.log("Database Connection Established");
}).on('error', (error) => { 
    console.log("error" + error);
});

module.exports = connection;