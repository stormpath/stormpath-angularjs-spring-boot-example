(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('EditController', EditController);

    EditController.$inject = ['SearchService', '$stateParams'];

    function EditController(SearchService, $stateParams) {
        var vm = this;

        SearchService.fetch($stateParams.id, function (response) {
            vm.person = response;
        });
    }
})();
