'use strict';
var connection = require('../../Connection');

var authenticateUser = {
    authenticate : function(req, res) {
        console.log('UserName'+JSON.stringify(req.body.username));
        console.log('UserName'+JSON.stringify(req.params));
         var username = req.param("username");
         var password = req.param("password");
         password = new Buffer(password, 'base64');
         var query ='SELECT * FROM tbl_adim_user_details where user_name=\''+username+'\' and user_full_name = \''+password+'\' ';
         console.log(query);
         connection.query(query, function(error,rows)
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
 };
 
 module.exports = authenticateUser;