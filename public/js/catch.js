angular.module('catch', [])

.controller('CatchController', ['$scope', '$http', function($scope, $http) {
  $scope.code;
  $scope.enter = false; // enter, and get wisher's contact
  $scope.showMsg;
  $scope.message = '幸運碼有誤哦!';
  $scope.wisherInfo;
  
  $scope.check = function() {
    data = {
      'code' : $scope.code
    }
    $http.post('/checkCode', data)
    .success(function(data, status, headers, config) {
      if(data.status == true){
        $scope.wisherInfo = data.wisher;
        $scope.enter = true;
        
      }
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

  function bgMove(move) {
    var backgroundPos = $('#bg').css('backgroundPosition').split(" ");
    var yPos = backgroundPos[1];
    console.log(yPos+" "+move);
    $('#bg').animate({
      'background-position-y':  (yPos + move) + 'px'
    },500,'linear');
  }
}])