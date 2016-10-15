(function() {
  'use strict';
  
  angular.module('app')
  .controller('LoginController', ['$scope', '$state', '$cookies', 'Auth', function($scope, $state, $cookies, Auth) {
    $scope.error = false;
    $scope.login = function() {
      var user = {
        username: $scope.username,
        password: $scope.password
      };
      
      Auth.login(user).success(function(data) {
        console.log('Login successful');
        $cookies.put('user', data.user.username);
        $cookies.put('userId', data.user._id);
        $state.go('add');
      }).error(function() {
        console.log('Error logging in');
        $scope.error = true;
        $scope.errorMessage = 'There was a problem logging in, mate';
      });
    };
  }]);
  
})();