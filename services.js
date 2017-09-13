;
(function() {
    'use strict';
    var methods = {};
    methods.isEmpty = function(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };


    module.exports = methods;

})();