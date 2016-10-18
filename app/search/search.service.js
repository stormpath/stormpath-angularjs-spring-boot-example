(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('SearchService', SearchService);

    SearchService.$inject = ['$resource'];

    function SearchService($resource) {
        var Search = $resource('http://localhost:8080/api/people', {}, {
            'query': {isArray: false}
        });

        Search.search = function (term, callback) {
            if (term == undefined) {
                term = '';
            }
            Search.query(function (response) {
                var people = response._embedded.people;
                var results = people.filter(function (item) {
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
