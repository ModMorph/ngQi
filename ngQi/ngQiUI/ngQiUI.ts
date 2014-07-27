/// <reference path='../app.ts' />


//export module ngQiExamples {

declare var unescape;
declare var Tiff; 
declare var Uint8ClampedArray; 
declare var annyang;

/** Note, needs SSL to prevent getting prompted over and over again. */
 class speechRecognition {

    private _annyang;

    public isRunning: boolean;
    public enabled: boolean; 

    constructor(annyang) {
        this._annyang = annyang; 

        this.isRunning = false; 
        this.enabled = angular.isDefined(annyang) && annyang != null && annyang != false;
    }

    public start(): void {
        if (this.enabled) {

            this._annyang.debug();
            this._annyang.start();
            this.isRunning = true; 
        }

    }

    public stop(): void {
        if (this.enabled) {
            this._annyang.abort();
            this.isRunning = false;
        }
    }

    public addCommands(cmds): void {
        if (this.enabled) {
            this._annyang.addCommands(cmds);
        }
    }
   
}



class ttsController {

    constructor($scope, ngQisessionWrapper, speechRecognition) {

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


        var cmds = {
            'Repeat (after me,) *term': (term) => {

                $scope.text2Say = term + ' doh'; 
            }
            };

        speechRecognition.addCommands(cmds);

        $scope.start = () => {

            speechRecognition.start();
        };

        $scope.stop = () => {

            speechRecognition.stop(); 
        };

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
               

                function stringToUint(str:string):Uint8Array {
                    var contents:string = btoa(unescape(encodeURIComponent(str))),
                        charList = contents.split(''),
                        uintArray = [];
                    for (var i = 0; i < charList.length; i++) {
                        uintArray.push(charList[i].charCodeAt(0));
                    }
                    return new Uint8ClampedArray(uintArray);
                }

                $scope.imageData = null; 


                function getNewImage(result) {

                    //getDirectRawImageRemote
                    //getImagesRemote
                    videoDevice.getImageRemote(result).done((data) => {
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




                        for (var k = 0; k < unsignedCharArray.length; ) {

                            
                            rgbaImageData.data[k] = unsignedCharArray[k].charCodeAt(0); //r; 
                            rgbaImageData.data[k + 1] = unsignedCharArray[k + 1].charCodeAt(0);   //g;
                            rgbaImageData.data[k + 2] = unsignedCharArray[k + 2].charCodeAt(0); ///b;
                            rgbaImageData.data[k + 3] = 255;//unsignedCharArray[k + 3].charCodeAt(0);  //a;

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


                    }).fail((err) => {
                            console.log(err);
                        });

                }

                var subscription = null; 

                $scope.startRecording = () => {
                    //kRGBColorSpace
                    //var now = new Date();

                    if (subscription) {

                        getNewImage(subscription); 
                    }
                    else {
                        videoDevice.subscribeCamera(subId, 1, kVGA, 13, 20).done(
                            (result) => {
                                if (result == null || result == '') {
                                    console.log('That no workie');
                                }
                                else {
                                    subscription = result;

                                    getNewImage(subscription);
                                }
                            }

                            );
                    }

                    //videoRec.startRecording('/home/nao/recordings/cameras/', 'myvideo' + now.toISOString()).done((data) => {

                    //    console.log(JSON.stringify(data));

                        

                    //}).fail((err) => {
                    //        console.log(err);
                    //    });




                };

                $scope.stopRecording = () => {

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

                $scope.mute = () => {
                    playerProxy.muteAudioOut(true);    
                };

                $scope.unmute = () => {
                    playerProxy.muteAudioOut(false); 
                };
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



class batteryController {

    constructor($scope, ngQisessionWrapper,$interval) {

        var session = ngQisessionWrapper.addSession('10.0.1.7');



        $scope.batteryLevel = null;

        session.getALProxy(ALProxies.ALBatteryProxy).then
            ((proxy) => {

           

                $scope.getBatteryCharge = () => {

                    proxy.getBatteryCharge().done((data) => {
                        $scope.batteryLevel = data; 
                    });
                  
                };

                $scope.getBatteryCharge(); 

                $interval(() => {

                    $scope.getBatteryCharge();

                }, 60000, 0,true);
                
            });


            




    }

}


class ledController {

    constructor($scope, ngQisessionWrapper) {

        var session = ngQisessionWrapper.addSession('10.0.1.7');



        session.getALProxy(ALProxies.ALLedsProxy).then
            ((proxy) => {

                $scope.LEDs = []; 

                proxy.listLEDs().done((data:any[]) => {

                    data.forEach((value, index, arr) => {
                        $scope.LEDs.push(value); 
                    }); 
                    
                }); 

                proxy.listGroups().done((data:any[]) => {

                    data.forEach((value, index, arr) => {
                        $scope.LEDs.push(value);
                    });

                }); 

                $scope.fadeRGB = () => {

                    var hex=$scope.color.replace(/#/, '0x');

                    proxy.fadeRGB($scope.ledType, parseInt(hex), $scope.duration); 
                };
              
                
              
            });







    }

}


angular.module('ngQiUI', ['ngQi', 'yaru22.jsonHuman'])//, 'ui-router'
    .value('annyang', annyang)
    .factory('speechRecognition', ['annyang', (annyang) => {
        return new speechRecognition(annyang);
    }
    ])
    .controller('ttsController', ['$scope', 'ngQisessionWrapper', 'speechRecognition', ttsController])
// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
    .directive('qiTts', function () {
        return {
            restrict: 'EA',
            controller: 'ttsController',
            transclude: true,
            replace: false,
            templateUrl: 'template/tts/tts.html'
        };
    })
    .controller('metaExplorerController', ['$scope', 'ngQisessionWrapper', metaExplorerController])
    .directive('qiMetaExplorer', function () {

        return {
            restrict: 'EA',
            controller: 'metaExplorerController',
            transclude: true,
            replace: false,
            templateUrl: 'template/meta/metaexplorer.html'
        };


    })
    .controller('videoController', ['$scope', 'ngQisessionWrapper', videoController])
    .directive('qiVideo', function () {

        return {

            restrict: 'EA',
            controller: 'videoController',
            transclude: true,
            replace: false,
            templateUrl: 'template/video/video.html'
        };

    })
    .controller('audioController', ['$scope', 'ngQisessionWrapper', audioController])
    .directive('qiAudio', function () {

        return {

            restrict: 'EA',
            controller: 'audioController',
            transclude: true,
            replace: false,
            templateUrl: 'template/audio/audio.html'
        };

    })
    .controller('packageController', ['$scope', 'ngQisessionWrapper', packageController])
    .directive('qiPackage', function () {
        return {

            restrict: 'EA',
            controller: 'packageController',
            transclude: true,
            replace: false,
            templateUrl: 'template/package/package.html'
        };

    })
    .controller('ledController', ['$scope', 'ngQisessionWrapper', ledController])
    .directive('qiLed', function () {
        return {

            restrict: 'EA',
            controller: 'ledController',
            transclude: true,
            replace: false,
            templateUrl: 'template/led/led.html'
        };

    })
    .controller('batteryController', ['$scope', 'ngQisessionWrapper', '$interval', batteryController])
    .directive('qiBattery', function () {
        return {

            restrict: 'EA',
            controller: 'batteryController',
            transclude: true,
            replace: false,
            templateUrl: 'template/battery/battery.html'
        };

    }); 







   
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