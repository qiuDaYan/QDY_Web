app.controller('mainController', ['$scope', function($scope) {
    $scope.selectedIndex = 0;
    $scope.linkTo = function(index) {
        $scope.selectedIndex = index;
    };
}]);
