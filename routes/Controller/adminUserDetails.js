'use strict';
var connection = require('../../Connection');
var adminUserDetails = {
    getAdminUserDetails : function(req, res) {
    var query ='SELECT user_name FROM tbl_adim_user_details';
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
module.exports = adminUserDetails;