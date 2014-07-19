/// <reference path='../app.ts' />


//export module ngQiExamples {



class ttsController {

    constructor($scope, ngQisessionWrapper) {

        $scope.availableLanguages = [];

        var session = ngQisessionWrapper.addSession('10.0.1.7');
        //session.getALProxy(ALProxies.ALAnimatedSpeechProxy).then((proxy) => {

        //    proxy.say("Hello. ^start(Hey_1) My name is NAO");

        //});

        session.getALProxy(ALProxies.ALTextToSpeechProxy).then((proxy) => {

            $scope.meta = proxy['__MetaObject'];

            proxy.getAvailableLanguages().done(function (data) {

                $scope.availableLanguages = data;
            });

            proxy.getLanguage().done(function (data) {
                $scope.activeLanguage = data;
            });

            $scope.selectNewLanguage = () => {

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

            $scope.setVolume = () => {
                if (angular.isDefined($scope.volume) && $scope.volume != null) {
                    proxy.setVolume($scope.volume / 100);
                }


            };

            $scope.selectNewVoice = () => {

                if (angular.isDefined($scope.activeVoice) && $scope.activeVoice != null) {
                    proxy.setVoice($scope.activeVoice);
                }
            };

            $scope.say = () => {

                if ($scope.text2Say.length > 0) {
                    proxy.say($scope.text2Say);

                    $scope.text2Say = '';
                }
            }
            });

    }

}


class metaExplorerController {
    constructor($scope, ngQisessionWrapper) {

        var session = ngQisessionWrapper.addSession('10.0.1.7');

        $scope.ALProxies = ALProxies;


        $scope.selectedALProxy = ALProxies.None;

        $scope.selectProxy = function () {


            if ($scope.selectedALProxy != ALProxies.None) {

                var proxyName = ALProxies[$scope.selectedALProxy];

                session.getALProxy(proxyName).then((proxy) => {

                    $scope.meta = proxy['__MetaObject'];

                    $scope.proxyName = proxyName;
                });
            }
        }

       

    }
}


class videoController {

    constructor($scope, ngQisessionWrapper) {

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


        session.getALProxies([ALProxies.ALVideoDeviceProxy, ALProxies.ALVideoRecorderProxy]).then
            (
            (proxies) => {

                var videoDevice = proxies[0];
                var videoRec = proxies[1];


                $scope.startRecording = () => {

                    var now = new Date();


                    videoRec.startRecording('/home/nao/recordings/cameras/', 'myvideo' + now.toISOString()).done((data) => {

                        console.log(JSON.stringify(data));

                        

                    }).fail((err) => {
                            console.log(err);
                        });




                };

                $scope.stopRecording = () => {

                    videoDevice.getImageRemote('ALVideoRecorderProxy').done((data) => {

                        console.log(JSON.stringify(data));

                        videoRec.stopRecording().done((data) => {
                            console.log(JSON.stringify(data));

                        }).fail((err) => {
                                console.log(err);
                            });


                    }).fail((err) => {

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

}




class audioController {

    constructor($scope, ngQisessionWrapper) {

        var session = ngQisessionWrapper.addSession('10.0.1.7');



        session.getALProxies([ALProxies.ALAudioPlayerProxy]).then
            ((proxies) => {

                var playerProxy = proxies[0];

                $scope.playSine = () => {
               


                    playerProxy.playSine(300, 25, 0, 1);


                }
            });







    }

}

class packageController {

    constructor($scope, ngQisessionWrapper) {

        var session = ngQisessionWrapper.addSession('10.0.1.7');



        session.getALProxies([ALProxies.PackageManager]).then
            ((proxies) => {

                var proxy = proxies[0];

                $scope.getPackages = () => {

                    proxy.packages().done( (result)=> {

                        $scope.packages = result; 
                    }); 
                };

                $scope.getPackages(); 
            });







    }

}


angular.module('ngQiUI', ['ngQi'])//, 'ui-router'
    .controller('ttsController', ['$scope', 'ngQisessionWrapper', ttsController])
// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
    .directive('ngQiTts', function () {
        return {
            restrict: 'EA',
            controller: 'ttsController',
            transclude: true,
            replace: false,
            templateUrl: 'template/tts/tts.html'
        };
    })
    .controller('metaExplorerController', ['$scope', 'ngQisessionWrapper', metaExplorerController])
    .directive('ngQiMetaExplorer', function () {

        return {
            restrict: 'EA',
            controller: 'metaExplorerController',
            transclude: true,
            replace: false,
            templateUrl: 'template/meta/metaexplorer.html'
        };


    })
    .controller('videoController', ['$scope', 'ngQisessionWrapper', videoController])
    .directive('ngQiVideo', function () {

        return {

            restrict: 'EA',
            controller: 'videoController',
            transclude: true,
            replace: false,
            templateUrl: 'template/video/video.html'
        };

    })
    .controller('audioController', ['$scope', 'ngQisessionWrapper', audioController])
    .directive('ngQiAudio', function () {

        return {

            restrict: 'EA',
            controller: 'audioController',
            transclude: true,
            replace: false,
            templateUrl: 'template/audio/audio.html'
        };

    })
    .controller('packageController', ['$scope', 'ngQisessionWrapper', packageController])
    .directive('ngQiPackage', function () {
        return {

            restrict: 'EA',
            controller: 'packageController',
            transclude: true,
            replace: false,
            templateUrl: 'template/package/package.html'
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