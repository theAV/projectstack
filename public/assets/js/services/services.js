;
(function() {
    'use strict';

    angular.module('ProjectStack').service('Services', Services);

    Services.$inject = ['$rootScope'];

    function Services($rootScope) {
        var vm = this;
        vm.isEmptyObj = isEmptyObj;
        vm.alertServices = {};
        $rootScope.alerts = [];

        function isEmptyObj(obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        vm.alertServices.add = function(type, msg) {
            $rootScope.alerts.push({ 'type': type, 'msg': msg });
        };
    }

})();