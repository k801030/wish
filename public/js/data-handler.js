var app = angular.module('data-handler',[]);

app.factory('WisherInfo', function(){
  return{

  }
});

app.directive('ngConfirmClick', function () {
  return {
    priority: 1,
    terminal: true,
    link: function (scope, element, attr) {
      var msg = attr.ngConfirmClick || "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click',function () {
        if ( window.confirm(msg) ) {
          scope.$eval(clickAction)
        }
      });
    }
  };
});

app.controller('IndexController', ['$scope', '$http', function($scope, $http){
  $scope.wishers = [];
  $scope.form = {};
  $scope.focus = function(id) {
    var elem = document.getElementById(id);
    elem.focus();
  }
  // create data
  $scope.create = function() {
    $http.post('/api/create', $scope.form).
    success(function(data, status, headers, config) {      
      $scope.form = {};
      $scope.load();
    }).
    error(function(data, status, headers, config) {
      console.log('error');
    });
  };

  $scope.load = function() {
    $http.get('/api/load').
    success(function(data, status, headers, config){
      $scope.wishers = data;
    }).
    error(function(data, status, headers, config){
      console.log('error');
    });
  };

  $scope.delete = function(id) {
    $http.get('/api/delete/'+id).
    success(function(data, status, headers, config){
      // load data again
      $scope.load();
    }).
    error(function(data, status, headers, config){
      console.log('error');
    });
  };

  $scope.clear = function() {

  }
}]);



