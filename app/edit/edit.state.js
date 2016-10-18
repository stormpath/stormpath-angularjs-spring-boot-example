(function () {
    'use strict';

    angular.module('myApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
            .state('edit', {
                url: '/edit/:id',
                templateUrl: 'edit/edit.html',
                controller: 'EditController',
                controllerAs: 'vm'
            });
    }
})();
