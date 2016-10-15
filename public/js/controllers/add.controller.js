(function() {
  'use strict';
  
  angular.module('app')
  .controller('AddSiteController', ['Results', '$scope', '$alert', '$cookies', function(Results, $scope, $alert, $cookies) {
    $scope.error = false;
    $scope.formField = null;
    var userId = $cookies.get('userId');
    
    $scope.addForm = function() {
      var alertSuccess = $alert({
        title: 'Success',
        content: 'New website has been added',
        container: '#alertContainer',
        type: 'success',
        show: false,
        duration: 6
      });
      
      var alertFail = $alert({
        title: 'Not Saved',
        content: 'New website has not been added',
        container: '#alertContainer',
        type: 'danger', 
        show: false,
        duration: 6
      });
      
      var add = {
        title: $scope.title,
        url: $scope.url,
        description: $scope.description,
        id: userId
      };
      
      Results.postSite(add).success(function(data) {
        console.log('new site added');
        console.log(data);
        $scope.url = '';
        $scope.description = '';
        $scope.title = '';
        alertSuccess.show();
      }).catch(function() {
        alertFail.show();
        console.log('website failed to save');
      });
    };
  }]);
  
})();