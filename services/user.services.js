const PurchaseModel = require("../model/purchaseOrder.model");
const ShippingModel = require("../model/shipping.model");
const UserModel = require("../model/user.model");

async function Customer(params) {
    let data = params;
    try {
        let IdExist;
        let customer_Id;
        do {
            const min = 1000000;
            const max = 9999999;
            const randomDigits = Math.floor(Math.random() * (max - min + 1)) + min;
            customer_Id = `CID${randomDigits}`;
            console.log(customer_Id);
            data["customerID"] = customer_Id;
            console.log(data);
            IdExist = await UserModel.find({
                'customerID'
                    : customer_Id
            });
            if (IdExist.length == 0) {
                const user = new UserModel(params);
                const createduser = await user.save();
                return createduser;
            }
        } while (IdExist.length > 0);
    }
    catch (err) {
        console.log(err);
        return "User Not Added";
    }
}



async function getCustomerPurchase(params) {
    try {
        const allCustomers = await UserModel.find();
        result = [];

        // Iterate through each customer and fetch their purchase orders
        for (const customer of allCustomers) {
            const local = new Map();
            local.customerName = customer.customerName
            local.email = customer.email
            local.MobileNo = customer.MobileNo
            local.city = customer.city
            local.customerId = customer.customerID;
            const customerId = customer.customerID;
            console.log(customerId);
            const allPurchase = await PurchaseModel.find({ "CustomerID": customerId });
            local["purchaseOrders"] = allPurchase;
            result.push(local);
        }
        return result;
    } catch (err) {
        console.error(err);
        return "Error occurred while fetching data";
    }
}


async function getCustomerPurchaseShipping(params) {
    try {
        const allCustomers = await UserModel.find();
        result = [];

        // Iterate through each customer and fetch their purchase orders
        for (const customer of allCustomers) {
            const local = new Map();


            local.customerName = customer.customerName
            local.email = customer.email
            local.MobileNo = customer.MobileNo
            local.city = customer.city
            local.customerId = customer.customerID;
            const customerId = customer.customerID;
            console.log(customerId);
            const allPurchase = await PurchaseModel.find({ "CustomerID": customerId });
            local["purchaseOrders"] = allPurchase;

            // Fetch purchase orders for the current customer
            const allShipping = await ShippingModel.find({ "CustomerID": customerId });

            local["shipmentDetail"] = allShipping;


            result.push(local);
        }
        return result;
    } catch (err) {
        console.error(err);
        return "Error occurred while fetching data";
    }
}




module.exports = { Customer, getCustomerPurchase, getCustomerPurchaseShipping };