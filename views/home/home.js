/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$http,$ionicScrollDelegate){
    //var url="json/home.json";
    $http.get("json/home.json").success(function(data){
        $scope.films=data
    });

//----------------下拉页面刷新----无限滚动---------------------
    $scope.refresh=function(){
        $http.get("json/home-refresh.json").success(function(data){
            $scope.films=data;
        }).finally(function(){
            //通过框架，刷新结束，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        })
    };

//----------------上拉页面刷新--加载数据--------------------
    $scope.loadMore=function(){
        $http.get("json/home-refresh.json").success(function(data){
            //使用array的原型方法push     等价于$scope,products.push(data)
            Array.prototype.push.apply($scope.films,data)
        }).finally(function(){
            //通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    };

//----------------回到顶部--------------------
    $scope.toTop=function(){
        $ionicScrollDelegate.scrollTop(true);
    }


});