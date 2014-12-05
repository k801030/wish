var app = angular.module('data-handler',[]);

app.controller('CreateController', ['$scope', '$http', function($scope, $http){
  $scope.data = {};
  // create data
  $scope.create = function(){
    $http.post('/api/create', $scope.data).
    success(function(data, status, headers, config) {
      console.log('success');
    }).
    error(function(data, status, headers, config) {
      console.log('error');
    });
  };

}]);

app.controller('ReadController', ['$scope', '$http', function($scope, $http){
  $scope.data = {};
  // create data
  $scope.read = function(){
    $http.get('/api/read').
    success(function(data, status, headers, config) {
      console.log('success:'+data);
    }).
    error(function(data, status, headers, config) {
      console.log('error');
    });
  };

}]);

