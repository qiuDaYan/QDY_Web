app.controller('mainCtroller', ['$scope', 'commonService', function($scope, commonService) {
    commonService.getData('guji', function(res) {
        console.dir(res);
    });
    $scope.selectedIndex=0;
    $scope.linkTo =function(a){
      $scope.selectedIndex=a;
    };
}]);
