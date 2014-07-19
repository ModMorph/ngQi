/// <reference path="../app.ts" />
//export module ngQiExamples {
var ngQiExampleController = (function () {
    function ngQiExampleController($scope, ngQisessionWrapper) {
        $scope.availableLanguages = [];

        var session = ngQisessionWrapper.addSession("10.0.1.7");

        session.getALProxy(56 /* ALTextToSpeechProxy */).then(function (proxy) {
            $scope.meta = proxy['__MetaObject'];

            proxy.getAvailableLanguages().done(function (data) {
                $scope.availableLanguages = data;
            });

            proxy.getLanguage().done(function (data) {
                $scope.activeLanguage = data;
            });

            $scope.selectNewLanguage = function () {
                if (angular.isDefined($scope.activeLanguage) && $scope.activeLanguage != null) {
                    proxy.setLanguage($scope.activeLanguage).done(function (data) {
                        console.log('success');
                    });
                }
            };

            proxy.getAvailableVoices().done(function (data) {
                $scope.voices = data;
            });

            proxy.getVoice().done(function (data) {
                $scope.activeVoice = data;
            });

            proxy.getVolume().done(function (data) {
                $scope.volume = data;
            });

            $scope.setVolume = function () {
                if (angular.isDefined($scope.volume) && $scope.volume != null) {
                    proxy.setVolume($scope.volume / 100);
                }
            };

            $scope.selectNewVoice = function () {
                if (angular.isDefined($scope.activeVoice) && $scope.activeVoice != null) {
                    proxy.setVoice($scope.activeVoice);
                }
            };

            $scope.say = function () {
                if ($scope.text2Say.length > 0) {
                    proxy.say($scope.text2Say);

                    $scope.text2Say = '';
                }
            };
        });
    }
    return ngQiExampleController;
})();

angular.module("ngQiExamples", ["ngQi"]).controller("ngQiExampleController", ["$scope", "ngQisessionWrapper", ttsController]);
//}
//    .config(function ($stateProvider, $urlRouterProvider) {
//         For any unmatched url, send to /route1
//        $urlRouterProvider.otherwise("/home")
//      $stateProvider
//            .state('home', {
//                url: "/home",
//                templateUrl: "route1.html"
//            })
//            .state('route1.list', {
//                url: "/list",
//                templateUrl: "route1.list.html",
//                controller: function ($scope) {
//                    $scope.items = ["A", "List", "Of", "Items"];
//                }
//            })
//            .state('route2', {
//                url: "/route2",
//                templateUrl: "route2.html"
//            })
//            .state('route2.list', {
//                url: "/list",
//                templateUrl: "route2.list.html",
//                controller: function ($scope) {
//                    $scope.things = ["A", "Set", "Of", "Things"];
//                }
//            })
//    })
//# sourceMappingURL=ngqiexamples.js.map
