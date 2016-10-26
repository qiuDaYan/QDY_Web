app.controller('booklistCtrl', ['$scope', 'commonService','$routeParams', function($scope, commonService,$routeParams) {
    commonService.getData($routeParams.id ,function(res) {
      console.log('1');
      console.log(res.data);
      $scope.bookData=res.data;
    });
}]);
