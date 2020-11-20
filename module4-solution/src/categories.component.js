(function () {
    'use strict';

    angular.module('data')
        .component('categoryList', {
            templateUrl: 'templates/categorylist.template.html',
            bindings: {
                items: '<'
              }
        });

})();
