'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'stormpath',
  'stormpath.templates'
]).
config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'STORMPATH_CONFIG', function($stateProvider, $urlRouterProvider, $locationProvider, STORMPATH_CONFIG) {
  // For any unmatched url, redirect to /view1
  $urlRouterProvider.otherwise('/view1');

  $locationProvider.html5Mode(true);

  STORMPATH_CONFIG.ENDPOINT_PREFIX = 'http://localhost:8080';
  STORMPATH_CONFIG.FORM_CONTENT_TYPE = 'application/json';
}]).
run(['$stormpath', function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'view1'
  });
}]);
