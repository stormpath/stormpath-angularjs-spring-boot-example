(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['SearchService'];

    function SearchController(SearchService) {
        var vm = this;

        vm.search = function () {
            SearchService.search(vm.term, function (response) {
                vm.searchResults = response;
            });
        };
    }
})();
