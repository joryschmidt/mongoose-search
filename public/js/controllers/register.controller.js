(function() {
  'use strict';
  
  angular.module('app')
  .controller('RegisterController', ['$scope', '$state','Auth', function($scope, $state, Auth) {
    $scope.error = false;
    $scope.register = function(form) {
      var user = {
        username: $scope.username,
        password: $scope.password,
        password2: $scope.password2,
        email: $scope.email
      };
      
      Auth.register(user).success(function() {
        console.log('User successfully registered');
        $state.go('login');
      }).error(function() {
        $scope.error = true;
        $scope.errorMessage = "Something went wrong, man, we're real sorry about that";
      });
    };
  }]);
  
})();