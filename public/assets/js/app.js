/**
 * ProjectStack Module
 *
 * Description
 * A app for project assignment system
 */
(function() {
    'use strict';
    angular.module('ProjectStack', ['ui.router', 'oc.lazyLoad', 'ngSanitize', 'ui.bootstrap']);

    const path = 'partials/';


    /***
        app congiguration function dafination
    ***/

    angular.module('ProjectStack').config(Config);
    angular.module('ProjectStack').run(Run);

    Config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider'];

    Run.$inject = ['$rootScope'];

    function Config($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: path + 'home.html',
                controller: 'CtrlHome',
                controllerAs: '$ctrl',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: [
                                '../assets/js/controllers/homeController.js',
                                '../node_modules/fullpage.js/dist/jquery.fullpage.min.css',
                                '../node_modules/fullpage.js/dist/jquery.fullpage.js',
                                '../node_modules/angular-fullpage.js/angular-fullpage.js',
                                '../node_modules/parallax-js/dist/parallax.min.js'

                            ],
                            cache: true
                        }).then(function success(args) {
                            return args;
                        }, function error(err) {
                            return err;
                        });
                    }]
                }
            })
            .state('root', {
                url: "/root",
                views: {
                    '@': {
                        template: '<header ui-view="header"></header><main ui-view class="container"></main>',
                    },
                    'header@root': { templateUrl: path + 'header.html' }
                },
                resolve: {}
            })
            .state('signup', {
                parent: 'root',
                url: '/signup',
                templateUrl: path + 'signup.html',
                controller: 'CtrlSignup',
                controllerAs: '$ctrl',
                data: {
                    pageTitle: 'Sign Up'
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../assets/js/controllers/signupController.js', '../assets/js/services/services.js'],
                            cache: true
                        }).then(function success(args) {
                            return args;
                        }, function error(err) {
                            return err;
                        });
                    }]
                }
            }).state('login', {
                url: '/login',
                parent: 'root',
                templateUrl: path + "login.html",
                controller: 'CtrlLogin',
                controllerAs: '$ctrl',
                data: {
                    pageTitle: 'Login'
                },
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['../assets/js/controllers/logincontroller.js'],
                            cache: true
                        }).then(function success(args) {
                            return args;
                        }, function error(err) {
                            return err;
                        });
                    }]
                }
            })

        // use the HTML5 History API
        $locationProvider.html5Mode(true)


    };

    function Run($rootScope) {
        $rootScope.closeAlert = function(index) {
            $rootScope.alerts.splice(index, 1);
        };
    };

})();