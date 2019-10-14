const keys = require('./constant/keys');
const requestParameters = require('./constant/requestParameters');
const responseHelper = require('./responseHelper');
const crypto = require('crypto');
const ts = Date.now();
module.exports = {
    getCurrentTimeStamp : function () {
    return ts;
    },

    getPrivateKey: function () {
        return keys.PRIVATE_KEY
    },

    getPublicKey : function () {
        return keys.PUBLIC_KEY
    },

    getMD5Hash : function () {
        let data = ts+keys.PRIVATE_KEY+keys.PUBLIC_KEY;
        return crypto.createHash('md5').update(data).digest("hex");
    },

    getlimit: function() {
     return requestParameters.LIMIT;
    },

    getBaseUrl: function() {
        return requestParameters.BASE_URL;
    },

    getOffset : function () {

        let totalNumberOfResults = typeof (responseHelper.get()) !== 'undefined'?responseHelper.get().data.count:0;
        let offset = typeof (responseHelper.get()) !== 'undefined'?responseHelper.get().data.offset:0;
          if(!(totalNumberOfResults<requestParameters.LIMIT)) {
              return (offset + totalNumberOfResults) ;
          }
    }
};