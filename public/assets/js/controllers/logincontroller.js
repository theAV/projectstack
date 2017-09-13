;
(function() {
    'use strict';
    angular.module('ProjectStack').controller('CtrlLogin', CtrlLogin);

    CtrlLogin.$inject = ['$scope', '$http', '$q', '$state'];
    function CtrlLogin($scope, $http, $q, $state){
    	var vm = this;

    	vm.pagetitle = $state.current.data.pageTitle;
    }
})();