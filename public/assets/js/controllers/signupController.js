;
(function() {
    'use strict';
    angular.module('ProjectStack').controller('CtrlSignup', CtrlSignup);

    CtrlSignup.$inject = ['$scope', '$http', '$q', 'Services', '$rootScope', '$timeout', '$state'];


    function CtrlSignup($scope, $http, $q, Services, $rootScope, $timeout, $state) {
        var vm = this;
        vm.userObj = {};
        vm.submit = submit;
        vm.services = Services;

        const deferred = $q.defer();

        function submit() {
            if(vm.services.isEmptyObj(vm.userObj)){
                vm.services.alertServices.add("danger", "Form should be filled.");
            }else{
                $http({
                    method: 'POST',
                    url: '/api/v1/signup',
                    data: vm.userObj
                }).then(function successCallback(response) {
                    vm.services.alertServices.add("success", "Sign up Success :). Redirecting to Log in.");
                    vm.userObj = {};
                    $timeout(function(){
                        $state.go('login');
                    }, 3100);
                }, function errorCallback(response) {
                    console.log(response);
                })
                return deferred.promise;
            }
        }
    }

})();