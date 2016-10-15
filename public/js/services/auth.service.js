(function() {
  
  angular.module('app').factory('Auth', ['$http', function($http) {
    var loggedIn = false;
    var currentUser = {};
    
    return {
      register: register,
      login: login,
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus
    };
    
    function isLoggedIn() {
      if (loggedIn) return true;
      else return false;
    }
    
    function getUserStatus() {
      return loggedIn;
    }
    
    function register(user) {
      return $http.post('/users/register', user);
    }
    
    function login(user) {
      return $http.post('/users/login', user).success(function(data) {
        loggedIn = true;
      })
      .error(function(data) {
        console.log('error occurred');
        loggedIn = false;
      });
    }
  }]);
  
})();