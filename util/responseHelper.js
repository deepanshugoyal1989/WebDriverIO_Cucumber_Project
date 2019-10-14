let response;

module.exports = {
    set: function(res) {
        response=res;
    },
    get: function() {
        return response;
    }
};