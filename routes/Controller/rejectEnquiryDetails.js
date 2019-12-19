var connection = require('../../Connection');
'use strict';
var rejectEnquiryDetails = {
    showRejectEnquiryDetails : function(req, res) {
        console.log(JSON.stringify(req.body));
            
                let query = 'update tbl_inquiry_details set tbl_inquiry_is_inquiry=0,tbl_inquiry_is_inquiry_rejected=1 where inquiry_id=\''+req.body.id+'\'';
                console.log(query);
                connection.query(query,
                function(err,result){
                    if(err) {
                        console.log('Update error:' + err);
                        res.send({message: err});
                        return;
                    }
                    else {
                        console.log('Update success');
                        res.send({success: true});
                    }
                });
    }
}
module.exports = rejectEnquiryDetails;