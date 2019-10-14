const {Given} = require('cucumber');
const merge = require('deepmerge');
const requestHelper = require('./../../util/requestHelper');
const rp = require('./../../util/common');
let defaultOptions = {
    method: 'GET',
    uri:     `${rp.getBaseUrl()}/v1/public/characters`,
    headers : {
      accept: '*/*'
    },
    qs: {
        ts: rp.getCurrentTimeStamp(),
        apikey: rp.getPublicKey(),
        hash: rp.getMD5Hash(),
        limit: rp.getlimit()
    },
    json: true,
    resolveWithFullResponse: true
};

Given(/^I create a valid request to get details of marvel characters$/, function () {
    let options = merge(defaultOptions, {
        qs: {
            offset: rp.getOffset()
        }
    });
    requestHelper.set(options);

});
Given(/^I create an invalid request with incorrect value (.*) of query parameter (.*)$/, function (value, qsField) {

    let options = merge(defaultOptions, {
        qs: {
            [qsField]: value
        }
    });
    requestHelper.set(options);

});
Given(/^I create an invalid request with missing query parameter$/, function () {

    let options = merge(defaultOptions, {});
    delete options['qs'];
    requestHelper.set(options);

});
Given(/^I create an request to get details of marvel character with id (.*)$/, function (id) {

    let options = merge(defaultOptions, {
        uri: `${rp.getBaseUrl()}/v1/public/characters/${id}`,
    });
    requestHelper.set(options);
    // console.log('Request : ',JSON.stringify(options));

});