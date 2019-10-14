const {Then} = require('cucumber');
const {expect}  = require('chai');
const {comicsPage} = require('./../../pages/comicsPage');
const responseHelper = require('./../../util/responseHelper');

Then(/^I should get response with status code (.*)$/, function (statusCode) {
    expect(responseHelper.get().statusCode.toString()).to.equal(statusCode);
});

Then(/^I should get all marvel characters details with following parameters$/, function (dataTable ) {

   let fields = dataTable.rows();
    responseHelper.get().body.data.results.forEach((result) => {
        fields.forEach((field) => {
            expect(result).to.have.property(field[0])
        });
    });
});

Then(/^I should get message as "([^"]*)"$/, function (message) {

    expect(responseHelper.get().body.code).to.equal(message);

});
Then(/^I should validate number of comics on a web page as per api response$/, function () {

    let totalNumberOfComics = responseHelper.get().body.data.results[0].comics.available;
    comicsPage.open(responseHelper.get().body.data.results[0].urls[0].url);
    comicsPage.clickLoadMoreButton();
    expect(comicsPage.listOfComics.length).to.equal(totalNumberOfComics);
});