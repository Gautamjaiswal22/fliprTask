const PurchaseService = require("../services/purchase.service");

exports.addPurchaseOrder = async (req, res, next) => {

    try {
        const result = await PurchaseService.PurchaseOrder(req.body);
        console.log(result);
        return res.status(200).send({ "status": true, "Message": "Purchase added Successfully", "data": result });
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}