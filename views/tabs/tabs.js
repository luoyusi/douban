/**
 * Created by hxsd on 2016/8/8.
 */
angular.module("myapp").controller("tabsCtrl",function($scope){
    //----------------回到顶部--------------------------
    $scope.toTop=function(){
        //将窗口滚动到顶部
        $ionicScrollDelegate.scrollTop(true)
    }
});