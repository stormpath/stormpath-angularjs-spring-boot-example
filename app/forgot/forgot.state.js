(function () {
    'use strict';

    angular.module('myApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('forgot', {
                url: '/forgot',
                templateUrl: 'forgot/forgot.html'
            });
    }
})();
