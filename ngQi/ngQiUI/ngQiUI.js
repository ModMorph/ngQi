/// <reference path='../app.ts' />
//export module ngQiExamples {
var ttsController = (function () {
    function ttsController($scope, ngQisessionWrapper) {
        $scope.availableLanguages = [];

        var session = ngQisessionWrapper.addSession('10.0.1.7');

        //session.getALProxy(ALProxies.ALAnimatedSpeechProxy).then((proxy) => {
        //    proxy.say("Hello. ^start(Hey_1) My name is NAO");
        //});
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
    return ttsController;
})();

var metaExplorerController = (function () {
    function metaExplorerController($scope, ngQisessionWrapper) {
        var session = ngQisessionWrapper.addSession('10.0.1.7');

        $scope.ALProxies = ALProxies;

        $scope.selectedALProxy = 0 /* None */;

        $scope.selectProxy = function () {
            if ($scope.selectedALProxy != 0 /* None */) {
                var proxyName = ALProxies[$scope.selectedALProxy];

                session.getALProxy(proxyName).then(function (proxy) {
                    $scope.meta = proxy['__MetaObject'];

                    $scope.proxyName = proxyName;
                });
            }
        };
    }
    return metaExplorerController;
})();

var videoController = (function () {
    function videoController($scope, ngQisessionWrapper) {
        var session = ngQisessionWrapper.addSession('10.0.1.7');

        //session.getALProxy(ALProxies.ALVideoDeviceProxy).then
        //    (
        //    (proxy) => {
        //       proxy.getImageRemote('me').done((data) => {
        //            console.log(JSON.stringify(data));
        //        }).fail((err) => {
        //                console.log(err);
        //            });
        //    }, (err) => {
        //        console.log(err);
        //    }
        //    );
        session.getALProxies([62 /* ALVideoDeviceProxy */, 59 /* ALVideoRecorderProxy */]).then(function (proxies) {
            var videoDevice = proxies[0];
            var videoRec = proxies[1];

            $scope.startRecording = function () {
                var now = new Date();

                videoRec.startRecording('/home/nao/recordings/cameras/', 'myvideo' + now.toISOString()).done(function (data) {
                    console.log(JSON.stringify(data));
                }).fail(function (err) {
                    console.log(err);
                });
            };

            $scope.stopRecording = function () {
                videoDevice.getImageRemote('ALVideoRecorderProxy').done(function (data) {
                    console.log(JSON.stringify(data));

                    videoRec.stopRecording().done(function (data) {
                        console.log(JSON.stringify(data));
                    }).fail(function (err) {
                        console.log(err);
                    });
                }).fail(function (err) {
                    console.log(err);
                });
            };
        });
        //    var now = new Date();
        //    videoRec.startRecording('/home/nao/recordings/cameras/', 'myvideo' + now.toISOString()).done((data) => {
        //        console.log(JSON.stringify(data));
        //        videoDevice.getImageRemote('ALVideoRecorderProxy').done((data) => {
        //            console.log(JSON.stringify(data));
        //            videoRec.stopRecording().done((data) => {
        //                console.log(JSON.stringify(data));
        //            }).fail((err) => {
        //                console.log(err);
        //            });
        //        }).fail((err) => {
        //                console.log(err);
        //            });
        //    }).fail((err) => {
        //        console.log(err);
        //        });
        //}, (err) => {
        //    console.log(err);
        //}
        //);
    }
    return videoController;
})();

var audioController = (function () {
    function audioController($scope, ngQisessionWrapper) {
        var session = ngQisessionWrapper.addSession('10.0.1.7');

        session.getALProxies([6 /* ALAudioPlayerProxy */]).then(function (proxies) {
            var playerProxy = proxies[0];

            $scope.playSine = function () {
                playerProxy.playSine(300, 25, 0, 1);
            };
        });
    }
    return audioController;
})();

var packageController = (function () {
    function packageController($scope, ngQisessionWrapper) {
        var session = ngQisessionWrapper.addSession('10.0.1.7');

        session.getALProxies([41 /* PackageManager */]).then(function (proxies) {
            var proxy = proxies[0];

            $scope.getPackages = function () {
                proxy.packages().done(function (result) {
                    $scope.packages = result;
                });
            };

            $scope.getPackages();
        });
    }
    return packageController;
})();

var ledController = (function () {
    function ledController($scope, ngQisessionWrapper) {
        var session = ngQisessionWrapper.addSession('10.0.1.7');

        session.getALProxy(29 /* ALLedsProxy */).then(function (proxy) {
            $scope.LEDs = [];

            proxy.listLEDs().done(function (data) {
                data.forEach(function (value, index, arr) {
                    $scope.LEDs.push(value);
                });
            });

            proxy.listGroups().done(function (data) {
                data.forEach(function (value, index, arr) {
                    $scope.LEDs.push(value);
                });
            });

            $scope.fadeRGB = function () {
                var hex = $scope.color.replace(/#/, '0x');

                proxy.fadeRGB($scope.ledType, parseInt(hex), $scope.duration);
            };
        });
    }
    return ledController;
})();

angular.module('ngQiUI', ['ngQi', 'yaru22.jsonHuman']).controller('ttsController', ['$scope', 'ngQisessionWrapper', ttsController]).directive('ngQiTts', function () {
    return {
        restrict: 'EA',
        controller: 'ttsController',
        transclude: true,
        replace: false,
        templateUrl: 'template/tts/tts.html'
    };
}).controller('metaExplorerController', ['$scope', 'ngQisessionWrapper', metaExplorerController]).directive('ngQiMetaExplorer', function () {
    return {
        restrict: 'EA',
        controller: 'metaExplorerController',
        transclude: true,
        replace: false,
        templateUrl: 'template/meta/metaexplorer.html'
    };
}).controller('videoController', ['$scope', 'ngQisessionWrapper', videoController]).directive('ngQiVideo', function () {
    return {
        restrict: 'EA',
        controller: 'videoController',
        transclude: true,
        replace: false,
        templateUrl: 'template/video/video.html'
    };
}).controller('audioController', ['$scope', 'ngQisessionWrapper', audioController]).directive('ngQiAudio', function () {
    return {
        restrict: 'EA',
        controller: 'audioController',
        transclude: true,
        replace: false,
        templateUrl: 'template/audio/audio.html'
    };
}).controller('packageController', ['$scope', 'ngQisessionWrapper', packageController]).directive('ngQiPackage', function () {
    return {
        restrict: 'EA',
        controller: 'packageController',
        transclude: true,
        replace: false,
        templateUrl: 'template/package/package.html'
    };
}).controller('ledController', ['$scope', 'ngQisessionWrapper', ledController]).directive('ngQiLed', function () {
    return {
        restrict: 'EA',
        controller: 'ledController',
        transclude: true,
        replace: false,
        templateUrl: 'template/led/led.html'
    };
});
//}
//    .config(function ($stateProvider, $urlRouterProvider) {
//         For any unmatched url, send to /route1
//        $urlRouterProvider.otherwise('/home')
//      $stateProvider
//            .state('home', {
//                url: '/home',
//                templateUrl: 'route1.html'
//            })
//            .state('route1.list', {
//                url: '/list',
//                templateUrl: 'route1.list.html',
//                controller: function ($scope) {
//                    $scope.items = ['A', 'List', 'Of', 'Items'];
//                }
//            })
//            .state('route2', {
//                url: '/route2',
//                templateUrl: 'route2.html'
//            })
//            .state('route2.list', {
//                url: '/list',
//                templateUrl: 'route2.list.html',
//                controller: function ($scope) {
//                    $scope.things = ['A', 'Set', 'Of', 'Things'];
//                }
//            })
//    })
//# sourceMappingURL=ngQiUI.js.map
