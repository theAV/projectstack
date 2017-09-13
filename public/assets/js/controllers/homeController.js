;
(function() {
    'use strict';
    angular.module('ProjectStack').controller('CtrlHome', CtrlHome);

    CtrlHome.$inject = ['$scope', '$http', '$q', '$state', '$timeout'];

    function CtrlHome($scope, $http, $q, $state, $timeout) {
        var vm = this;
        vm.fullpageOpts = {
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'red'],
            navigation: true,
            navigationPosition: 'right',
            scrollingSpeed: 1000,
            afterLoad: function() {
                function setAnim(callback) {
                    $('.layer').addClass('layer-zoomout');
                    callback();
                };

                function initParralax() {
                    var scene = document.getElementById('scene');
                    var parallaxInstance = new Parallax(scene, {
                        relativeInput: true,
                        hoverOnly: true,
                        pointerEvents: true
                      //   onReady: function(){                        	
                    		// // $('.layer').removeClass('layer');
                      //   }
                    });
                    parallaxInstance.calibrate(true , false)

                };

                setAnim(initParralax);
                $timeout(function() {}, 1);
            }
        }

    }
})();