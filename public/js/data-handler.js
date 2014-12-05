var app = angular.module('data-handler',[]);

app.factory('WisherInfo', function(){
  return{

  }
});

app.controller('CreateController', ['$scope', '$http', function($scope, $http){
  $scope.data = {};
  

}]);

app.controller('IndexController', ['$scope', '$http', function($scope, $http){
  $scope.wishers = {};
  // create data
  $scope.create = function(){
    $http.post('/api/create', $scope.data).
    success(function(data, status, headers, config) {
      console.log('success');
      // load data again
      $scope.load();
    }).
    error(function(data, status, headers, config) {
      console.log('error');
    });
  };

  $scope.load = function(){
    $http.get('/api/load').
    success(function(data, status, headers, config){
      $scope.wishers = data;
      console.log('success');
    }).
    error(function(data, status, headers, config){
      console.log('error');
    });
  };

  $scope.delete = function(id){
    $http.get('/api/delete/'+id).
    success(function(data, status, headers, config){
      console.log('success');
      // load data again
      $scope.load();
    }).
    error(function(data, status, headers, config){
      console.log('error');
    });
  };

  $scope.load();
}]);



