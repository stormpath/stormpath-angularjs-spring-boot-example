(function () {
    'use strict';

    angular.module('myApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('search', {
                url: '/search',
                templateUrl: 'search/search.html',
                controller: 'SearchController',
                controllerAs: 'vm'
            });
    }
})();
