app.controller('booklistCtrl', ['$scope', 'commonService','$routeParams', function($scope, commonService,$routeParams) {
    commonService.getData($routeParams.id ,function(res) {
      $scope.bookData=res.data;
    });
}]);
