/**
 * Created by wudi on 2016/11/10.
 */
var request = require('request');

request({
    method:'POST',
    url: 'http://127.0.0.1:3000/jwt/auth',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIiLCJjdXN0b21lcmlkIjoyLCJpYXQiOjE0NzA3OTQ3MjMsImV4cCI6MTUwMTg5ODcyM30.w8HdzU4c52seOTzHYaoEiLsFQ7FIur3LCIGQ0zfQXSM'
    },
    json: {
        supplieremployeeid: '63',
        remark: '',
        dishlist: '[{\"supplierdishid\":\"14829185\",\"dishattr\":\"[{\\"attritemid\\":\\"1256\\"},{\\"attritemid\\":\\"1257\\"},{\\"attritemid\\":\\"1251\\"},{\\"attritemid\\":\\"1253\\"}]\",\"dishskuno\":\"14829185_1251\",\"quantity\":\"2\"},{\"supplierdishid\":\"14829185\",\"dishattr\":\"[{\\"attritemid\\":\\"1256\\"},{\\"attritemid\\":\\"1257\\"},{\\"attritemid\\":\\"1250\\"},{\\"attritemid\\":\\"1254\\"}]\",\"dishskuno\":\"14829185_1250\",\"quantity\":\"1\"},{\"supplierdishid\":\"14828540\",\"quantity\":\"1\"}]',
        deskid: '2139',
        servicefee: '0.30',
        dishtotalamount: '30.01',
        supplierid: '269288',
        totalamount: '30.21'
    }
}, function (error, response, body) {
    console.log(body);
});
