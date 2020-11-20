(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })

  // Premade list page
  
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.template.html',
    controller: 'DataCategoriesController as mainList',
  })
  
  .state('categories.items', {
    url: '/items',
    templateUrl: 'templates/items.template.html',
    controller: 'ItemController as itemDetail',
    params: {
      categoryName: null
    }
  });
  
}

})();
