(function() {

    'use strict';

    angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController )
    .directive("foundItems", foundItems)
    .service("MenuSearchService", MenuSearchService);

    NarrowItDownController.$inject = ["$scope","MenuSearchService"];
    function NarrowItDownController($scope, MenuSearchService, $http) {
        var c = this;
        $scope.searchTerm = "";
        c.found = [];
        
        c.search = function() {
           // if ($scope.searchTerm === "") return [];

            var promise = MenuSearchService.getMatchedMenuItems();

            promise.then((result) => {
                var matchingItems = [];
                var foundItems = result.data.menu_items;
                console.table(foundItems)
                for (var i in foundItems) {
                    var item = foundItems[i];
                    if (item.description.indexOf($scope.searchTerm) > -1) {
                        matchingItems.push(item)
                    }
                }
            
                // return processed items
                console.table(matchingItems);
                c.found = matchingItems;
            })
            .catch((error) => {
                console.log("Error when raching endpoint " + JSON.stringify(result));
            });
        };

    }
    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function() {
            var response = $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            });
            return response;
        };
    }

    function foundItems() {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html',
            scope: {
                //items: '<',
               // onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'c',
            bindToController: true
        };
        return ddo;
    }
})();

