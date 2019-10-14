const comicsPageOR = require('./ObjectRepository/comicsPageOR');
const {basePage} = require('./page');
class ComicsPage  {
    get loadMoreButton() {
      return  $(comicsPageOR.loadMoreButton)
    }

    get listOfComics() {
       return  $$(comicsPageOR.listOfComics)
    }

    open(path) {
        basePage.open(path);
    }

    clickLoadMoreButton() {
        browser.waitUntil(()=> {
            return  this.loadMoreButton.isDisplayed();
        },30000,'Failed to find button');
        this.loadMoreButton.scrollIntoView()
        this.loadMoreButton.click();
        browser.pause(5000);
    }
}

module.exports.comicsPage = new ComicsPage();