/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("hotCtrl",function($scope,$http){
    var url="json/hot.json";
    $http.get(url).success(function(data){
        $scope.hotclassics=data.classic;
        $scope.hotloves=data.love;
        $scope.hotarts=data.art;
        $scope.hotcolds=data.coldDoor;
        $scope.hotsciences=data.science;
        $scope.hotcartoons=data.cartoon;
    })
});