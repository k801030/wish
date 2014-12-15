angular.module('catch', [])

.controller('CatchController', ['$scope', '$http', function($scope, $http) {
  $scope.code;
  $scope.showMsg;
  $scope.message = '幸運碼有誤哦 ><';
  $scope.wisherInfo;
  
  $scope.check = function() {
    data = {
      'code' : $scope.code
    }
    $http.post('/checkCode', data)
    .success(function(data, status, headers, config) {
      if(data==true)
        $scope.wisherInfo = data;
      else
        $scope.showMsg = true;
    })
    .error(function(data, status, headers, config) {
      $scope.showMsg = true;
    });
  }

  $scope.clearWaring = function() {
    $scope.showMsg = false;
  }

}])