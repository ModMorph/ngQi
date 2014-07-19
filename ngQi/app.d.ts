﻿/// <reference path="Scripts/typings/socket.io-client/socket.io-client.d.ts" />
/// <reference path="Scripts/typings/angularjs/angular.d.ts" />
declare var QiSession: any;
declare enum ConnectionState {
    Connecting = 0,
    Connected = 1,
    Disconnected = 2,
    Reconnecting = 3,
    Reconnected = 4,
    TimedOut = 5,
}
declare enum ALProxies {
    None = 0,
    AutonomousMovesProxy = 1,
    ALAnimatedSpeechProxy = 2,
    ALAudioSourceLocalizationProxy = 3,
    ALAudioRecorderProxy = 4,
    AutonomousLifeProxy = 5,
    ALAudioPlayerProxy = 6,
    ALBarcodeReaderProxy = 7,
    ALBodyTemperatureProxy = 8,
    ALBacklightingDetectionProxy = 9,
    ALBehaviorManagerProxy = 10,
    ALBonjourProxy = 11,
    ALBatteryProxy = 12,
    ALBasicAwarenessProxy = 13,
    ALColorBlobDetectionProxy = 14,
    ALCloseObjectDetectionProxy = 15,
    ALConnectionManagerProxy = 16,
    ALDarknessDetectionProxy = 17,
    ALDialogProxy = 18,
    ALDiagnosisProxy = 19,
    ALEngagementZonesProxy = 20,
    ALFaceCharacteristicsProxy = 21,
    ALFaceDetectionProxy = 22,
    ALFaceTrackerProxy = 23,
    ALGazeAnalysisProxy = 24,
    ALInfraredProxy = 25,
    ALLandMarkDetectionProxy = 26,
    ALLauncherProxy = 27,
    ALLaserProxy = 28,
    ALLedsProxy = 29,
    ALLoggerProxy = 30,
    ALLocalizationProxy = 31,
    ALMotionRecorderProxy = 32,
    ALMemoryProxy = 33,
    ALMovementDetectionProxy = 34,
    ALMotionProxy = 35,
    ALNavigationProxy = 36,
    ALNotificationManagerProxy = 37,
    ALPreferenceManagerProxy = 38,
    ALPreferencesProxy = 39,
    ALPeoplePerceptionProxy = 40,
    PackageManager = 41,
    ALPhotoCaptureProxy = 42,
    ALRobotPoseProxy = 43,
    ALRedBallDetectionProxy = 44,
    ALRedBallProxy = 45,
    ALResourceManagerProxy = 46,
    ALRobotPostureProxy = 47,
    ALSensorsProxy = 48,
    ALSystemProxy = 49,
    ALSegmentation3DProxy = 50,
    ALSoundDetectionProxy = 51,
    ALSpeechRecognitionProxy = 52,
    ALSoundLocalizationProxy = 53,
    ALTrackerProxy = 54,
    ALTabletService = 55,
    ALTextToSpeechProxy = 56,
    ALTouchProxy = 57,
    ALUserSessionProxy = 58,
    ALVideoRecorderProxy = 59,
    ALVisionRecognitionProxy = 60,
    ALVisualCompassProxy = 61,
    ALVideoDeviceProxy = 62,
    ALVisualSpaceHistoryProxy = 63,
    ALVoiceEmotionAnalysisProxy = 64,
    ALWorldRepresentationProxy = 65,
    ALWavingDetectionProxy = 66,
}
/** / is replaced with _, <ID> where ID is an integer identifier is replaced with $ character  */
declare enum ALMemoryKeys {
    None = 0,
    BacklightingDetection_BacklightingValue = 1,
    CloseObjectDetection_ObjectInfo = 2,
    DarknessDetection_DarknessValue = 3,
    EngagementZones_LastMovementsInZone1 = 4,
    EngagementZones_LastMovementsInZone2 = 5,
    EngagementZones_LastMovementsInZone3 = 6,
    EngagementZones_PeopleInZone1 = 7,
    EngagementZones_PeopleInZone2 = 8,
    EngagementZones_PeopleInZone3 = 9,
    footContact = 10,
    leftFootContact = 11,
    leftFootTotalWeight = 12,
    MovementDetection_MovementInfo = 13,
    PeoplePerception_Person_$_AgeProperties = 14,
    PeoplePerception_Person_$_AnglesYawPitch = 15,
    PeoplePerception_Person_$_Distance = 16,
    PeoplePerception_Person_$_EngagementZone = 17,
    PeoplePerception_Person_$_ExpressionProperties = 18,
    PeoplePerception_Person_$_EyeOpeningDegree = 19,
    PeoplePerception_Person_$_GazeDirection = 20,
    PeoplePerception_Person_$_GenderProperties = 21,
    PeoplePerception_Person_$_HeadAngles = 22,
    PeoplePerception_Person_$_IsFaceDetected = 23,
    PeoplePerception_Person_$_IsLookingAtRobot = 24,
    PeoplePerception_Person_$_IsSitting = 25,
    PeoplePerception_Person_$_IsVisible = 26,
    PeoplePerception_Person_$_IsWaving = 27,
    PeoplePerception_Person_$_IsWavingCenter = 28,
    PeoplePerception_Person_$_IsWavingLeft = 29,
    PeoplePerception_Person_$_IsWavingRight = 30,
    PeoplePerception_Person_$_LookingAtRobotScore = 31,
    PeoplePerception_Person_$_NotSeenSince = 32,
    PeoplePerception_Person_$_PositionInRobotFrame = 33,
    PeoplePerception_Person_$_PositionInTorsoFrame = 34,
    PeoplePerception_Person_$_PositionInWorldFrame = 35,
    PeoplePerception_Person_$_PresentSince = 36,
    PeoplePerception_Person_$_RealHeight = 37,
    PeoplePerception_Person_$_ShirtColor = 38,
    PeoplePerception_Person_$_ShirtColorHSV = 39,
    PeoplePerception_Person_$_SmileProperties = 40,
    rightFootContact = 41,
    rightFootTotalWeight = 42,
    robotPose = 43,
    robotPoseSince = 44,
    Segmentation3D_BlobsList = 45,
    Segmentation3D_TopOfTrackedBlob = 46,
    UserSession_OpenSessions = 47,
    VisualSpaceHistory_VisualGrid_Data = 48,
}
declare enum ALEvents {
    None = 0,
    ALAnimatedSpeech_EndOfAnimatedSpeech = 1,
    ALAudioSourceLocalization_SoundLocated = 2,
    ALBasicAwareness_HumanLost = 3,
    ALBasicAwareness_HumanTracked = 4,
    ALBasicAwareness_StimulusDetected = 5,
    ALBehaviorManager_BehaviorAdded = 6,
    ALBehaviorManager_BehaviorRemoved = 7,
    ALBehaviorManager_BehaviorUpdated = 8,
    ALBehaviorManager_BehaviorsAdded = 9,
    ALChestButton_DoubleClickOccurred = 10,
    ALChestButton_SimpleClickOccurred = 11,
    ALChestButton_TripleClickOccurred = 12,
    ALDiagnosis_RobotIsReady = 13,
    ALLocalization_FullScanBegin = 14,
    ALLocalization_FullScanInsufficient = 15,
    ALLocalization_FullScanSuccess = 16,
    ALLocalization_GoToBegin = 17,
    ALLocalization_GoToFailed = 18,
    ALLocalization_GoToLost = 19,
    ALLocalization_GoToNextMove = 20,
    ALLocalization_GoToSuccess = 21,
    ALLocalization_HalfScanBegin = 22,
    ALLocalization_HalfScanInsufficient = 23,
    ALLocalization_HalfScanSuccess = 24,
    ALLocalization_LocalizeBegin = 25,
    ALLocalization_LocalizeDirectionBegin = 26,
    ALLocalization_LocalizeDirectionLost = 27,
    ALLocalization_LocalizeDirectionSuccess = 28,
    ALLocalization_LocalizeLost = 29,
    ALLocalization_LocalizeSuccess = 30,
    ALLocalization_OdometryBegin = 31,
    ALLocalization_OdometryInsufficient = 32,
    ALLocalization_StartingComputation = 33,
    ALLocalization_StoppingComputation = 34,
    ALLocalization_UTurnEnd = 35,
    ALMemory_KeyAdded = 36,
    ALMemory_KeyRemoved = 37,
    ALMemory_KeyTypeChanged = 38,
    ALMotion_MoveFailed = 39,
    ALMotion_Protection_DisabledDevicesChanged = 40,
    ALMotion_Safety_ChainVelocityClipped = 41,
    ALMotion_Safety_MoveFailed = 42,
    ALMotion_Safety_PushRecovery = 43,
    ALMotion_Safety_RobotPushed = 44,
    ALMotion_Stiffness_restFinished = 45,
    ALMotion_Stiffness_restStarted = 46,
    ALMotion_Stiffness_wakeUpFinished = 47,
    ALMotion_Stiffness_wakeUpStarted = 48,
    ALRecharge_ConnectedToChargingStation = 49,
    ALRecharge_DockingFailed = 50,
    ALRecharge_DockingSuccess = 51,
    ALRecharge_LeaveFailed = 52,
    ALRecharge_LeaveSuccess = 53,
    ALRecharge_MoveFailed = 54,
    ALRecharge_SearchStopped = 55,
    ALRecharge_StationDetected = 56,
    ALRecharge_StationNotFound = 57,
    ALRecharge_StatusChanged = 58,
    ALSoundLocalization_SoundLocated = 59,
    ALSpeechRecognition_ActiveListening = 60,
    ALSpeechRecognition_IsRunning = 61,
    ALSpeechRecognition_Status = 62,
    ALStore_SystemImageDownloaded = 63,
    ALStore_Updated = 64,
    ALSystem_RobotNameChanged = 65,
    ALTabletService_error = 66,
    ALTabletService_message = 67,
    ALTabletService_onInputText = 68,
    ALTextToSpeech_CurrentBookMark = 69,
    ALTextToSpeech_CurrentSentence = 70,
    ALTextToSpeech_CurrentWord = 71,
    ALTextToSpeech_PositionOfCurrentWord = 72,
    ALTextToSpeech_Status = 73,
    ALTextToSpeech_TextDone = 74,
    ALTextToSpeech_TextInterrupted = 75,
    ALTextToSpeech_TextStarted = 76,
    ALTracker_BlobDetected = 77,
    ALTracker_CloseObjectDetected = 78,
    ALTracker_ColorBlobDetected = 79,
    ALVoiceEmotionAnalysis_EmotionRecognized = 80,
    ActiveDiagnosisErrorChanged = 81,
    AutonomousLife_CompletedActivity = 82,
    AutonomousLife_FocusedActivity = 83,
    AutonomousLife_LaunchSuggestions = 84,
    AutonomousLife_NextActivity = 85,
    AutonomousLife_State = 86,
    BacklightingDetection_BacklightingDetected = 87,
    BarcodeReader_BarcodeDetected = 88,
    BatteryChargeCellVoltageMinChanged = 89,
    BatteryChargeChanged = 90,
    BatteryChargingFlagChanged = 91,
    BatteryDisChargingFlagChanged = 92,
    BatteryEmpty = 93,
    BatteryFullChargedFlagChanged = 94,
    BatteryLowDetected = 95,
    BatteryNearlyEmpty = 96,
    BatteryNotDetected = 97,
    BatteryPowerPluggedChanged = 98,
    BehaviorsRun = 99,
    BodyStiffnessChanged = 100,
    ChestButtonPressed = 101,
    ClientConnected = 102,
    ClientDisconnected = 103,
    CloseObjectDetection_ObjectDetected = 104,
    CloseObjectDetection_ObjectNotDetected = 105,
    DarknessDetection_DarknessDetected = 106,
    DeviceNoLongerHotDetected = 107,
    Dialog_Answered = 108,
    Dialog_Failure = 109,
    Dialog_Fallback = 110,
    Dialog_IsStarted = 111,
    Dialog_LastInput = 112,
    Dialog_NotSpeaking10 = 113,
    Dialog_NotSpeaking15 = 114,
    Dialog_NotSpeaking20 = 115,
    Dialog_NotSpeaking5 = 116,
    Dialog_NotUnderstood = 117,
    Dialog_NotUnderstood2 = 118,
    Dialog_NotUnderstood3 = 119,
    Dialog_SameRule = 120,
    EngagementZones_FirstLimitDistanceUpdated = 121,
    EngagementZones_LimitAngleUpdated = 122,
    EngagementZones_MovementsInZonesUpdated = 123,
    EngagementZones_PeopleInZonesUpdated = 124,
    EngagementZones_PersonApproached = 125,
    EngagementZones_PersonEnteredZone1 = 126,
    EngagementZones_PersonEnteredZone2 = 127,
    EngagementZones_PersonEnteredZone3 = 128,
    EngagementZones_PersonMovedAway = 129,
    EngagementZones_SecondLimitDistanceUpdated = 130,
    FaceCharacteristics_PersonSmiling = 131,
    FaceDetected = 132,
    FrontTactilTouched = 133,
    footContactChanged = 134,
    GazeAnalysis_PeopleLookingAtRobot = 135,
    GazeAnalysis_PersonStartsLookingAtRobot = 136,
    GazeAnalysis_PersonStopsLookingAtRobot = 137,
    HandLeftBackTouched = 138,
    HandLeftLeftTouched = 139,
    HandLeftRightTouched = 140,
    HandRightBackTouched = 141,
    HandRightLeftTouched = 142,
    HandRightRightTouched = 143,
    HeadProcessorIsCriticallyHot = 144,
    HeadProcessorIsHot = 145,
    HotDeviceDetected = 146,
    HotJointDetected = 147,
    LandmarkDetected = 148,
    LastWordRecognized = 149,
    LeftBumperPressed = 150,
    MiddleTactilTouched = 151,
    MovementDetection_MovementDetected = 152,
    MovementDetection_NoMovement = 153,
    NAOqiReady = 154,
    Navigation_AvoidanceNavigator_AbsTargetModified = 155,
    Navigation_AvoidanceNavigator_MovingToFreeZone = 156,
    Navigation_AvoidanceNavigator_ObstacleDetected = 157,
    Navigation_AvoidanceNavigator_Status = 158,
    Navigation_AvoidanceNavigator_TrajectoryProgress = 159,
    Navigation_SafeNavigator_AlreadyAtTarget = 160,
    Navigation_SafeNavigator_BlockingObstacle = 161,
    Navigation_SafeNavigator_DangerousObstacleDetected = 162,
    Navigation_SafeNavigator_Status = 163,
    NetworkConnectStatus = 164,
    NetworkDefaultTechnologyChanged = 165,
    NetworkServiceAdded = 166,
    NetworkServiceInputRequired = 167,
    NetworkServiceRemoved = 168,
    NetworkServiceStateChanged = 169,
    NetworkStateChanged = 170,
    NetworkTechnologyAdded = 171,
    NetworkTechnologyRemoved = 172,
    notificationAdded = 173,
    notificationRemoved = 174,
    PassiveDiagnosisErrorChanged = 175,
    PeoplePerception_JustArrived = 176,
    PeoplePerception_JustLeft = 177,
    PeoplePerception_MaximumDetectionRangeUpdated = 178,
    PeoplePerception_NonVisiblePeopleList = 179,
    PeoplePerception_PeopleDetected = 180,
    PeoplePerception_PeopleList = 181,
    PeoplePerception_PopulationUpdated = 182,
    PeoplePerception_VisiblePeopleList = 183,
    PictureDetected = 184,
    PostureChanged = 185,
    PostureFamilyChanged = 186,
    preferenceAdded = 187,
    preferenceChanged = 188,
    preferenceDomainRemoved = 189,
    preferenceRemoved = 190,
    preferenceSynchronized = 191,
    RearTactilTouched = 192,
    RightBumperPressed = 193,
    redBallDetected = 194,
    robotHasFallen = 195,
    robotIsFalling = 196,
    robotIsWakeUp = 197,
    robotPoseChanged = 198,
    Segmentation3D_BlobTrackerUpdated = 199,
    Segmentation3D_SegmentationUpdated = 200,
    Segmentation3D_TrackedBlobNotFound = 201,
    SittingPeopleDetection_PersonSittingDown = 202,
    SittingPeopleDetection_PersonStandingUp = 203,
    SonarLeftDetected = 204,
    SonarLeftNothingDetected = 205,
    SonarRightDetected = 206,
    SonarRightNothingDetected = 207,
    SoundDetected = 208,
    SpeechDetected = 209,
    TemperatureDiagnosisErrorChanged = 210,
    TemperatureStatusChanged = 211,
    TouchChanged = 212,
    UserSession_CreatedUsers = 213,
    UserSession_DeletedUsers = 214,
    UserSession_FocusedUser = 215,
    UserSession_NoOpenSessions = 216,
    UserSession_SessionsClosed = 217,
    UserSession_SessionsOpened = 218,
    UserSession_ShouldExitInteractiveActivity = 219,
    VisualCompass_Deviation = 220,
    VisualCompass_FinalDeviation = 221,
    VisualCompass_InvalidReference = 222,
    VisualCompass_Match = 223,
    VisualCompass_MoveAbort = 224,
    VisualCompass_NewReferenceImageSet = 225,
    WavingDetection_PersonWaving = 226,
    WavingDetection_PersonWavingCenter = 227,
    WavingDetection_PersonWavingLeft = 228,
    WavingDetection_PersonWavingRight = 229,
    WordRecognized = 230,
    WordRecognizedAndGrammar = 231,
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
declare class ngQiSession {
    public qiSession: any;
    public connectionState: ConnectionState;
    public socket: any;
    private _services;
    private $q;
    private $log;
    public sessionId: string;
    constructor($log: ng.ILogService, $q: ng.IQService, host?: string, resource?: string);
    /** Retrieve an Al Proxy by enum.*/
    public getALProxy(proxyType: ALProxies): ng.IPromise<any>;
    /**Retrieve a Proxy by name, such as for a custom, non-ALProxy */
    public getProxy(proxyName: string): ng.IPromise<any>;
    /** Retrieve a set of proxies by ALProxies enum.*/
    public getALProxies(proxies: ALProxies[]): ng.IPromise<any>;
    /**get a Set of Multiple Named Proxies. If unable to get all of them, fail the promise.*/
    public getProxies(proxyNames: string[]): ng.IPromise<any>;
    private _getSocket();
    /**Get a single Aldebaran proxy by name. */
    private _getProxy(proxyName);
}
declare class ngQiALMemoryListener {
    private _session;
    private $rootScope;
    private _events;
    private $q;
    private $log;
    constructor(session: ngQiSession, $rootScope: ng.IRootScopeService, $q: ng.IQService, $log: ng.ILogService);
    public subscribe(memoryKey: ALMemoryKeys, id?: number): ng.IPromise<any>;
    private enumToKey(memoryKey, id?);
}
declare class ngQiSessionEvent {
    private eventType;
    private $rootScope;
    public callback: Function;
    private sessionId;
    public link: number;
    constructor($rootScope: ng.IRootScopeService, eventType: ALEvents, sessionId: string);
}
declare class ngQiSessionEvents {
    private _session;
    private $rootScope;
    private _events;
    private $q;
    constructor(session: ngQiSession, $rootScope: ng.IRootScopeService, $q: ng.IQService);
    public subscribeEvent(qiEvent: ALEvents): ng.IPromise<any>;
    public unsubscribeEvent(qiEvent: ALEvents): ng.IPromise<any>;
}
declare class ngQiSessionMinder {
    public sessions: IHashTable<ngQiSession>;
    private $log;
    private $q;
    constructor($log: ng.ILogService, $q: ng.IQService, sessionWrapperConfig: ISessionWrapperConfig);
    public addSession(host?: string, resource?: string): ngQiSession;
}
declare class ngQiTestController {
    constructor(ngQisessionWrapper: any);
}
