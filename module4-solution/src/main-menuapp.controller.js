(function () {
    'use strict';

    angular.module('data')
        .controller('DataCategoriesController', DataCategoriesController);


    DataCategoriesController.$inject = ['MenuDataService'];
    function DataCategoriesController(MenuDataService) {
        
        var categories = this;
        categories.items = [];


        var promise = MenuDataService.getAllCategories();
        promise.then((result) => {
            
            for (var i in result.data) {
                categories.items.push(result.data[i]);
            }
        })
        .catch((error) => {
            console.log("Error when reaching endpoint " + JSON.stringify(result));
        });
    }

})();
