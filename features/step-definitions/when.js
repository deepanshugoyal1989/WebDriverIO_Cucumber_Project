const {When} = require('cucumber');
const request = require('request');
const requestHelper = require('./../../util/requestHelper');
const responseHelper = require('./../../util/responseHelper');

When(/^I send a request$/, function () {
    return new Promise((resolve, reject) => {
        request(requestHelper.get(), (err,res) => {
            if(err) {
                console.log('\nError Occurred while getting response', err.toString());
                reject(err);
            }
            else{
                responseHelper.set(res);
                resolve(res);
            }
        });
    });
});