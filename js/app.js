/**
 * Created by hxsd on 2016/8/3.
 */
//创建一个主模块
var myapp=angular.module("myapp",["ionic"]);
//----------配置路由---------
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    //-----------------删除掉ion-nav-back-button后面自带的文字--------------------
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText(false);
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,      //--------------抽象--------
        templateUrl:"views/tabs/tabs.html"
    });

    //-----------------ionic框架兼容安卓tabs放在底部--------------------
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');


    $stateProvider.state("tour",{url:"/tour",templateUrl:"views/tour/tour.html",controller:"tourCtrl"});

    $stateProvider.state("tabs.home",{url:"/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
        });
    $stateProvider.state("tabs.showing",{url:"/showing",
        views:{"tab-home":{templateUrl:"views/showing/showing.html",controller:"showingCtrl"}}
        });
    $stateProvider.state("tabs.rankList",{url:"/rankList",
        views:{"tab-home":{templateUrl:"views/rankList/rankList.html",controller:"rankListCtrl"}}
        });
    $stateProvider.state("tabs.sort",{url:"/sort",
        views:{"tab-home":{templateUrl:"views/sort/sort.html"}}
        });
    $stateProvider.state("tabs.hot",{url:"/hot",
        //views:{"tab-home":{templateUrl:"views/hot/hot.html"}}
        views:{"tab-home":{templateUrl:"views/hot/hot.html",controller:"hotCtrl"}}
        });
    $stateProvider.state("tabs.year",{url:"/year",
        views:{"tab-home":{templateUrl:"views/year/year.html"}}
        });
    $stateProvider.state("tabs.comment",{url:"/comment",
        //views:{"tab-home":{templateUrl:"views/comment/comment.html"}}
        views:{"tab-home":{templateUrl:"views/comment/comment.html",controller:"commentCtrl"}}
    });

    //-----------mine页面----------
    $stateProvider.state("tabs.mine",{url:"/mine",
        views:{"tab-mine":{templateUrl:"views/mine/mine.html"/*,controller:"mineCtrl"*/}}
    });
    //默认路由
    $urlRouterProvider.otherwise("/tour")
});

