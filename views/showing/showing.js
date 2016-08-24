/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("showingCtrl",function($scope,$http){
    var url="json/showing.json";
    $http.get(url).success(function(data){
        $scope.showingFilms=data;
    })
});

//
//angular.module("myapp").controller("homeCtrl",function($scope,$http,$ionicScrollDelegate){
//    //var url="json/home.json";
//    $http.get("json/home.json").success(function(data){
//        $scope.films=data
//    });