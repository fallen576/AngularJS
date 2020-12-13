(function () {
    "use strict";
    
    angular.module('public')
    .service('SignUpService', SignUpService);
    
    
    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath) {
      var service = this;
      
      service.user = {};
      service.success = false;
      service.menuItemValidated = null;
      service.menuItem = {};

      service.setMenuItem = function(item) {
        service.menuItem = item;
      }

      service.getMenuItem = function() {
          return service.menuItem;
      }

      service.setUser = function(user) {
        service.user = user;
      };

      service.getUser = function() {
          return service.user;
      } 

      service.setSuccess = function(s) {
          service.success = s;
      }
      
      service.getSuccess = function() {
          return service.success;
      }

      service.setMenuItemValidated = function(s) {
          service.menuItemValidated = s;
      }
      
      service.getMenuItemValidated = function() {
          return service.menuItemValidated;
      }
    }
    
    
    
    })();
    