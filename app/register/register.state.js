(function () {
    'use strict';

    angular.module('myApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'register/register.html'
            });
    }
})();
