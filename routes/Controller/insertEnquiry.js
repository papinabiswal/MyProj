'use strict';
var connection = require('../../Connection');
var insertEnquiry = {
    insertEnquiryDetails : function(req, res) {
        console.log(JSON.stringify(req.body));
        var date ="";
        if(req.body.orderRecordDate.includes('T')){
           date = req.body.orderRecordDate.substring(0,req.body.orderRecordDate.indexOf('T'));
        }else{
            date = req.body.orderRecordDate;
        }
      
          let query = 'INSERT INTO tbl_inquiry_details (inquiry_created_date,inquiry_createdBy,inquiry_person_email,tbl_inquiry_productName,tbl_inquiry_productCost,tbl_inquiry_remarks,tbl_inquiry_no_of_product,tbl_inquiry_order_recd_date,tbl_inquiry_order_status,tbl_inquiry_is_inquiry,tbl_inquiry_total_product_cost)'+
          'VALUES(now(),\''+req.body.createdBy+'\',\''+req.body.personDetails+'\',\''+req.body.productName+'\',\''+req.body.productCost+'\',\''+req.body.remarks+'\',\''+req.body.numberOfProduct+'\',\''+date+'\',\''+req.body.orderStatus+'\',1,\''+req.body.totalProductCost+'\')';
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
module.exports = insertEnquiry;