const { param } = require("../app");
const ShippingModel = require("../model/shipping.model");
const UserModel = require("../model/user.model");


async function addShipping(params) {
    let data = params;

    try {
        let IdExist;
        let shipping_Id;
        do {
            const min = 1000000;
            const max = 9999999;
            const randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;
            shipping_Id = `SID${randomDigits}`;
            console.log(shipping_Id);
            data["shippingID"] = shipping_Id;
            console.log(data);
            IdExist = await ShippingModel.find({
                'shippingID'
                    : shipping_Id
            });
            if (IdExist.length == 0) {
                const user = new ShippingModel(params);
                const createduser = await user.save();
                return createduser;
            }
        } while (IdExist.length > 0);
    }
    catch (err) {
        console.log(err);
        return "Shipping Not Added";
    }
}




async function getShipping(city) {
    console.log(city + "city");

    try {
        shippingExist = await ShippingModel.find({
            'City'
                : city
        });
        result = [];
        if (shippingExist.length != 0) {

            for (i = 0; i < shippingExist.length; i++) {

                const CID = shippingExist[i]["CustomerID"]
                user = await UserModel.findOne({
                    'customerID'
                        : CID
                });
                console.log(user);
                // shippingExist[i]["CustomerName"] = user['customerName'];
                // shippingExist[i]["CustomerEmail"] = user['email'];

                const local = new Map();
                local.Address = shippingExist[i]["Address"];
                local.City = shippingExist[i]["City"];
                local.Pincode = shippingExist[i]["Pincode"];
                local.PurchaseOrderID = shippingExist[i]["PurchaseOrderID"];
                local.Address = shippingExist[i]["Address"];
                local.CustomerID = shippingExist[i]["CustomerID"];
                if (user) {
                    local["CustomerName"] = user['customerName'];
                    local["CustomerEmail"] = user['email' ?? ""];
                    local["MobileNo"] = user['MobileNo' ?? ""];
                }

                result.push(local);
            }


            return result;
        }
        else {
            return "Shipping Not Found";
        }

    }
    catch (err) {
        console.log(err);
        return "Shipping Not found";
    }
}


module.exports = { addShipping, getShipping };