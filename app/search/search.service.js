(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('SearchService', SearchService);

    SearchService.$inject = ['$resource'];

    function SearchService($resource) {
        var Search = $resource('/api/search/people.json');

        Search.search = function (term, callback) {
            Search.query(function (response) {
                var results = response.filter(function (item) {
                    return JSON.stringify(item).toLowerCase().includes(term.toLowerCase());
                });
                return callback(results);
            });
        };

        Search.fetch = function (id, callback) {
            Search.query(function (response) {
                var results = response.filter(function (item) {
                    return item.id === parseInt(id);
                });
                return callback(results[0]);
            });
        };

        return Search;
    }
})();
