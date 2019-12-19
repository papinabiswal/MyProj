const express = require('express');
const router = express.Router();
const authenticateUser = require('./Controller/authenticateUser');
const adminUserDetails = require('./Controller/adminUserDetails');
const enquiryDetails = require('./Controller/enquiryDetails');
const productList = require('./Controller/productList');
const insertEnquiry = require('./Controller/insertEnquiry');
const getEnquiryList = require('./Controller/getEnquiryList');
const getApprovedList = require('./Controller/getApprovedList');
const updateEnquiryDetails = require('./Controller/updateEnquiryDetails');
const modifyEnquiryDetails = require('./Controller/modifyEnquiryDetails');
const rejectEnquiryDetails = require('./Controller/rejectEnquiryDetails');
var connection = require('../Connection');

/* GET api listing. */
router.route('/authenticateuser').post(
    authenticateUser.authenticate
  );

router.route('/getAdminUserDetails').get(
    adminUserDetails.getAdminUserDetails
);

router.route('/getEnquiryId').get(
    enquiryDetails.getEnquiryrDetails
);

router.route('/getProductList').get(
    productList.getProductList
);

router.route('/insertInqyiryDetails').post(
    insertEnquiry.insertEnquiryDetails
);

router.route('/getEnquiryList').get(
    getEnquiryList.showEnquiryList
);

router.route('/getApprovedList').get(
    getApprovedList.showApprovedList
);

router.route('/updateEnquiryDetails').post(
    updateEnquiryDetails.showUpdateEnquiryDetails
);

router.route('/rejectInqyiryDetails').post(
    rejectEnquiryDetails.showRejectEnquiryDetails
);

router.route('/modifyInqyiryDetails').post(
    modifyEnquiryDetails.showModifyEnquiryDetails
);

module.exports = router;
