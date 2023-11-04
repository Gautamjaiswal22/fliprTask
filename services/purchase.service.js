const { param } = require("../app");
const PurchaseModel = require("../model/purchaseOrder.model");

async function PurchaseOrder(params) {
    let data = params;
    const { MRP, Pricing } = params;
    if (MRP < Pricing) {
        return "Price should not greater than MRP"
    }
    try {
        let IdExist;
        let purchase_Id;
        do {
            const min = 1000000;
            const max = 9999999;
            const randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;
            purchase_Id = `PID${randomDigits}`;
            console.log(purchase_Id);
            data["PurchaseOrderID"] = purchase_Id;
            console.log(data);
            IdExist = await PurchaseModel.find({
                'PurchaseOrderID'
                    : purchase_Id
            });
            if (IdExist.length == 0) {
                const user = new PurchaseModel(params);
                const createduser = await user.save();
                return createduser;
            }
        } while (IdExist.length > 0);
    }
    catch (err) {
        console.log(err);
        return "Purchase Not Added";
    }
}

module.exports = { PurchaseOrder };