(function () {
    'use strict';

    angular.module('data')
        .controller('ItemController', ItemController);

    // Version with resolving to 1 item based on $stateParams in route config
    ItemController.$inject = ['$stateParams', 'MenuDataService'];
    function ItemController($stateParams, MenuDataService) {
        var itemDetail = this;
        itemDetail.name = "ben";
        /*
        var item = items[$stateParams.itemId];
        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
        */
    }

})();
