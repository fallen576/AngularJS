(function () {
    'use strict';

    angular.module('data')
        .component('itemList', {
            templateUrl: 'templates/itemlist.template.html',
            bindings: {
                menuItems: '<'
              }
        });

})();
