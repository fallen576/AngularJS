(function() {

    'use strict';

    angular.module("LunchCheckApp", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
        $scope.name = "";
        $scope.message = "";
        $scope.textColor = "";
        $scope.border = "";

        $scope.checkTooMuch = function() {
            if ($scope.name === "") {
                $scope.message = "Please enter data first.";
                $scope.textColor = "error";
                $scope.border = "input-error";
                return;
            }

            var arr = $scope.name.split(',').filter((x) => {
                if (x.trim() != '') return true;
            });
            if (arr.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.textColor = "enjoy";
                $scope.border = "input-enjoy";
            }
            else {
                $scope.message = "Too much!";
                $scope.textColor = "enjoy";
                $scope.border = "input-enjoy";
            }
        }
    }
})();

