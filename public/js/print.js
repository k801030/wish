angular.module('print', [])

.controller('printController', ['$scope', '$http', function($scope, $http){
  $scope.data;
  $http.get('/api/secretcode')
  .success(function(data, status, headers, config){
    length = data.length;
    size = 8; // per page
    $scope.sequence = [];
    sortData = [];
    $scope.data = sortData;
    for(var i=0; i<length; i++){
      var pos = Math.floor(i % (size));
      var page = Math.floor(i / (size));
      sortData[i] = data[page+pos*(length/size)];
      console.log(i+" "+(page+pos*(length/size)));
    }

    

  })
  .error(function(data, status, headers, config){

  });


}])