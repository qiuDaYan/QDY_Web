app.controller('mainController', ['$scope', function($scope) {
    // commonService.getData('guji', function(res) {
    //     console.dir(res);
    // });
    // 导航显示
    $scope.selectedIndex = 0;
    $scope.linkTo = function(index) {
        $scope.selectedIndex = index;
    };
}]);
