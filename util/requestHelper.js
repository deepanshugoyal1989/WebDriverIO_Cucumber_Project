let options ={};

module.exports = {
    set: function(opts) {
        options=opts;
    },
    get: function() {
      return options;
    }
};
