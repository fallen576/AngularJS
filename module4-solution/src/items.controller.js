(function () {
    'use strict';

    angular.module('data')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['$stateParams', 'MenuDataService'];
    function ItemController($stateParams, MenuDataService) {
        
        var itemDetail = this;
        itemDetail.name ="ben";
        itemDetail.menuItems = [];

        MenuDataService.getItemsForCategory($stateParams.categoryName).then((result) => {
            //console.table(JSON.stringify(result));
            for (var i in result.data) {
                itemDetail.menuItems.push(result.data[i]);
            }
        })
        .catch((result) => {
            console.log("error");
        });
    }

})();
