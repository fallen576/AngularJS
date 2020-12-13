(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['SignUpService', '$http', 'ApiPath'];
    function SignupController(SignUpService, $http, ApiPath) {
        var $ctrl = this;
        $ctrl.menuItemValidated = SignUpService.getMenuItemValidated();
        $ctrl.success = SignUpService.getSuccess();
        $ctrl.user = SignUpService.getUser();
        $ctrl.menuItem = SignUpService.getMenuItem();

        $ctrl.validateShortName = function (sn) {

            $http.get(ApiPath + '/menu_items/' + sn.toUpperCase() + '.json').then(function (response) {
                $ctrl.menuItemValidated = true;
                SignUpService.setMenuItemValidated(true);
                SignUpService.setMenuItem(response.data);
            },
            function(data) {
                $ctrl.menuItemValidated = false;
                SignUpService.setMenuItemValidated(false);
            });
            

        };

        $ctrl.submit = function () {
            $ctrl.success = true;
            SignUpService.setSuccess(true);
            SignUpService.setUser($ctrl.user);
        };

    }


})();
