'use strict';
var connection = require('../../Connection');
var modifyEnquiryDetails = {
    showModifyEnquiryDetails : function(req, res) {
        console.log(JSON.stringify(req.body));
        var date ="";
        if(req.body.orderRecordDate.includes('T')){
           date = req.body.orderRecordDate.substring(0,req.body.orderRecordDate.indexOf('T'));
        }else{
            date = req.body.orderRecordDate;
        }
       let updateBy = 'kundan';
        let query = ' update tbl_inquiry_details set tbl_inquiry_productName= \''+ req.body.productName+'\',tbl_inquiry_productCost=\''+req.body.productCost+'\', '+
        ' tbl_inquiry_remarks=\''+req.body.remarks+'\',tbl_inquiry_no_of_product=\''+req.body.numberOfProduct+'\', '+
        ' tbl_inquiry_order_recd_date=\''+date+'\',tbl_inquiry_order_status=\''+req.body.orderStatus+'\', '+
        ' tbl_inquiry_total_product_cost=\''+req.body.totalProductCost+'\',inquiry_update_date= now(), '+
        ' tbl_inquiry_updatedBy=\''+updateBy+'\' where '+
        ' inquiry_id=\''+req.body.id+'\' ';
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
module.exports = modifyEnquiryDetails;