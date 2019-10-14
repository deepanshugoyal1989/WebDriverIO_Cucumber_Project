class Page {
    open(path) {
        browser.url(path);
    }
}

module.exports.basePage = new Page();