const UserService = require("../services/user.services");

exports.addCustomer = async (req, res, next) => {

    try {
        const result = await UserService.Customer(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Customer added Successfully", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}


exports.GetCustomerPurchase = async (req, res, next) => {

    try {
        const result = await UserService.getCustomerPurchase(req.body);
        return res.status(200).send({ "status": true, "Message": "Customer List With Shipping", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}


exports.getCustomerPurchaseShipping = async (req, res, next) => {

    try {
        const result = await UserService.getCustomerPurchaseShipping(req.body);
        return res.status(200).send({ "status": true, "Message": "Customer List With Shipping and Purchase order", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}




