(function() {

    'use strict';

    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
    .filter("customCurrency", CustomCurrency);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
        toBuy.buy = function(index) {
            console.log('we here');
            ShoppingListCheckOffService.purchase(index);
        };

    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.itemsBought = ShoppingListCheckOffService.getBoughtItems();
        alreadyBought.calcTotal = function(item) {
            return (Number(item.qty)*item.pricePerItem);
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            {
                "name":"Milk",
                "qty":"1",
                "pricePerItem": 2.00
            },
            {
                "name":"Eggs",
                "qty":"1",
                "pricePerItem": 1.00
            },
            {
                "name":"Cheese",
                "qty":"5",
                "pricePerItem": 3.00
            },
            {
                "name":"Bread",
                "qty":"2",
                "pricePerItem": 1.00
            },
            {
                "name":"Carrots",
                "qty":"1",
                "pricePerItem": 4.00
            },
        ];
        var alreadyBoughtItems = [];

        service.purchase = function(i) {
            alreadyBoughtItems.push(toBuyItems[i]);
            toBuyItems.splice(i, 1);
        }

        service.getBoughtItems = function() {
            return alreadyBoughtItems;
        }

        service.getItemsToBuy = function() {
            return toBuyItems;
        }
    }

    function CustomCurrency() {
        return function(input) {
            return "$$$" + input;
        };
    }
})();

