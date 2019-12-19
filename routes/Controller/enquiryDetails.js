'use strict';
var connection = require('../../Connection');
var enquiryDetails = {
    getEnquiryrDetails : function(req, res) {
        var query ='SELECT max(inquiry_id)+1 as latestInquiryId FROM tbl_inquiry_details';
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
module.exports = enquiryDetails;