const router = require("express").Router();

const userController = require("../controller/user.controller");
const purchaseController = require("../controller/purchase.controller");
const shippingController = require("../controller/shipping.controller");

router.post('/addCustomer', userController.addCustomer);
router.post('/purchaseorder', purchaseController.addPurchaseOrder);
router.post('/addShipping', shippingController.addShipping);
router.get('/getShipping/:city', shippingController.getShipping);
router.get('/getCustomerPurchase', userController.GetCustomerPurchase);
router.get('/getCustomerPurchaseShipping', userController.getCustomerPurchaseShipping);




module.exports = router;
