/// <reference path='../app.ts' />

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
            var subId = 'ngQiUI';
            var kTopCamera = 0;
            var kVGA = 2;
            var kYYCbCrColorSpace = 14;
            var kRGBColorSpace = 11;

            //                Parameter ID Name	ID Value	Description
            //AL::kTopCamera	0	camera on the top.
            //AL::kBottomCamera	1	camera on the bottom.
            //                Parameter ID Name	ID Value	Description
            //AL::kQQQQVGA	8	Image of 40 * 30px
            //AL::kQQQVGA	7	Image of 80 * 60px
            //AL::kQQVGA	0	Image of 160 * 120px
            //AL::kQVGA	1	Image of 320 * 240px
            //AL::kVGA	2	Image of 640 * 480px
            //AL::k4VGA	3	Image of 1280 * 960px
            //Parameter ID Name	ID Value	Number of layers	Number of channels	Description
            //AL::kYuvColorSpace	0	1	1	Buffer only contains the Y(luma component) equivalent to one unsigned char
            //AL::kyUvColorSpace	1	1	1	Buffer only contains the U(Chrominance component) equivalent to one unsigned char
            //AL::kyuVColorSpace	2	1	1	Buffer only contains the V(Chrominance component) equivalent to one unsigned char
            //AL::kRgbColorSpace	3	1	1	Buffer only contains the R(Red component) equivalent to one unsigned char
            //AL::krGbColorSpace	4	1	1	Buffer only contains the G(Green component) equivalent to one unsigned char
            //AL::krgBColorSpace	5	1	1	Buffer only contains the B(Blue component) equivalent to one unsigned char
            //AL::kHsyColorSpace	6	1	1	Buffer only contains the H(Hue component) equivalent to one unsigned char
            //AL::khSyColorSpace	7	1	1	Buffer only contains the S(Saturation component) equivalent to one unsigned char
            //AL::khsYColorSpace	8	1	1	Buffer only contains the Y(Brightness component) equivalent to one unsigned char
            //AL::kYUV422ColorSpace	9	2	2	Native format, 0xY’Y’VVYYUU equivalent to four unsigned char for two pixels.With Y luma for pixel n, Y’ luma for pixel n + 1, and U and V are the average chrominance value of both pixels.
            //AL::kYUVColorSpace	10	3	3	Buffer contains triplet on the format 0xVVUUYY, equivalent to three unsigned char
            //AL::kRGBColorSpace	11	3	3	Buffer contains triplet on the format 0xBBGGRR, equivalent to three unsigned char
            //AL::kHSYColorSpace	12	3	3	Buffer contains triplet on the format 0xYYSSHH, equivalent to three unsigned char
            //AL::kBGRColorSpace	13	3	3	Buffer contains triplet on the format 0xRRGGBB, equivalent to three unsigned char
            //AL::kYYCbCrColorSpace	14	2	2	TIFF format, four unsigned characters for two pixels.
            //AL::kH2RGBColorSpace	15	3	3	H from “HSY to RGB” in fake colors.
            //AL::kHSMixedColorSpace	16	3	3	HS and(H + S) / 2.
            //                std::string ALVideoDeviceProxy::subscribeCamera(const std::string & Name, const int & CameraIndex, const int & Resolution, const int & ColorSpace, const int & Fps)
            //                Image
            //Image container is an array as follow:
            //[0]: width.
            //[1]: height.
            //[2]: number of layers.
            //[3]: ColorSpace.
            //[4]: time stamp(seconds).
            //[5]: time stamp(micro - seconds).
            //[6]: binary array of size height * width * nblayers containing image data.
            //[7]: camera ID(kTop = 0, kBottom = 1).
            //[8]: left angle(radian).
            //[9]: topAngle(radian).
            //[10]: rightAngle(radian).
            //[11]: bottomAngle(radian).
            //Resolution	Supported Framerate
            //AL::kQQQQVGA	from 1 to 30 fps
            //AL::kQQQVGA	from 1 to 30 fps
            //AL::kQQVGA	from 1 to 30 fps
            //AL::kQVGA	from 1 to 30 fps
            //AL::kVGA	from 1 to 30 fps
            //AL::k4VGA	from 1 to 30 fps
            function stringToUint(str) {
                var contents = btoa(unescape(encodeURIComponent(str))), charList = contents.split(''), uintArray = [];
                for (var i = 0; i < charList.length; i++) {
                    uintArray.push(charList[i].charCodeAt(0));
                }
                return new Uint8ClampedArray(uintArray);
            }

            $scope.imageData = null;

            function getNewImage(result) {
                //getDirectRawImageRemote
                //getImagesRemote
                videoDevice.getImageRemote(result).done(function (data) {
                    var str = JSON.stringify(data);

                    var unsignedCharArray = data[6];

                    var canvas = document.createElement('canvas');

                    canvas.width = data[0];
                    canvas.height = data[1];

                    //function setPixel(imageData, x, y, r, g, b, a) {
                    //    var index = (x + y * imageData.width) * 4;
                    //    imageData.data[index + 0] = g;
                    //    imageData.data[index + 1] = r;
                    //    imageData.data[index + 2] = b;
                    //    imageData.data[index + 3] = a;
                    //}
                    var ctx = canvas.getContext('2d');
                    var rgbaImageData = ctx.createImageData(canvas.width, canvas.height);
                    var byteCounter = 0;

                    //var EOF = 26;
                    function getRandomInt(min, max) {
                        return Math.floor(Math.random() * (max - min)) + min;
                    }

                    for (var k = 0; k < unsignedCharArray.length;) {
                        rgbaImageData.data[k] = unsignedCharArray[k + 1].charCodeAt(0); //r;
                        rgbaImageData.data[k + 1] = unsignedCharArray[k].charCodeAt(0); //g;
                        rgbaImageData.data[k + 2] = unsignedCharArray[k + 2].charCodeAt(0); ///b;
                        rgbaImageData.data[k + 3] = 255; //unsignedCharArray[k + 3].charCodeAt(0);  //a;

                        k = k + 4;
                    }

                    //for (var x = 0; x < rgbaImageData.width; x++) {
                    //    for (var y = 0; y < rgbaImageData.height; y++) {
                    //        if (byteCounter < unsignedCharArray.length) {
                    //            var r = getRandomInt(0, 255);//  unsignedCharArray[byteCounter++];
                    //            var g = getRandomInt(0, 255);// unsignedCharArray[byteCounter++];
                    //            var b = getRandomInt(0, 255);// unsignedCharArray[byteCounter++];
                    //            var a = 0
                    //                        var valid = angular.isDefined(r) && r != null && angular.isDefined(g) && g != null && angular.isDefined(b) && b != null;
                    //            if (valid) {
                    //                //setPixel(rgbaImageData, x, y, r.charCodeAt(0), g.charCodeAt(0), b.charCodeAt(0),a);
                    //                setPixel(rgbaImageData, x, y, r, g, b, a);
                    //            }
                    //        }
                    //    }
                    //}
                    ctx.putImageData(rgbaImageData, 0, 0);

                    //var tiff = new Tiff({ buffer: buffer });
                    //var canvas = tiff.toCanvas();
                    document.body.appendChild(canvas);

                    // var canvas = tiff.toDataURL();
                    $scope.imageData = canvas.toDataURL();
                }).fail(function (err) {
                    console.log(err);
                });
            }

            var subscription = null;

            $scope.startRecording = function () {
                //kRGBColorSpace
                //var now = new Date();
                if (subscription) {
                    getNewImage(subscription);
                } else {
                    videoDevice.subscribeCamera(subId, 1, kVGA, 13, 20).done(function (result) {
                        if (result == null || result == '') {
                            console.log('That no workie');
                        } else {
                            subscription = result;

                            getNewImage(subscription);
                        }
                    });
                }
                //videoRec.startRecording('/home/nao/recordings/cameras/', 'myvideo' + now.toISOString()).done((data) => {
                //    console.log(JSON.stringify(data));
                //}).fail((err) => {
                //        console.log(err);
                //    });
            };

            $scope.stopRecording = function () {
                videoDevice.releaseImage(subId);
                videoDevice.unsubscribe(subId);
                //videoDevice.getImageRemote('ALVideoRecorderProxy').done((data) => {
                //    console.log(JSON.stringify(data));
                //    videoRec.stopRecording().done((data) => {
                //        console.log(JSON.stringify(data));
                //    }).fail((err) => {
                //            console.log(err);
                //        });
                //}).fail((err) => {
                //        console.log(err);
                //    });
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

angular.module('ngQiUI', ['ngQi', 'yaru22.jsonHuman']).controller('ttsController', ['$scope', 'ngQisessionWrapper', ttsController]).directive('qiTts', function () {
    return {
        restrict: 'EA',
        controller: 'ttsController',
        transclude: true,
        replace: false,
        templateUrl: 'template/tts/tts.html'
    };
}).controller('metaExplorerController', ['$scope', 'ngQisessionWrapper', metaExplorerController]).directive('qiMetaExplorer', function () {
    return {
        restrict: 'EA',
        controller: 'metaExplorerController',
        transclude: true,
        replace: false,
        templateUrl: 'template/meta/metaexplorer.html'
    };
}).controller('videoController', ['$scope', 'ngQisessionWrapper', videoController]).directive('qiVideo', function () {
    return {
        restrict: 'EA',
        controller: 'videoController',
        transclude: true,
        replace: false,
        templateUrl: 'template/video/video.html'
    };
}).controller('audioController', ['$scope', 'ngQisessionWrapper', audioController]).directive('qiAudio', function () {
    return {
        restrict: 'EA',
        controller: 'audioController',
        transclude: true,
        replace: false,
        templateUrl: 'template/audio/audio.html'
    };
}).controller('packageController', ['$scope', 'ngQisessionWrapper', packageController]).directive('qiPackage', function () {
    return {
        restrict: 'EA',
        controller: 'packageController',
        transclude: true,
        replace: false,
        templateUrl: 'template/package/package.html'
    };
}).controller('ledController', ['$scope', 'ngQisessionWrapper', ledController]).directive('qiLed', function () {
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
