const ShippingService = require("../services/shipping.service");

exports.addShipping = async (req, res, next) => {

    try {
        const result = await ShippingService.addShipping(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Executed", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

exports.getShipping = async (req, res, next) => {
    const city = req.params.city;
    console.log(city);

    try {
        const result = await ShippingService.getShipping(city);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Query Executed", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}