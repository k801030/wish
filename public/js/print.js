angular.module('print', [])

.controller('printController', ['$scope', '$http', function($scope, $http){
  $scope.data;
  $http.get('/api/secretcode')
  .success(function(data, status, headers, config){
    $scope.data = data;
  })
  .error(function(data, status, headers, config){

  });

}])