app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes = [
    {id:'art',name:'艺术',imgurl:'http://img0.imgtn.bdimg.com/it/u=1877885148,372723708&fm=21&gp=0.jpg',describtion:'开启你的艺术之路'},
    {id:'guji',name:'古书',imgurl:'',describtion:''},
    {id:'history',name:'历史',imgurl:'',describtion:''},
    {id:'tiyu',name:'体育',imgurl:'',describtion:''},
    {id:'novle',name:'小说',imgurl:'',describtion:''},
    {id:'xinli',name:'心理学',imgurl:'',describtion:''},
    {id:'yangshen',name:'养生',imgurl:'',describtion:''},
  ];
}]);
