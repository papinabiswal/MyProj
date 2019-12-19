'use strict';
var connection = require('../../Connection');
var getApprovedList = {
    showApprovedList : function(req, res) {
        var query ='SELECT inquiry_id,inquiry_createdBy,inquiry_created_date,inquiry_person_email,tbl_inquiry_productName,tbl_inquiry_productCost,tbl_inquiry_remarks,tbl_inquiry_no_of_product,tbl_inquiry_order_recd_date,tbl_inquiry_order_status,tbl_inquiry_is_inquiry,tbl_inquiry_total_product_cost FROM tbl_inquiry_details where tbl_inquiry_is_approved=1';
        connection.query(query, function(error,rows,fields)
        {
            if(!!error)
            {
                console.log(" error" + error);
                res.send(error);
            }
            else
            {
                res.send(rows);
            }
        });
    }
}
module.exports = getApprovedList;