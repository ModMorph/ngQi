/// <reference path="scripts/typings/socket.io-client/socket.io-client.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

//import socketIO = require("socket.io-client");

//export module ngQi {

declare var QiSession;

/** Enums */

enum ConnectionState { Connecting, Connected, Disconnected, Reconnecting, Reconnected, TimedOut };

/** NaoQI 2.1 Proxies */
enum ALProxies { None= 0, AutonomousMovesProxy, ALAnimatedSpeechProxy, ALAudioSourceLocalizationProxy, ALAudioRecorderProxy, AutonomousLifeProxy, ALAudioPlayerProxy, ALBarcodeReaderProxy, ALBodyTemperatureProxy, ALBacklightingDetectionProxy, ALBehaviorManagerProxy, ALBonjourProxy, ALBatteryProxy, ALBasicAwarenessProxy, ALColorBlobDetectionProxy, ALCloseObjectDetectionProxy, ALConnectionManagerProxy, ALDarknessDetectionProxy, ALDialogProxy, ALDiagnosisProxy, ALEngagementZonesProxy, ALFaceCharacteristicsProxy, ALFaceDetectionProxy, ALFaceTrackerProxy, ALGazeAnalysisProxy, ALInfraredProxy, ALLandMarkDetectionProxy, ALLauncherProxy, ALLaserProxy, ALLedsProxy, ALLoggerProxy, ALLocalizationProxy, ALMotionRecorderProxy, ALMemoryProxy, ALMovementDetectionProxy, ALMotionProxy, ALNavigationProxy, ALNotificationManagerProxy, ALPreferenceManagerProxy, ALPreferencesProxy, ALPeoplePerceptionProxy, PackageManager, ALPhotoCaptureProxy, ALRobotPoseProxy, ALRedBallDetectionProxy, ALRedBallProxy, ALResourceManagerProxy, ALRobotPostureProxy, ALSensorsProxy, ALSystemProxy, ALSegmentation3DProxy, ALSoundDetectionProxy, ALSpeechRecognitionProxy, ALSoundLocalizationProxy, ALTrackerProxy, ALTabletService, ALTextToSpeechProxy, ALTouchProxy, ALUserSessionProxy, ALVideoRecorderProxy, ALVisionRecognitionProxy, ALVisualCompassProxy, ALVideoDeviceProxy, ALVisualSpaceHistoryProxy, ALVoiceEmotionAnalysisProxy, ALWorldRepresentationProxy, ALWavingDetectionProxy };

/** / is replaced with _, <ID> where ID is an integer identifier is replaced with $ character  */
enum ALMemoryKeys { None= 0, BacklightingDetection_BacklightingValue, CloseObjectDetection_ObjectInfo, DarknessDetection_DarknessValue, EngagementZones_LastMovementsInZone1, EngagementZones_LastMovementsInZone2, EngagementZones_LastMovementsInZone3, EngagementZones_PeopleInZone1, EngagementZones_PeopleInZone2, EngagementZones_PeopleInZone3, footContact, leftFootContact, leftFootTotalWeight, MovementDetection_MovementInfo, PeoplePerception_Person_$_AgeProperties, PeoplePerception_Person_$_AnglesYawPitch, PeoplePerception_Person_$_Distance, PeoplePerception_Person_$_EngagementZone, PeoplePerception_Person_$_ExpressionProperties, PeoplePerception_Person_$_EyeOpeningDegree, PeoplePerception_Person_$_GazeDirection, PeoplePerception_Person_$_GenderProperties, PeoplePerception_Person_$_HeadAngles, PeoplePerception_Person_$_IsFaceDetected, PeoplePerception_Person_$_IsLookingAtRobot, PeoplePerception_Person_$_IsSitting, PeoplePerception_Person_$_IsVisible, PeoplePerception_Person_$_IsWaving, PeoplePerception_Person_$_IsWavingCenter, PeoplePerception_Person_$_IsWavingLeft, PeoplePerception_Person_$_IsWavingRight, PeoplePerception_Person_$_LookingAtRobotScore, PeoplePerception_Person_$_NotSeenSince, PeoplePerception_Person_$_PositionInRobotFrame, PeoplePerception_Person_$_PositionInTorsoFrame, PeoplePerception_Person_$_PositionInWorldFrame, PeoplePerception_Person_$_PresentSince, PeoplePerception_Person_$_RealHeight, PeoplePerception_Person_$_ShirtColor, PeoplePerception_Person_$_ShirtColorHSV, PeoplePerception_Person_$_SmileProperties, rightFootContact, rightFootTotalWeight, robotPose, robotPoseSince, Segmentation3D_BlobsList, Segmentation3D_TopOfTrackedBlob, UserSession_OpenSessions, VisualSpaceHistory_VisualGrid_Data }
/** / is replaced with _, <ID> where ID is an integer identifier is replaced with $ character  */
enum ALEvents {
    None= 0, ALAnimatedSpeech_EndOfAnimatedSpeech, ALAudioSourceLocalization_SoundLocated, ALBasicAwareness_HumanLost, ALBasicAwareness_HumanTracked, ALBasicAwareness_StimulusDetected, ALBehaviorManager_BehaviorAdded, ALBehaviorManager_BehaviorRemoved, ALBehaviorManager_BehaviorUpdated, ALBehaviorManager_BehaviorsAdded, ALChestButton_DoubleClickOccurred, ALChestButton_SimpleClickOccurred, ALChestButton_TripleClickOccurred, ALDiagnosis_RobotIsReady, ALLocalization_FullScanBegin, ALLocalization_FullScanInsufficient, ALLocalization_FullScanSuccess, ALLocalization_GoToBegin, ALLocalization_GoToFailed, ALLocalization_GoToLost, ALLocalization_GoToNextMove, ALLocalization_GoToSuccess, ALLocalization_HalfScanBegin, ALLocalization_HalfScanInsufficient, ALLocalization_HalfScanSuccess, ALLocalization_LocalizeBegin, ALLocalization_LocalizeDirectionBegin, ALLocalization_LocalizeDirectionLost, ALLocalization_LocalizeDirectionSuccess, ALLocalization_LocalizeLost, ALLocalization_LocalizeSuccess, ALLocalization_OdometryBegin, ALLocalization_OdometryInsufficient, ALLocalization_StartingComputation, ALLocalization_StoppingComputation, ALLocalization_UTurnEnd, ALMemory_KeyAdded, ALMemory_KeyRemoved, ALMemory_KeyTypeChanged, ALMotion_MoveFailed, ALMotion_Protection_DisabledDevicesChanged, ALMotion_Safety_ChainVelocityClipped, ALMotion_Safety_MoveFailed, ALMotion_Safety_PushRecovery, ALMotion_Safety_RobotPushed, ALMotion_Stiffness_restFinished, ALMotion_Stiffness_restStarted, ALMotion_Stiffness_wakeUpFinished, ALMotion_Stiffness_wakeUpStarted, ALRecharge_ConnectedToChargingStation, ALRecharge_DockingFailed, ALRecharge_DockingSuccess, ALRecharge_LeaveFailed, ALRecharge_LeaveSuccess, ALRecharge_MoveFailed, ALRecharge_SearchStopped, ALRecharge_StationDetected, ALRecharge_StationNotFound, ALRecharge_StatusChanged, ALSoundLocalization_SoundLocated, ALSpeechRecognition_ActiveListening, ALSpeechRecognition_IsRunning, ALSpeechRecognition_Status, ALStore_SystemImageDownloaded, ALStore_Updated, ALSystem_RobotNameChanged, ALTabletService_error, ALTabletService_message, ALTabletService_onInputText, ALTextToSpeech_CurrentBookMark, ALTextToSpeech_CurrentSentence, ALTextToSpeech_CurrentWord, ALTextToSpeech_PositionOfCurrentWord, ALTextToSpeech_Status, ALTextToSpeech_TextDone, ALTextToSpeech_TextInterrupted, ALTextToSpeech_TextStarted, ALTracker_BlobDetected, ALTracker_CloseObjectDetected, ALTracker_ColorBlobDetected, ALVoiceEmotionAnalysis_EmotionRecognized, ActiveDiagnosisErrorChanged, AutonomousLife_CompletedActivity, AutonomousLife_FocusedActivity, AutonomousLife_LaunchSuggestions, AutonomousLife_NextActivity, AutonomousLife_State, BacklightingDetection_BacklightingDetected, BarcodeReader_BarcodeDetected, BatteryChargeCellVoltageMinChanged, BatteryChargeChanged, BatteryChargingFlagChanged, BatteryDisChargingFlagChanged, BatteryEmpty, BatteryFullChargedFlagChanged, BatteryLowDetected, BatteryNearlyEmpty, BatteryNotDetected, BatteryPowerPluggedChanged, BehaviorsRun, BodyStiffnessChanged, ChestButtonPressed, ClientConnected, ClientDisconnected, CloseObjectDetection_ObjectDetected, CloseObjectDetection_ObjectNotDetected, DarknessDetection_DarknessDetected, DeviceNoLongerHotDetected, Dialog_Answered, Dialog_Failure, Dialog_Fallback, Dialog_IsStarted, Dialog_LastInput, Dialog_NotSpeaking10, Dialog_NotSpeaking15, Dialog_NotSpeaking20, Dialog_NotSpeaking5, Dialog_NotUnderstood, Dialog_NotUnderstood2, Dialog_NotUnderstood3, Dialog_SameRule, EngagementZones_FirstLimitDistanceUpdated, EngagementZones_LimitAngleUpdated, EngagementZones_MovementsInZonesUpdated, EngagementZones_PeopleInZonesUpdated, EngagementZones_PersonApproached, EngagementZones_PersonEnteredZone1, EngagementZones_PersonEnteredZone2, EngagementZones_PersonEnteredZone3, EngagementZones_PersonMovedAway, EngagementZones_SecondLimitDistanceUpdated, FaceCharacteristics_PersonSmiling, FaceDetected, FrontTactilTouched, footContactChanged, GazeAnalysis_PeopleLookingAtRobot, GazeAnalysis_PersonStartsLookingAtRobot, GazeAnalysis_PersonStopsLookingAtRobot, HandLeftBackTouched, HandLeftLeftTouched, HandLeftRightTouched, HandRightBackTouched, HandRightLeftTouched, HandRightRightTouched, HeadProcessorIsCriticallyHot, HeadProcessorIsHot, HotDeviceDetected, HotJointDetected, LandmarkDetected, LastWordRecognized, LeftBumperPressed, MiddleTactilTouched, MovementDetection_MovementDetected, MovementDetection_NoMovement, NAOqiReady, Navigation_AvoidanceNavigator_AbsTargetModified, Navigation_AvoidanceNavigator_MovingToFreeZone, Navigation_AvoidanceNavigator_ObstacleDetected, Navigation_AvoidanceNavigator_Status, Navigation_AvoidanceNavigator_TrajectoryProgress, Navigation_SafeNavigator_AlreadyAtTarget, Navigation_SafeNavigator_BlockingObstacle, Navigation_SafeNavigator_DangerousObstacleDetected, Navigation_SafeNavigator_Status, NetworkConnectStatus, NetworkDefaultTechnologyChanged, NetworkServiceAdded, NetworkServiceInputRequired, NetworkServiceRemoved, NetworkServiceStateChanged, NetworkStateChanged, NetworkTechnologyAdded, NetworkTechnologyRemoved, notificationAdded, notificationRemoved, PassiveDiagnosisErrorChanged, PeoplePerception_JustArrived, PeoplePerception_JustLeft, PeoplePerception_MaximumDetectionRangeUpdated, PeoplePerception_NonVisiblePeopleList, PeoplePerception_PeopleDetected, PeoplePerception_PeopleList, PeoplePerception_PopulationUpdated, PeoplePerception_VisiblePeopleList, PictureDetected, PostureChanged, PostureFamilyChanged, preferenceAdded, preferenceChanged, preferenceDomainRemoved, preferenceRemoved, preferenceSynchronized, RearTactilTouched, RightBumperPressed, redBallDetected, robotHasFallen, robotIsFalling, robotIsWakeUp, robotPoseChanged, Segmentation3D_BlobTrackerUpdated, Segmentation3D_SegmentationUpdated, Segmentation3D_TrackedBlobNotFound, SittingPeopleDetection_PersonSittingDown, SittingPeopleDetection_PersonStandingUp, SonarLeftDetected, SonarLeftNothingDetected, SonarRightDetected, SonarRightNothingDetected, SoundDetected, SpeechDetected, TemperatureDiagnosisErrorChanged, TemperatureStatusChanged, TouchChanged, UserSession_CreatedUsers, UserSession_DeletedUsers, UserSession_FocusedUser, UserSession_NoOpenSessions, UserSession_SessionsClosed, UserSession_SessionsOpened, UserSession_ShouldExitInteractiveActivity, VisualCompass_Deviation, VisualCompass_FinalDeviation, VisualCompass_InvalidReference, VisualCompass_Match, VisualCompass_MoveAbort, VisualCompass_NewReferenceImageSet, WavingDetection_PersonWaving, WavingDetection_PersonWavingCenter, WavingDetection_PersonWavingLeft, WavingDetection_PersonWavingRight, WordRecognized, WordRecognizedAndGrammar
}

interface ISessionConfig {

    host?: string;
    resource?: string;
}

interface ISessionWrapperConfig {

    sessions: ISessionConfig[];
    sessionRetryAttempts: number;


}

interface IHashTable<T> {
    [key: string]: T;
}





/** ngQiSession */
class ngQiSession {

    public qiSession: any;

    public connectionState: ConnectionState;

    public socket: any; //socketIO.Socket;

    private _services: IHashTable<any>;
    private $q: ng.IQService;
    private $log: ng.ILogService; 

    public sessionId: string; 

    constructor($log:ng.ILogService, $q: ng.IQService, host?: string, resource?: string) {
        this._services = {};
        this.qiSession = new QiSession(host, resource);
        this.socket = null;
        this.$q = $q;
        this.$log = $log; 

        if (angular.isDefined(host) && host != null) {
            this.sessionId = host; 

        } else {
            this.sessionId = "localhost";
        }

        this.$log.info('Creating new ngQiSession with sessionId = ' + this.sessionId); 
    }

    /** Retrieve an Al Proxy by enum.*/

    public getALProxy(proxyType: ALProxies) {

        var proxyName: string = ALProxies[proxyType];

        return this._getProxy(proxyName);

    }

    /**Retrieve a Proxy by name, such as for a custom, non-ALProxy */
    public getProxy(proxyName: string): ng.IPromise<any> {

        return this._getProxy(proxyName);
    }

    /** Retrieve a set of proxies by ALProxies enum.*/
    public getALProxies(proxies: Array<ALProxies>): ng.IPromise<any> {

        var promises: Array<ng.IPromise<any>> = [];

        proxies.forEach((value, index, array) => {


            promises.push(this.getALProxy(value));

        });
        return this.$q.all(promises);


    }


    /**get a Set of Multiple Named Proxies. If unable to get all of them, fail the promise.*/
    public getProxies(proxyNames: Array<string>): ng.IPromise<any> {

        var promises: Array<ng.IPromise<any>> = [];

        proxyNames.forEach((value, index, array) => {


            promises.push(this._getProxy(value));

        });
        return this.$q.all(promises);


    }



    private _getSocket(): ng.IPromise<any> {

        var deferral: ng.IDeferred<any> = this.$q.defer();
        var self: ngQiSession = this;

        if (this.connectionState == ConnectionState.Connected) {

            this.$log.info('socket with sessionId=' + self.sessionId + ' already connected');
            deferral.resolve(self.socket);


        }
        else {
            this.socket = this.qiSession.socket().on("connect", () => {

                this.$log.info('successful connection started to sessionId=' + self.sessionId); 
                self.connectionState = ConnectionState.Connected;
                deferral.resolve(self.socket);


            }).on("disconnect", () => {
                this.$log.info('disconnection to sessionId=' + self.sessionId); 
                    self.connectionState = ConnectionState.Disconnected;
                    deferral.reject("disconnect");
                });
        }


        return deferral.promise;
    }

    /**Get a single Aldebaran proxy by name. */
    private _getProxy(proxyName: string): ng.IPromise<any> {

        var deferral: ng.IDeferred<any> = this.$q.defer();
        var self: ngQiSession = this;

        this._getSocket().then(() => {

            var proxy = self._services[proxyName];
            //Remove the words Proxy from the service call.
            //Otherwise you will see something like "An error occurred: Cannot find service 'ALTextToSpeechProxy' in index" 
            var shortProxyName = proxyName.replace(/Proxy/g, ''); 

            if (angular.isDefined(proxy) && proxy != null) {

                self.$log.info('Retrieving existing Proxy object: ' + shortProxyName);

                deferral.resolve(proxy);
            }
            else {
              
                self.$log.info('Attempting to retrieve Proxy: ' + shortProxyName);

                self.qiSession.service(shortProxyName).done((proxy) => {
                    self._services[proxyName] = proxy;
                    self.$log.info('Proxy: ' + shortProxyName + ' successfully retrieved'); 
                    self.$log.log(JSON.stringify(proxy)); 
                    deferral.resolve(proxy);

                }).fail(function (error) {

                        self.$log.error('An error occurred: ' + error); 
                        
                        deferral.reject(error);
                    });
            }
        }, (err) => {
                deferral.reject(err);
            });
        return deferral.promise;
    }
}

class ngQiALMemoryListener {

    private _session: ngQiSession;

    private $rootScope: ng.IRootScopeService;

    private _events: IHashTable<any>;

    private $q: ng.IQService;

    private $log: ng.ILogService; 

    constructor(session: ngQiSession, $rootScope: ng.IRootScopeService, $q: ng.IQService,$log:ng.ILogService) {
        this._session = session;
        this._events = {};
        this.$rootScope = $rootScope;
        this.$q = $q; 
        this.$log = $log; 
    }

   
    

    public subscribe(memoryKey: ALMemoryKeys,id?:number):ng.IPromise<any> {
        var self: ngQiALMemoryListener = this; 

        var deferral = this.$q.defer();
        this._session.getALProxy(ALProxies.ALMemoryProxy).then(
            (proxy) => {
                var key = self.enumToKey(memoryKey, id); 

                var eventExists = this._events[key];

                if (angular.isUndefined(eventExists)) {
                    proxy.subscriber(key).done((subscriber) => {
                        subscriber.signal.connect((...args) => {

                            var eventKey = "ngQiALMemoryListener" + memoryKey.toString();

                            
                            self.$log.info('Received sessionId= ' + self._session.sessionId + ' event, rebroadcasting event:' + eventKey);
                            self.$rootScope.$broadcast(eventKey, self._session.sessionId, args);
                            this._events[key] = true; 
                            deferral.resolve(args);
                        });

                        //subscriber.signal.disconnect((...args) => {
                            // delete this._events[key]; 
                        //});

                    },
                        (err) => {
                            deferral.reject(err);
                        });
                }
            },
            (err) => {
                deferral.reject(err); 
            }

         );

        return deferral.promise; 
    }

    private enumToKey(memoryKey: any, id?: number): string {

        var key = memoryKey;
        key = key.replace(/_/g, '/');

        if (angular.isDefined(id) && id != null) {
            key = key.replace(/$/g, id.toString());
        }

        return key;
    }

}


class ngQiSessionEvent {

    private eventType: ALEvents;
    private $rootScope: ng.IRootScopeService;
    public callback: Function;
    private sessionId: string; 
    public link: number; 


    constructor($rootScope:ng.IRootScopeService,eventType:ALEvents,sessionId:string) {
        var self: ngQiSessionEvent = this;

        this.eventType = eventType;
        this.$rootScope = $rootScope; 
        this.sessionId = sessionId; 

        this.callback = (...args) => {
            //

            //self.sessionId

            self.$rootScope.$broadcast("ngQiSessionEvent" + self.eventType.toString(), self.sessionId, args);
     
        }; 

    }



}

class ngQiSessionEvents {

    private _session: ngQiSession; 

    private $rootScope: ng.IRootScopeService;

    private _events: IHashTable<any>;

    private $q: ng.IQService;

    constructor(session: ngQiSession, $rootScope:ng.IRootScopeService, $q:ng.IQService) {

        this._session = session; 
        this._events = {}; 
        this.$rootScope = $rootScope; 
        this.$q = $q; 
    }

    public subscribeEvent(qiEvent: ALEvents): ng.IPromise<any> {
        var self: ngQiSessionEvents = this; 
        var deferral = this.$q.defer(); 

        var alreadySubscribed = this._events[ALEvents[qiEvent]];

        if (angular.isDefined(alreadySubscribed) && alreadySubscribed != null) {

            deferral.resolve(alreadySubscribed.link);
        }
        else {
            this._session.getALProxy(ALProxies.ALAnimatedSpeechProxy).then(

                (proxy) => {
                    var eventObj = proxy["nameofevent"];
                    var ngQiEvt = new ngQiSessionEvent(self.$rootScope, ALEvents.ActiveDiagnosisErrorChanged, self._session.sessionId);
                    this._events[ALEvents[qiEvent]] = ngQiEvt;

                    eventObj.connect(ngQiEvt.callback).done((link) => {
                        ngQiEvt.link = link;

                        deferral.resolve(link);

                    }).fail((err) => {

                            deferral.reject(err);
                        });

                },
                (err) => {
                    deferral.reject(err);
                }

                );
        }

       // deferral.reject(err);


        return deferral.promise; 
    } 

    public unsubscribeEvent(qiEvent: ALEvents): ng.IPromise<any> {
        var deferral = this.$q.defer();

        var self: ngQiSessionEvents = this;
        var deferral = this.$q.defer();

        var alreadySubscribed = this._events[ALEvents[qiEvent]];

        if (angular.isDefined(alreadySubscribed) && alreadySubscribed != null && alreadySubscribed.link != null) {

            this._session.getALProxy(ALProxies.ALAnimatedSpeechProxy).then(

                (proxy) => {
                    var eventObj = proxy["nameofevent"];
                  
                    eventObj.disconnect(alreadySubscribed.link).done(() => {
                   

                        deferral.resolve();

                    }).fail((err) => {

                            deferral.reject(err);
                        });

                },
                (err) => {
                    deferral.reject(err);
                }

                );


        }

        return deferral.promise;
    } 

}

class ngQiSessionMinder {

    public sessions: IHashTable<ngQiSession>;

    private $log: ng.ILogService; 
    private $q: ng.IQService;

    constructor($log:ng.ILogService,$q: ng.IQService, sessionWrapperConfig: ISessionWrapperConfig) {

        this.sessions = {};

        this.$q = $q;
        this.$log = $log; 

        if (sessionWrapperConfig.sessions != null) {

            sessionWrapperConfig.sessions.forEach((value, index, array) => {


                this.addSession(value.host, value.resource);
            });
        }

    }


    public addSession(host?: string, resource?: string): ngQiSession {

        var session = this.sessions[host];

        if (angular.isUndefined(session) || session == null) {
            this.sessions[host] = new ngQiSession(this.$log,this.$q, host, resource);
            session = this.sessions[host];
        }

        return session;
    }

}


class ngQiTestController {

    constructor(ngQisessionWrapper) {

    }
}

angular.module("ngQi", [])
    .value("QiSession", QiSession)
    .provider("ngQisessionWrapper", function ngQisessionWrapperProvider() {

        var config: ISessionWrapperConfig = { sessions: [{ host: "10.1.0.7" }], sessionRetryAttempts: 2 };





        return {
            setConfig: function (minderConfig) {
                config = minderConfig;
            },

            $get: ['$log', '$q', function ngQisessionWrapperFactory($log, $q) {

                return new ngQiSessionMinder($log,$q, config);
            }]
        };

    })
    .config(["ngQisessionWrapperProvider", function (ngQisessionWrapperProvider) {

        var minderConfig: ISessionWrapperConfig = { sessions: [], sessionRetryAttempts: 2 };

        ngQisessionWrapperProvider.setConfig(minderConfig);


    }])
    .controller("ngQiTestController", ["ngQisessionWrapper", ngQiTestController])
    .directive("ngQiMemoryKey", ["ngQisessionWrapper","$rootScope","$q","$log", (ngQisessionWrapper:ngQiSessionMinder,$rootScope:ng.IRootScopeService,$q,$log) => {

        var session: ngQiSession = ngQisessionWrapper.addSession("10.0.1.7");

        var alMemory=new ngQiALMemoryListener(session, $rootScope, $q,$log);        

        

        var dir: ng.IDirective = {};
        dir.restrict='A';
        dir.template = '<span ng-bind="memoryKey"></span>';
        dir.link = (scope, instanceElement, instanceAttributes) => {
            (<any>scope).memoryKey = null;



            var keyVal = (<any>instanceAttributes).ngQiMemoryKey;

            alMemory.subscribe(keyVal).then((successCallback) => {
             
                $log.info(successCallback); 
            }); 

            $rootScope.$on(keyVal, (event, ...args) => {
                (<any>scope).memoryKey = args[0];

            }); 

        };

        return dir; 
    }]); 











