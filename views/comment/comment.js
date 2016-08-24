angular.module("myapp").controller("commentCtrl",function($scope,$http){
    var url="json/comment.json";
    $http.get(url).success(function(data){
        $scope.commentFilms=data;
    });
    $scope.show=function(){
        //var item-text-warp=false;
    };
    $scope.addOne=function(index){
        $scope.i=index;
        $scope.commentFilms[index].yes++;
    };
    $scope.addTwo=function(index){
        $scope.i=index;
        $scope.commentFilms[index].no++;
    };

    //----------------下拉页面刷新----无限滚动---------------------
    $scope.refresh=function(){
        $http.get("json/comment.json").success(function(data){
            $scope.commentFilms=data;
        }).finally(function(){
            //通过框架，刷新结束，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        })
    };

//----------------上拉页面刷新--加载数据--------------------
    $scope.loadMore=function(){
        $http.get("json/comment.json").success(function(data){
            //使用array的原型方法push     等价于$scope,products.push(data)
            Array.prototype.push.apply($scope.commentFilms,data)
        }).finally(function(){
            //通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    };

});