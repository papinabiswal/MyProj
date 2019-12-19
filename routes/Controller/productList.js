'use strict';
var connection = require('../../Connection');
var productList = {
    getProductList : function(req, res) {
        var query ='SELECT * FROM tbl_product_description';
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
module.exports = productList;