/// <reference path="scripts/typings/socket.io-client/socket.io-client.d.ts" />
/// <reference path="scripts/typings/angularjs/angular.d.ts" />

var ConnectionState;
(function (ConnectionState) {
    ConnectionState[ConnectionState["Connecting"] = 0] = "Connecting";
    ConnectionState[ConnectionState["Connected"] = 1] = "Connected";
    ConnectionState[ConnectionState["Disconnected"] = 2] = "Disconnected";
    ConnectionState[ConnectionState["Reconnecting"] = 3] = "Reconnecting";
    ConnectionState[ConnectionState["Reconnected"] = 4] = "Reconnected";
    ConnectionState[ConnectionState["TimedOut"] = 5] = "TimedOut";
})(ConnectionState || (ConnectionState = {}));
;

var ALProxies;
(function (ALProxies) {
    ALProxies[ALProxies["None"] = 0] = "None";
    ALProxies[ALProxies["AutonomousMovesProxy"] = 1] = "AutonomousMovesProxy";
    ALProxies[ALProxies["ALAnimatedSpeechProxy"] = 2] = "ALAnimatedSpeechProxy";
    ALProxies[ALProxies["ALAudioSourceLocalizationProxy"] = 3] = "ALAudioSourceLocalizationProxy";
    ALProxies[ALProxies["ALAudioRecorderProxy"] = 4] = "ALAudioRecorderProxy";
    ALProxies[ALProxies["AutonomousLifeProxy"] = 5] = "AutonomousLifeProxy";
    ALProxies[ALProxies["ALAudioPlayerProxy"] = 6] = "ALAudioPlayerProxy";
    ALProxies[ALProxies["ALBarcodeReaderProxy"] = 7] = "ALBarcodeReaderProxy";
    ALProxies[ALProxies["ALBodyTemperatureProxy"] = 8] = "ALBodyTemperatureProxy";
    ALProxies[ALProxies["ALBacklightingDetectionProxy"] = 9] = "ALBacklightingDetectionProxy";
    ALProxies[ALProxies["ALBehaviorManagerProxy"] = 10] = "ALBehaviorManagerProxy";
    ALProxies[ALProxies["ALBonjourProxy"] = 11] = "ALBonjourProxy";
    ALProxies[ALProxies["ALBatteryProxy"] = 12] = "ALBatteryProxy";
    ALProxies[ALProxies["ALBasicAwarenessProxy"] = 13] = "ALBasicAwarenessProxy";
    ALProxies[ALProxies["ALColorBlobDetectionProxy"] = 14] = "ALColorBlobDetectionProxy";
    ALProxies[ALProxies["ALCloseObjectDetectionProxy"] = 15] = "ALCloseObjectDetectionProxy";
    ALProxies[ALProxies["ALConnectionManagerProxy"] = 16] = "ALConnectionManagerProxy";
    ALProxies[ALProxies["ALDarknessDetectionProxy"] = 17] = "ALDarknessDetectionProxy";
    ALProxies[ALProxies["ALDialogProxy"] = 18] = "ALDialogProxy";
    ALProxies[ALProxies["ALDiagnosisProxy"] = 19] = "ALDiagnosisProxy";
    ALProxies[ALProxies["ALEngagementZonesProxy"] = 20] = "ALEngagementZonesProxy";
    ALProxies[ALProxies["ALFaceCharacteristicsProxy"] = 21] = "ALFaceCharacteristicsProxy";
    ALProxies[ALProxies["ALFaceDetectionProxy"] = 22] = "ALFaceDetectionProxy";
    ALProxies[ALProxies["ALFaceTrackerProxy"] = 23] = "ALFaceTrackerProxy";
    ALProxies[ALProxies["ALGazeAnalysisProxy"] = 24] = "ALGazeAnalysisProxy";
    ALProxies[ALProxies["ALInfraredProxy"] = 25] = "ALInfraredProxy";
    ALProxies[ALProxies["ALLandMarkDetectionProxy"] = 26] = "ALLandMarkDetectionProxy";
    ALProxies[ALProxies["ALLauncherProxy"] = 27] = "ALLauncherProxy";
    ALProxies[ALProxies["ALLaserProxy"] = 28] = "ALLaserProxy";
    ALProxies[ALProxies["ALLedsProxy"] = 29] = "ALLedsProxy";
    ALProxies[ALProxies["ALLoggerProxy"] = 30] = "ALLoggerProxy";
    ALProxies[ALProxies["ALLocalizationProxy"] = 31] = "ALLocalizationProxy";
    ALProxies[ALProxies["ALMotionRecorderProxy"] = 32] = "ALMotionRecorderProxy";
    ALProxies[ALProxies["ALMemoryProxy"] = 33] = "ALMemoryProxy";
    ALProxies[ALProxies["ALMovementDetectionProxy"] = 34] = "ALMovementDetectionProxy";
    ALProxies[ALProxies["ALMotionProxy"] = 35] = "ALMotionProxy";
    ALProxies[ALProxies["ALNavigationProxy"] = 36] = "ALNavigationProxy";
    ALProxies[ALProxies["ALNotificationManagerProxy"] = 37] = "ALNotificationManagerProxy";
    ALProxies[ALProxies["ALPreferenceManagerProxy"] = 38] = "ALPreferenceManagerProxy";
    ALProxies[ALProxies["ALPreferencesProxy"] = 39] = "ALPreferencesProxy";
    ALProxies[ALProxies["ALPeoplePerceptionProxy"] = 40] = "ALPeoplePerceptionProxy";
    ALProxies[ALProxies["PackageManager"] = 41] = "PackageManager";
    ALProxies[ALProxies["ALPhotoCaptureProxy"] = 42] = "ALPhotoCaptureProxy";
    ALProxies[ALProxies["ALRobotPoseProxy"] = 43] = "ALRobotPoseProxy";
    ALProxies[ALProxies["ALRedBallDetectionProxy"] = 44] = "ALRedBallDetectionProxy";
    ALProxies[ALProxies["ALRedBallProxy"] = 45] = "ALRedBallProxy";
    ALProxies[ALProxies["ALResourceManagerProxy"] = 46] = "ALResourceManagerProxy";
    ALProxies[ALProxies["ALRobotPostureProxy"] = 47] = "ALRobotPostureProxy";
    ALProxies[ALProxies["ALSensorsProxy"] = 48] = "ALSensorsProxy";
    ALProxies[ALProxies["ALSystemProxy"] = 49] = "ALSystemProxy";
    ALProxies[ALProxies["ALSegmentation3DProxy"] = 50] = "ALSegmentation3DProxy";
    ALProxies[ALProxies["ALSoundDetectionProxy"] = 51] = "ALSoundDetectionProxy";
    ALProxies[ALProxies["ALSpeechRecognitionProxy"] = 52] = "ALSpeechRecognitionProxy";
    ALProxies[ALProxies["ALSoundLocalizationProxy"] = 53] = "ALSoundLocalizationProxy";
    ALProxies[ALProxies["ALTrackerProxy"] = 54] = "ALTrackerProxy";
    ALProxies[ALProxies["ALTabletService"] = 55] = "ALTabletService";
    ALProxies[ALProxies["ALTextToSpeechProxy"] = 56] = "ALTextToSpeechProxy";
    ALProxies[ALProxies["ALTouchProxy"] = 57] = "ALTouchProxy";
    ALProxies[ALProxies["ALUserSessionProxy"] = 58] = "ALUserSessionProxy";
    ALProxies[ALProxies["ALVideoRecorderProxy"] = 59] = "ALVideoRecorderProxy";
    ALProxies[ALProxies["ALVisionRecognitionProxy"] = 60] = "ALVisionRecognitionProxy";
    ALProxies[ALProxies["ALVisualCompassProxy"] = 61] = "ALVisualCompassProxy";
    ALProxies[ALProxies["ALVideoDeviceProxy"] = 62] = "ALVideoDeviceProxy";
    ALProxies[ALProxies["ALVisualSpaceHistoryProxy"] = 63] = "ALVisualSpaceHistoryProxy";
    ALProxies[ALProxies["ALVoiceEmotionAnalysisProxy"] = 64] = "ALVoiceEmotionAnalysisProxy";
    ALProxies[ALProxies["ALWorldRepresentationProxy"] = 65] = "ALWorldRepresentationProxy";
    ALProxies[ALProxies["ALWavingDetectionProxy"] = 66] = "ALWavingDetectionProxy";
})(ALProxies || (ALProxies = {}));
;

/** / is replaced with _, <ID> where ID is an integer identifier is replaced with $ character  */
var ALMemoryKeys;
(function (ALMemoryKeys) {
    ALMemoryKeys[ALMemoryKeys["None"] = 0] = "None";
    ALMemoryKeys[ALMemoryKeys["BacklightingDetection_BacklightingValue"] = 1] = "BacklightingDetection_BacklightingValue";
    ALMemoryKeys[ALMemoryKeys["CloseObjectDetection_ObjectInfo"] = 2] = "CloseObjectDetection_ObjectInfo";
    ALMemoryKeys[ALMemoryKeys["DarknessDetection_DarknessValue"] = 3] = "DarknessDetection_DarknessValue";
    ALMemoryKeys[ALMemoryKeys["EngagementZones_LastMovementsInZone1"] = 4] = "EngagementZones_LastMovementsInZone1";
    ALMemoryKeys[ALMemoryKeys["EngagementZones_LastMovementsInZone2"] = 5] = "EngagementZones_LastMovementsInZone2";
    ALMemoryKeys[ALMemoryKeys["EngagementZones_LastMovementsInZone3"] = 6] = "EngagementZones_LastMovementsInZone3";
    ALMemoryKeys[ALMemoryKeys["EngagementZones_PeopleInZone1"] = 7] = "EngagementZones_PeopleInZone1";
    ALMemoryKeys[ALMemoryKeys["EngagementZones_PeopleInZone2"] = 8] = "EngagementZones_PeopleInZone2";
    ALMemoryKeys[ALMemoryKeys["EngagementZones_PeopleInZone3"] = 9] = "EngagementZones_PeopleInZone3";
    ALMemoryKeys[ALMemoryKeys["footContact"] = 10] = "footContact";
    ALMemoryKeys[ALMemoryKeys["leftFootContact"] = 11] = "leftFootContact";
    ALMemoryKeys[ALMemoryKeys["leftFootTotalWeight"] = 12] = "leftFootTotalWeight";
    ALMemoryKeys[ALMemoryKeys["MovementDetection_MovementInfo"] = 13] = "MovementDetection_MovementInfo";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_AgeProperties"] = 14] = "PeoplePerception_Person_$_AgeProperties";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_AnglesYawPitch"] = 15] = "PeoplePerception_Person_$_AnglesYawPitch";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_Distance"] = 16] = "PeoplePerception_Person_$_Distance";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_EngagementZone"] = 17] = "PeoplePerception_Person_$_EngagementZone";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_ExpressionProperties"] = 18] = "PeoplePerception_Person_$_ExpressionProperties";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_EyeOpeningDegree"] = 19] = "PeoplePerception_Person_$_EyeOpeningDegree";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_GazeDirection"] = 20] = "PeoplePerception_Person_$_GazeDirection";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_GenderProperties"] = 21] = "PeoplePerception_Person_$_GenderProperties";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_HeadAngles"] = 22] = "PeoplePerception_Person_$_HeadAngles";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsFaceDetected"] = 23] = "PeoplePerception_Person_$_IsFaceDetected";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsLookingAtRobot"] = 24] = "PeoplePerception_Person_$_IsLookingAtRobot";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsSitting"] = 25] = "PeoplePerception_Person_$_IsSitting";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsVisible"] = 26] = "PeoplePerception_Person_$_IsVisible";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsWaving"] = 27] = "PeoplePerception_Person_$_IsWaving";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsWavingCenter"] = 28] = "PeoplePerception_Person_$_IsWavingCenter";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsWavingLeft"] = 29] = "PeoplePerception_Person_$_IsWavingLeft";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_IsWavingRight"] = 30] = "PeoplePerception_Person_$_IsWavingRight";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_LookingAtRobotScore"] = 31] = "PeoplePerception_Person_$_LookingAtRobotScore";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_NotSeenSince"] = 32] = "PeoplePerception_Person_$_NotSeenSince";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_PositionInRobotFrame"] = 33] = "PeoplePerception_Person_$_PositionInRobotFrame";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_PositionInTorsoFrame"] = 34] = "PeoplePerception_Person_$_PositionInTorsoFrame";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_PositionInWorldFrame"] = 35] = "PeoplePerception_Person_$_PositionInWorldFrame";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_PresentSince"] = 36] = "PeoplePerception_Person_$_PresentSince";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_RealHeight"] = 37] = "PeoplePerception_Person_$_RealHeight";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_ShirtColor"] = 38] = "PeoplePerception_Person_$_ShirtColor";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_ShirtColorHSV"] = 39] = "PeoplePerception_Person_$_ShirtColorHSV";
    ALMemoryKeys[ALMemoryKeys["PeoplePerception_Person_$_SmileProperties"] = 40] = "PeoplePerception_Person_$_SmileProperties";
    ALMemoryKeys[ALMemoryKeys["rightFootContact"] = 41] = "rightFootContact";
    ALMemoryKeys[ALMemoryKeys["rightFootTotalWeight"] = 42] = "rightFootTotalWeight";
    ALMemoryKeys[ALMemoryKeys["robotPose"] = 43] = "robotPose";
    ALMemoryKeys[ALMemoryKeys["robotPoseSince"] = 44] = "robotPoseSince";
    ALMemoryKeys[ALMemoryKeys["Segmentation3D_BlobsList"] = 45] = "Segmentation3D_BlobsList";
    ALMemoryKeys[ALMemoryKeys["Segmentation3D_TopOfTrackedBlob"] = 46] = "Segmentation3D_TopOfTrackedBlob";
    ALMemoryKeys[ALMemoryKeys["UserSession_OpenSessions"] = 47] = "UserSession_OpenSessions";
    ALMemoryKeys[ALMemoryKeys["VisualSpaceHistory_VisualGrid_Data"] = 48] = "VisualSpaceHistory_VisualGrid_Data";
})(ALMemoryKeys || (ALMemoryKeys = {}));

var ALEvents;
(function (ALEvents) {
    ALEvents[ALEvents["None"] = 0] = "None";
    ALEvents[ALEvents["ALAnimatedSpeech_EndOfAnimatedSpeech"] = 1] = "ALAnimatedSpeech_EndOfAnimatedSpeech";
    ALEvents[ALEvents["ALAudioSourceLocalization_SoundLocated"] = 2] = "ALAudioSourceLocalization_SoundLocated";
    ALEvents[ALEvents["ALBasicAwareness_HumanLost"] = 3] = "ALBasicAwareness_HumanLost";
    ALEvents[ALEvents["ALBasicAwareness_HumanTracked"] = 4] = "ALBasicAwareness_HumanTracked";
    ALEvents[ALEvents["ALBasicAwareness_StimulusDetected"] = 5] = "ALBasicAwareness_StimulusDetected";
    ALEvents[ALEvents["ALBehaviorManager_BehaviorAdded"] = 6] = "ALBehaviorManager_BehaviorAdded";
    ALEvents[ALEvents["ALBehaviorManager_BehaviorRemoved"] = 7] = "ALBehaviorManager_BehaviorRemoved";
    ALEvents[ALEvents["ALBehaviorManager_BehaviorUpdated"] = 8] = "ALBehaviorManager_BehaviorUpdated";
    ALEvents[ALEvents["ALBehaviorManager_BehaviorsAdded"] = 9] = "ALBehaviorManager_BehaviorsAdded";
    ALEvents[ALEvents["ALChestButton_DoubleClickOccurred"] = 10] = "ALChestButton_DoubleClickOccurred";
    ALEvents[ALEvents["ALChestButton_SimpleClickOccurred"] = 11] = "ALChestButton_SimpleClickOccurred";
    ALEvents[ALEvents["ALChestButton_TripleClickOccurred"] = 12] = "ALChestButton_TripleClickOccurred";
    ALEvents[ALEvents["ALDiagnosis_RobotIsReady"] = 13] = "ALDiagnosis_RobotIsReady";
    ALEvents[ALEvents["ALLocalization_FullScanBegin"] = 14] = "ALLocalization_FullScanBegin";
    ALEvents[ALEvents["ALLocalization_FullScanInsufficient"] = 15] = "ALLocalization_FullScanInsufficient";
    ALEvents[ALEvents["ALLocalization_FullScanSuccess"] = 16] = "ALLocalization_FullScanSuccess";
    ALEvents[ALEvents["ALLocalization_GoToBegin"] = 17] = "ALLocalization_GoToBegin";
    ALEvents[ALEvents["ALLocalization_GoToFailed"] = 18] = "ALLocalization_GoToFailed";
    ALEvents[ALEvents["ALLocalization_GoToLost"] = 19] = "ALLocalization_GoToLost";
    ALEvents[ALEvents["ALLocalization_GoToNextMove"] = 20] = "ALLocalization_GoToNextMove";
    ALEvents[ALEvents["ALLocalization_GoToSuccess"] = 21] = "ALLocalization_GoToSuccess";
    ALEvents[ALEvents["ALLocalization_HalfScanBegin"] = 22] = "ALLocalization_HalfScanBegin";
    ALEvents[ALEvents["ALLocalization_HalfScanInsufficient"] = 23] = "ALLocalization_HalfScanInsufficient";
    ALEvents[ALEvents["ALLocalization_HalfScanSuccess"] = 24] = "ALLocalization_HalfScanSuccess";
    ALEvents[ALEvents["ALLocalization_LocalizeBegin"] = 25] = "ALLocalization_LocalizeBegin";
    ALEvents[ALEvents["ALLocalization_LocalizeDirectionBegin"] = 26] = "ALLocalization_LocalizeDirectionBegin";
    ALEvents[ALEvents["ALLocalization_LocalizeDirectionLost"] = 27] = "ALLocalization_LocalizeDirectionLost";
    ALEvents[ALEvents["ALLocalization_LocalizeDirectionSuccess"] = 28] = "ALLocalization_LocalizeDirectionSuccess";
    ALEvents[ALEvents["ALLocalization_LocalizeLost"] = 29] = "ALLocalization_LocalizeLost";
    ALEvents[ALEvents["ALLocalization_LocalizeSuccess"] = 30] = "ALLocalization_LocalizeSuccess";
    ALEvents[ALEvents["ALLocalization_OdometryBegin"] = 31] = "ALLocalization_OdometryBegin";
    ALEvents[ALEvents["ALLocalization_OdometryInsufficient"] = 32] = "ALLocalization_OdometryInsufficient";
    ALEvents[ALEvents["ALLocalization_StartingComputation"] = 33] = "ALLocalization_StartingComputation";
    ALEvents[ALEvents["ALLocalization_StoppingComputation"] = 34] = "ALLocalization_StoppingComputation";
    ALEvents[ALEvents["ALLocalization_UTurnEnd"] = 35] = "ALLocalization_UTurnEnd";
    ALEvents[ALEvents["ALMemory_KeyAdded"] = 36] = "ALMemory_KeyAdded";
    ALEvents[ALEvents["ALMemory_KeyRemoved"] = 37] = "ALMemory_KeyRemoved";
    ALEvents[ALEvents["ALMemory_KeyTypeChanged"] = 38] = "ALMemory_KeyTypeChanged";
    ALEvents[ALEvents["ALMotion_MoveFailed"] = 39] = "ALMotion_MoveFailed";
    ALEvents[ALEvents["ALMotion_Protection_DisabledDevicesChanged"] = 40] = "ALMotion_Protection_DisabledDevicesChanged";
    ALEvents[ALEvents["ALMotion_Safety_ChainVelocityClipped"] = 41] = "ALMotion_Safety_ChainVelocityClipped";
    ALEvents[ALEvents["ALMotion_Safety_MoveFailed"] = 42] = "ALMotion_Safety_MoveFailed";
    ALEvents[ALEvents["ALMotion_Safety_PushRecovery"] = 43] = "ALMotion_Safety_PushRecovery";
    ALEvents[ALEvents["ALMotion_Safety_RobotPushed"] = 44] = "ALMotion_Safety_RobotPushed";
    ALEvents[ALEvents["ALMotion_Stiffness_restFinished"] = 45] = "ALMotion_Stiffness_restFinished";
    ALEvents[ALEvents["ALMotion_Stiffness_restStarted"] = 46] = "ALMotion_Stiffness_restStarted";
    ALEvents[ALEvents["ALMotion_Stiffness_wakeUpFinished"] = 47] = "ALMotion_Stiffness_wakeUpFinished";
    ALEvents[ALEvents["ALMotion_Stiffness_wakeUpStarted"] = 48] = "ALMotion_Stiffness_wakeUpStarted";
    ALEvents[ALEvents["ALRecharge_ConnectedToChargingStation"] = 49] = "ALRecharge_ConnectedToChargingStation";
    ALEvents[ALEvents["ALRecharge_DockingFailed"] = 50] = "ALRecharge_DockingFailed";
    ALEvents[ALEvents["ALRecharge_DockingSuccess"] = 51] = "ALRecharge_DockingSuccess";
    ALEvents[ALEvents["ALRecharge_LeaveFailed"] = 52] = "ALRecharge_LeaveFailed";
    ALEvents[ALEvents["ALRecharge_LeaveSuccess"] = 53] = "ALRecharge_LeaveSuccess";
    ALEvents[ALEvents["ALRecharge_MoveFailed"] = 54] = "ALRecharge_MoveFailed";
    ALEvents[ALEvents["ALRecharge_SearchStopped"] = 55] = "ALRecharge_SearchStopped";
    ALEvents[ALEvents["ALRecharge_StationDetected"] = 56] = "ALRecharge_StationDetected";
    ALEvents[ALEvents["ALRecharge_StationNotFound"] = 57] = "ALRecharge_StationNotFound";
    ALEvents[ALEvents["ALRecharge_StatusChanged"] = 58] = "ALRecharge_StatusChanged";
    ALEvents[ALEvents["ALSoundLocalization_SoundLocated"] = 59] = "ALSoundLocalization_SoundLocated";
    ALEvents[ALEvents["ALSpeechRecognition_ActiveListening"] = 60] = "ALSpeechRecognition_ActiveListening";
    ALEvents[ALEvents["ALSpeechRecognition_IsRunning"] = 61] = "ALSpeechRecognition_IsRunning";
    ALEvents[ALEvents["ALSpeechRecognition_Status"] = 62] = "ALSpeechRecognition_Status";
    ALEvents[ALEvents["ALStore_SystemImageDownloaded"] = 63] = "ALStore_SystemImageDownloaded";
    ALEvents[ALEvents["ALStore_Updated"] = 64] = "ALStore_Updated";
    ALEvents[ALEvents["ALSystem_RobotNameChanged"] = 65] = "ALSystem_RobotNameChanged";
    ALEvents[ALEvents["ALTabletService_error"] = 66] = "ALTabletService_error";
    ALEvents[ALEvents["ALTabletService_message"] = 67] = "ALTabletService_message";
    ALEvents[ALEvents["ALTabletService_onInputText"] = 68] = "ALTabletService_onInputText";
    ALEvents[ALEvents["ALTextToSpeech_CurrentBookMark"] = 69] = "ALTextToSpeech_CurrentBookMark";
    ALEvents[ALEvents["ALTextToSpeech_CurrentSentence"] = 70] = "ALTextToSpeech_CurrentSentence";
    ALEvents[ALEvents["ALTextToSpeech_CurrentWord"] = 71] = "ALTextToSpeech_CurrentWord";
    ALEvents[ALEvents["ALTextToSpeech_PositionOfCurrentWord"] = 72] = "ALTextToSpeech_PositionOfCurrentWord";
    ALEvents[ALEvents["ALTextToSpeech_Status"] = 73] = "ALTextToSpeech_Status";
    ALEvents[ALEvents["ALTextToSpeech_TextDone"] = 74] = "ALTextToSpeech_TextDone";
    ALEvents[ALEvents["ALTextToSpeech_TextInterrupted"] = 75] = "ALTextToSpeech_TextInterrupted";
    ALEvents[ALEvents["ALTextToSpeech_TextStarted"] = 76] = "ALTextToSpeech_TextStarted";
    ALEvents[ALEvents["ALTracker_BlobDetected"] = 77] = "ALTracker_BlobDetected";
    ALEvents[ALEvents["ALTracker_CloseObjectDetected"] = 78] = "ALTracker_CloseObjectDetected";
    ALEvents[ALEvents["ALTracker_ColorBlobDetected"] = 79] = "ALTracker_ColorBlobDetected";
    ALEvents[ALEvents["ALVoiceEmotionAnalysis_EmotionRecognized"] = 80] = "ALVoiceEmotionAnalysis_EmotionRecognized";
    ALEvents[ALEvents["ActiveDiagnosisErrorChanged"] = 81] = "ActiveDiagnosisErrorChanged";
    ALEvents[ALEvents["AutonomousLife_CompletedActivity"] = 82] = "AutonomousLife_CompletedActivity";
    ALEvents[ALEvents["AutonomousLife_FocusedActivity"] = 83] = "AutonomousLife_FocusedActivity";
    ALEvents[ALEvents["AutonomousLife_LaunchSuggestions"] = 84] = "AutonomousLife_LaunchSuggestions";
    ALEvents[ALEvents["AutonomousLife_NextActivity"] = 85] = "AutonomousLife_NextActivity";
    ALEvents[ALEvents["AutonomousLife_State"] = 86] = "AutonomousLife_State";
    ALEvents[ALEvents["BacklightingDetection_BacklightingDetected"] = 87] = "BacklightingDetection_BacklightingDetected";
    ALEvents[ALEvents["BarcodeReader_BarcodeDetected"] = 88] = "BarcodeReader_BarcodeDetected";
    ALEvents[ALEvents["BatteryChargeCellVoltageMinChanged"] = 89] = "BatteryChargeCellVoltageMinChanged";
    ALEvents[ALEvents["BatteryChargeChanged"] = 90] = "BatteryChargeChanged";
    ALEvents[ALEvents["BatteryChargingFlagChanged"] = 91] = "BatteryChargingFlagChanged";
    ALEvents[ALEvents["BatteryDisChargingFlagChanged"] = 92] = "BatteryDisChargingFlagChanged";
    ALEvents[ALEvents["BatteryEmpty"] = 93] = "BatteryEmpty";
    ALEvents[ALEvents["BatteryFullChargedFlagChanged"] = 94] = "BatteryFullChargedFlagChanged";
    ALEvents[ALEvents["BatteryLowDetected"] = 95] = "BatteryLowDetected";
    ALEvents[ALEvents["BatteryNearlyEmpty"] = 96] = "BatteryNearlyEmpty";
    ALEvents[ALEvents["BatteryNotDetected"] = 97] = "BatteryNotDetected";
    ALEvents[ALEvents["BatteryPowerPluggedChanged"] = 98] = "BatteryPowerPluggedChanged";
    ALEvents[ALEvents["BehaviorsRun"] = 99] = "BehaviorsRun";
    ALEvents[ALEvents["BodyStiffnessChanged"] = 100] = "BodyStiffnessChanged";
    ALEvents[ALEvents["ChestButtonPressed"] = 101] = "ChestButtonPressed";
    ALEvents[ALEvents["ClientConnected"] = 102] = "ClientConnected";
    ALEvents[ALEvents["ClientDisconnected"] = 103] = "ClientDisconnected";
    ALEvents[ALEvents["CloseObjectDetection_ObjectDetected"] = 104] = "CloseObjectDetection_ObjectDetected";
    ALEvents[ALEvents["CloseObjectDetection_ObjectNotDetected"] = 105] = "CloseObjectDetection_ObjectNotDetected";
    ALEvents[ALEvents["DarknessDetection_DarknessDetected"] = 106] = "DarknessDetection_DarknessDetected";
    ALEvents[ALEvents["DeviceNoLongerHotDetected"] = 107] = "DeviceNoLongerHotDetected";
    ALEvents[ALEvents["Dialog_Answered"] = 108] = "Dialog_Answered";
    ALEvents[ALEvents["Dialog_Failure"] = 109] = "Dialog_Failure";
    ALEvents[ALEvents["Dialog_Fallback"] = 110] = "Dialog_Fallback";
    ALEvents[ALEvents["Dialog_IsStarted"] = 111] = "Dialog_IsStarted";
    ALEvents[ALEvents["Dialog_LastInput"] = 112] = "Dialog_LastInput";
    ALEvents[ALEvents["Dialog_NotSpeaking10"] = 113] = "Dialog_NotSpeaking10";
    ALEvents[ALEvents["Dialog_NotSpeaking15"] = 114] = "Dialog_NotSpeaking15";
    ALEvents[ALEvents["Dialog_NotSpeaking20"] = 115] = "Dialog_NotSpeaking20";
    ALEvents[ALEvents["Dialog_NotSpeaking5"] = 116] = "Dialog_NotSpeaking5";
    ALEvents[ALEvents["Dialog_NotUnderstood"] = 117] = "Dialog_NotUnderstood";
    ALEvents[ALEvents["Dialog_NotUnderstood2"] = 118] = "Dialog_NotUnderstood2";
    ALEvents[ALEvents["Dialog_NotUnderstood3"] = 119] = "Dialog_NotUnderstood3";
    ALEvents[ALEvents["Dialog_SameRule"] = 120] = "Dialog_SameRule";
    ALEvents[ALEvents["EngagementZones_FirstLimitDistanceUpdated"] = 121] = "EngagementZones_FirstLimitDistanceUpdated";
    ALEvents[ALEvents["EngagementZones_LimitAngleUpdated"] = 122] = "EngagementZones_LimitAngleUpdated";
    ALEvents[ALEvents["EngagementZones_MovementsInZonesUpdated"] = 123] = "EngagementZones_MovementsInZonesUpdated";
    ALEvents[ALEvents["EngagementZones_PeopleInZonesUpdated"] = 124] = "EngagementZones_PeopleInZonesUpdated";
    ALEvents[ALEvents["EngagementZones_PersonApproached"] = 125] = "EngagementZones_PersonApproached";
    ALEvents[ALEvents["EngagementZones_PersonEnteredZone1"] = 126] = "EngagementZones_PersonEnteredZone1";
    ALEvents[ALEvents["EngagementZones_PersonEnteredZone2"] = 127] = "EngagementZones_PersonEnteredZone2";
    ALEvents[ALEvents["EngagementZones_PersonEnteredZone3"] = 128] = "EngagementZones_PersonEnteredZone3";
    ALEvents[ALEvents["EngagementZones_PersonMovedAway"] = 129] = "EngagementZones_PersonMovedAway";
    ALEvents[ALEvents["EngagementZones_SecondLimitDistanceUpdated"] = 130] = "EngagementZones_SecondLimitDistanceUpdated";
    ALEvents[ALEvents["FaceCharacteristics_PersonSmiling"] = 131] = "FaceCharacteristics_PersonSmiling";
    ALEvents[ALEvents["FaceDetected"] = 132] = "FaceDetected";
    ALEvents[ALEvents["FrontTactilTouched"] = 133] = "FrontTactilTouched";
    ALEvents[ALEvents["footContactChanged"] = 134] = "footContactChanged";
    ALEvents[ALEvents["GazeAnalysis_PeopleLookingAtRobot"] = 135] = "GazeAnalysis_PeopleLookingAtRobot";
    ALEvents[ALEvents["GazeAnalysis_PersonStartsLookingAtRobot"] = 136] = "GazeAnalysis_PersonStartsLookingAtRobot";
    ALEvents[ALEvents["GazeAnalysis_PersonStopsLookingAtRobot"] = 137] = "GazeAnalysis_PersonStopsLookingAtRobot";
    ALEvents[ALEvents["HandLeftBackTouched"] = 138] = "HandLeftBackTouched";
    ALEvents[ALEvents["HandLeftLeftTouched"] = 139] = "HandLeftLeftTouched";
    ALEvents[ALEvents["HandLeftRightTouched"] = 140] = "HandLeftRightTouched";
    ALEvents[ALEvents["HandRightBackTouched"] = 141] = "HandRightBackTouched";
    ALEvents[ALEvents["HandRightLeftTouched"] = 142] = "HandRightLeftTouched";
    ALEvents[ALEvents["HandRightRightTouched"] = 143] = "HandRightRightTouched";
    ALEvents[ALEvents["HeadProcessorIsCriticallyHot"] = 144] = "HeadProcessorIsCriticallyHot";
    ALEvents[ALEvents["HeadProcessorIsHot"] = 145] = "HeadProcessorIsHot";
    ALEvents[ALEvents["HotDeviceDetected"] = 146] = "HotDeviceDetected";
    ALEvents[ALEvents["HotJointDetected"] = 147] = "HotJointDetected";
    ALEvents[ALEvents["LandmarkDetected"] = 148] = "LandmarkDetected";
    ALEvents[ALEvents["LastWordRecognized"] = 149] = "LastWordRecognized";
    ALEvents[ALEvents["LeftBumperPressed"] = 150] = "LeftBumperPressed";
    ALEvents[ALEvents["MiddleTactilTouched"] = 151] = "MiddleTactilTouched";
    ALEvents[ALEvents["MovementDetection_MovementDetected"] = 152] = "MovementDetection_MovementDetected";
    ALEvents[ALEvents["MovementDetection_NoMovement"] = 153] = "MovementDetection_NoMovement";
    ALEvents[ALEvents["NAOqiReady"] = 154] = "NAOqiReady";
    ALEvents[ALEvents["Navigation_AvoidanceNavigator_AbsTargetModified"] = 155] = "Navigation_AvoidanceNavigator_AbsTargetModified";
    ALEvents[ALEvents["Navigation_AvoidanceNavigator_MovingToFreeZone"] = 156] = "Navigation_AvoidanceNavigator_MovingToFreeZone";
    ALEvents[ALEvents["Navigation_AvoidanceNavigator_ObstacleDetected"] = 157] = "Navigation_AvoidanceNavigator_ObstacleDetected";
    ALEvents[ALEvents["Navigation_AvoidanceNavigator_Status"] = 158] = "Navigation_AvoidanceNavigator_Status";
    ALEvents[ALEvents["Navigation_AvoidanceNavigator_TrajectoryProgress"] = 159] = "Navigation_AvoidanceNavigator_TrajectoryProgress";
    ALEvents[ALEvents["Navigation_SafeNavigator_AlreadyAtTarget"] = 160] = "Navigation_SafeNavigator_AlreadyAtTarget";
    ALEvents[ALEvents["Navigation_SafeNavigator_BlockingObstacle"] = 161] = "Navigation_SafeNavigator_BlockingObstacle";
    ALEvents[ALEvents["Navigation_SafeNavigator_DangerousObstacleDetected"] = 162] = "Navigation_SafeNavigator_DangerousObstacleDetected";
    ALEvents[ALEvents["Navigation_SafeNavigator_Status"] = 163] = "Navigation_SafeNavigator_Status";
    ALEvents[ALEvents["NetworkConnectStatus"] = 164] = "NetworkConnectStatus";
    ALEvents[ALEvents["NetworkDefaultTechnologyChanged"] = 165] = "NetworkDefaultTechnologyChanged";
    ALEvents[ALEvents["NetworkServiceAdded"] = 166] = "NetworkServiceAdded";
    ALEvents[ALEvents["NetworkServiceInputRequired"] = 167] = "NetworkServiceInputRequired";
    ALEvents[ALEvents["NetworkServiceRemoved"] = 168] = "NetworkServiceRemoved";
    ALEvents[ALEvents["NetworkServiceStateChanged"] = 169] = "NetworkServiceStateChanged";
    ALEvents[ALEvents["NetworkStateChanged"] = 170] = "NetworkStateChanged";
    ALEvents[ALEvents["NetworkTechnologyAdded"] = 171] = "NetworkTechnologyAdded";
    ALEvents[ALEvents["NetworkTechnologyRemoved"] = 172] = "NetworkTechnologyRemoved";
    ALEvents[ALEvents["notificationAdded"] = 173] = "notificationAdded";
    ALEvents[ALEvents["notificationRemoved"] = 174] = "notificationRemoved";
    ALEvents[ALEvents["PassiveDiagnosisErrorChanged"] = 175] = "PassiveDiagnosisErrorChanged";
    ALEvents[ALEvents["PeoplePerception_JustArrived"] = 176] = "PeoplePerception_JustArrived";
    ALEvents[ALEvents["PeoplePerception_JustLeft"] = 177] = "PeoplePerception_JustLeft";
    ALEvents[ALEvents["PeoplePerception_MaximumDetectionRangeUpdated"] = 178] = "PeoplePerception_MaximumDetectionRangeUpdated";
    ALEvents[ALEvents["PeoplePerception_NonVisiblePeopleList"] = 179] = "PeoplePerception_NonVisiblePeopleList";
    ALEvents[ALEvents["PeoplePerception_PeopleDetected"] = 180] = "PeoplePerception_PeopleDetected";
    ALEvents[ALEvents["PeoplePerception_PeopleList"] = 181] = "PeoplePerception_PeopleList";
    ALEvents[ALEvents["PeoplePerception_PopulationUpdated"] = 182] = "PeoplePerception_PopulationUpdated";
    ALEvents[ALEvents["PeoplePerception_VisiblePeopleList"] = 183] = "PeoplePerception_VisiblePeopleList";
    ALEvents[ALEvents["PictureDetected"] = 184] = "PictureDetected";
    ALEvents[ALEvents["PostureChanged"] = 185] = "PostureChanged";
    ALEvents[ALEvents["PostureFamilyChanged"] = 186] = "PostureFamilyChanged";
    ALEvents[ALEvents["preferenceAdded"] = 187] = "preferenceAdded";
    ALEvents[ALEvents["preferenceChanged"] = 188] = "preferenceChanged";
    ALEvents[ALEvents["preferenceDomainRemoved"] = 189] = "preferenceDomainRemoved";
    ALEvents[ALEvents["preferenceRemoved"] = 190] = "preferenceRemoved";
    ALEvents[ALEvents["preferenceSynchronized"] = 191] = "preferenceSynchronized";
    ALEvents[ALEvents["RearTactilTouched"] = 192] = "RearTactilTouched";
    ALEvents[ALEvents["RightBumperPressed"] = 193] = "RightBumperPressed";
    ALEvents[ALEvents["redBallDetected"] = 194] = "redBallDetected";
    ALEvents[ALEvents["robotHasFallen"] = 195] = "robotHasFallen";
    ALEvents[ALEvents["robotIsFalling"] = 196] = "robotIsFalling";
    ALEvents[ALEvents["robotIsWakeUp"] = 197] = "robotIsWakeUp";
    ALEvents[ALEvents["robotPoseChanged"] = 198] = "robotPoseChanged";
    ALEvents[ALEvents["Segmentation3D_BlobTrackerUpdated"] = 199] = "Segmentation3D_BlobTrackerUpdated";
    ALEvents[ALEvents["Segmentation3D_SegmentationUpdated"] = 200] = "Segmentation3D_SegmentationUpdated";
    ALEvents[ALEvents["Segmentation3D_TrackedBlobNotFound"] = 201] = "Segmentation3D_TrackedBlobNotFound";
    ALEvents[ALEvents["SittingPeopleDetection_PersonSittingDown"] = 202] = "SittingPeopleDetection_PersonSittingDown";
    ALEvents[ALEvents["SittingPeopleDetection_PersonStandingUp"] = 203] = "SittingPeopleDetection_PersonStandingUp";
    ALEvents[ALEvents["SonarLeftDetected"] = 204] = "SonarLeftDetected";
    ALEvents[ALEvents["SonarLeftNothingDetected"] = 205] = "SonarLeftNothingDetected";
    ALEvents[ALEvents["SonarRightDetected"] = 206] = "SonarRightDetected";
    ALEvents[ALEvents["SonarRightNothingDetected"] = 207] = "SonarRightNothingDetected";
    ALEvents[ALEvents["SoundDetected"] = 208] = "SoundDetected";
    ALEvents[ALEvents["SpeechDetected"] = 209] = "SpeechDetected";
    ALEvents[ALEvents["TemperatureDiagnosisErrorChanged"] = 210] = "TemperatureDiagnosisErrorChanged";
    ALEvents[ALEvents["TemperatureStatusChanged"] = 211] = "TemperatureStatusChanged";
    ALEvents[ALEvents["TouchChanged"] = 212] = "TouchChanged";
    ALEvents[ALEvents["UserSession_CreatedUsers"] = 213] = "UserSession_CreatedUsers";
    ALEvents[ALEvents["UserSession_DeletedUsers"] = 214] = "UserSession_DeletedUsers";
    ALEvents[ALEvents["UserSession_FocusedUser"] = 215] = "UserSession_FocusedUser";
    ALEvents[ALEvents["UserSession_NoOpenSessions"] = 216] = "UserSession_NoOpenSessions";
    ALEvents[ALEvents["UserSession_SessionsClosed"] = 217] = "UserSession_SessionsClosed";
    ALEvents[ALEvents["UserSession_SessionsOpened"] = 218] = "UserSession_SessionsOpened";
    ALEvents[ALEvents["UserSession_ShouldExitInteractiveActivity"] = 219] = "UserSession_ShouldExitInteractiveActivity";
    ALEvents[ALEvents["VisualCompass_Deviation"] = 220] = "VisualCompass_Deviation";
    ALEvents[ALEvents["VisualCompass_FinalDeviation"] = 221] = "VisualCompass_FinalDeviation";
    ALEvents[ALEvents["VisualCompass_InvalidReference"] = 222] = "VisualCompass_InvalidReference";
    ALEvents[ALEvents["VisualCompass_Match"] = 223] = "VisualCompass_Match";
    ALEvents[ALEvents["VisualCompass_MoveAbort"] = 224] = "VisualCompass_MoveAbort";
    ALEvents[ALEvents["VisualCompass_NewReferenceImageSet"] = 225] = "VisualCompass_NewReferenceImageSet";
    ALEvents[ALEvents["WavingDetection_PersonWaving"] = 226] = "WavingDetection_PersonWaving";
    ALEvents[ALEvents["WavingDetection_PersonWavingCenter"] = 227] = "WavingDetection_PersonWavingCenter";
    ALEvents[ALEvents["WavingDetection_PersonWavingLeft"] = 228] = "WavingDetection_PersonWavingLeft";
    ALEvents[ALEvents["WavingDetection_PersonWavingRight"] = 229] = "WavingDetection_PersonWavingRight";
    ALEvents[ALEvents["WordRecognized"] = 230] = "WordRecognized";
    ALEvents[ALEvents["WordRecognizedAndGrammar"] = 231] = "WordRecognizedAndGrammar";
})(ALEvents || (ALEvents = {}));

/** ngQiSession */
var ngQiSession = (function () {
    function ngQiSession($log, $q, host, resource) {
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
    ngQiSession.prototype.getALProxy = function (proxyType) {
        var proxyName = ALProxies[proxyType];

        return this._getProxy(proxyName);
    };

    /**Retrieve a Proxy by name, such as for a custom, non-ALProxy */
    ngQiSession.prototype.getProxy = function (proxyName) {
        return this._getProxy(proxyName);
    };

    /** Retrieve a set of proxies by ALProxies enum.*/
    ngQiSession.prototype.getALProxies = function (proxies) {
        var _this = this;
        var promises = [];

        proxies.forEach(function (value, index, array) {
            promises.push(_this.getALProxy(value));
        });
        return this.$q.all(promises);
    };

    /**get a Set of Multiple Named Proxies. If unable to get all of them, fail the promise.*/
    ngQiSession.prototype.getProxies = function (proxyNames) {
        var _this = this;
        var promises = [];

        proxyNames.forEach(function (value, index, array) {
            promises.push(_this._getProxy(value));
        });
        return this.$q.all(promises);
    };

    ngQiSession.prototype._getSocket = function () {
        var _this = this;
        var deferral = this.$q.defer();
        var self = this;

        if (this.connectionState == 1 /* Connected */) {
            this.$log.info('socket with sessionId=' + self.sessionId + ' already connected');
            deferral.resolve(self.socket);
        } else {
            this.socket = this.qiSession.socket().on("connect", function () {
                _this.$log.info('successful connection started to sessionId=' + self.sessionId);
                self.connectionState = 1 /* Connected */;
                deferral.resolve(self.socket);
            }).on("disconnect", function () {
                _this.$log.info('disconnection to sessionId=' + self.sessionId);
                self.connectionState = 2 /* Disconnected */;
                deferral.reject("disconnect");
            });
        }

        return deferral.promise;
    };

    /**Get a single Aldebaran proxy by name. */
    ngQiSession.prototype._getProxy = function (proxyName) {
        var deferral = this.$q.defer();
        var self = this;

        this._getSocket().then(function () {
            var proxy = self._services[proxyName];

            //Remove the words Proxy from the service call.
            //Otherwise you will see something like "An error occurred: Cannot find service 'ALTextToSpeechProxy' in index"
            var shortProxyName = proxyName.replace(/Proxy/g, '');

            if (angular.isDefined(proxy) && proxy != null) {
                self.$log.info('Retrieving existing Proxy object: ' + shortProxyName);

                deferral.resolve(proxy);
            } else {
                self.$log.info('Attempting to retrieve Proxy: ' + shortProxyName);

                self.qiSession.service(shortProxyName).done(function (proxy) {
                    self._services[proxyName] = proxy;
                    self.$log.info('Proxy: ' + shortProxyName + ' successfully retrieved');
                    self.$log.log(JSON.stringify(proxy));
                    deferral.resolve(proxy);
                }).fail(function (error) {
                    self.$log.error('An error occurred: ' + error);

                    deferral.reject(error);
                });
            }
        }, function (err) {
            deferral.reject(err);
        });
        return deferral.promise;
    };
    return ngQiSession;
})();

var ngQiALMemoryListener = (function () {
    function ngQiALMemoryListener(session, $rootScope, $q, $log) {
        this._session = session;
        this._events = {};
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.$log = $log;
    }
    ngQiALMemoryListener.prototype.subscribe = function (memoryKey, id) {
        var _this = this;
        var self = this;

        var deferral = this.$q.defer();
        this._session.getALProxy(33 /* ALMemoryProxy */).then(function (proxy) {
            var key = self.enumToKey(memoryKey, id);

            var eventExists = _this._events[key];

            if (angular.isUndefined(eventExists)) {
                proxy.subscriber(key).done(function (subscriber) {
                    subscriber.signal.connect(function () {
                        var args = [];
                        for (var _i = 0; _i < (arguments.length - 0); _i++) {
                            args[_i] = arguments[_i + 0];
                        }
                        var eventKey = "ngQiALMemoryListener" + memoryKey.toString();

                        self.$log.info('Received sessionId= ' + self._session.sessionId + ' event, rebroadcasting event:' + eventKey);
                        self.$rootScope.$broadcast(eventKey, self._session.sessionId, args);
                        _this._events[key] = true;
                        deferral.resolve(args);
                    });
                    //subscriber.signal.disconnect((...args) => {
                    // delete this._events[key];
                    //});
                }, function (err) {
                    deferral.reject(err);
                });
            }
        }, function (err) {
            deferral.reject(err);
        });

        return deferral.promise;
    };

    ngQiALMemoryListener.prototype.enumToKey = function (memoryKey, id) {
        var key = memoryKey;
        key = key.replace(/_/g, '/');

        if (angular.isDefined(id) && id != null) {
            key = key.replace(/$/g, id.toString());
        }

        return key;
    };
    return ngQiALMemoryListener;
})();

var ngQiSessionEvent = (function () {
    function ngQiSessionEvent($rootScope, eventType, sessionId) {
        var self = this;

        this.eventType = eventType;
        this.$rootScope = $rootScope;
        this.sessionId = sessionId;

        this.callback = function () {
            //
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            //self.sessionId
            self.$rootScope.$broadcast("ngQiSessionEvent" + self.eventType.toString(), self.sessionId, args);
        };
    }
    return ngQiSessionEvent;
})();

var ngQiSessionEvents = (function () {
    function ngQiSessionEvents(session, $rootScope, $q) {
        this._session = session;
        this._events = {};
        this.$rootScope = $rootScope;
        this.$q = $q;
    }
    ngQiSessionEvents.prototype.subscribeEvent = function (qiEvent) {
        var _this = this;
        var self = this;
        var deferral = this.$q.defer();

        var alreadySubscribed = this._events[ALEvents[qiEvent]];

        if (angular.isDefined(alreadySubscribed) && alreadySubscribed != null) {
            deferral.resolve(alreadySubscribed.link);
        } else {
            this._session.getALProxy(2 /* ALAnimatedSpeechProxy */).then(function (proxy) {
                var eventObj = proxy["nameofevent"];
                var ngQiEvt = new ngQiSessionEvent(self.$rootScope, 81 /* ActiveDiagnosisErrorChanged */, self._session.sessionId);
                _this._events[ALEvents[qiEvent]] = ngQiEvt;

                eventObj.connect(ngQiEvt.callback).done(function (link) {
                    ngQiEvt.link = link;

                    deferral.resolve(link);
                }).fail(function (err) {
                    deferral.reject(err);
                });
            }, function (err) {
                deferral.reject(err);
            });
        }

        // deferral.reject(err);
        return deferral.promise;
    };

    ngQiSessionEvents.prototype.unsubscribeEvent = function (qiEvent) {
        var deferral = this.$q.defer();

        var self = this;
        var deferral = this.$q.defer();

        var alreadySubscribed = this._events[ALEvents[qiEvent]];

        if (angular.isDefined(alreadySubscribed) && alreadySubscribed != null && alreadySubscribed.link != null) {
            this._session.getALProxy(2 /* ALAnimatedSpeechProxy */).then(function (proxy) {
                var eventObj = proxy["nameofevent"];

                eventObj.disconnect(alreadySubscribed.link).done(function () {
                    deferral.resolve();
                }).fail(function (err) {
                    deferral.reject(err);
                });
            }, function (err) {
                deferral.reject(err);
            });
        }

        return deferral.promise;
    };
    return ngQiSessionEvents;
})();

var ngQiSessionMinder = (function () {
    function ngQiSessionMinder($log, $q, sessionWrapperConfig) {
        var _this = this;
        this.sessions = {};

        this.$q = $q;
        this.$log = $log;

        if (sessionWrapperConfig.sessions != null) {
            sessionWrapperConfig.sessions.forEach(function (value, index, array) {
                _this.addSession(value.host, value.resource);
            });
        }
    }
    ngQiSessionMinder.prototype.addSession = function (host, resource) {
        var session = this.sessions[host];

        if (angular.isUndefined(session) || session == null) {
            this.sessions[host] = new ngQiSession(this.$log, this.$q, host, resource);
            session = this.sessions[host];
        }

        return session;
    };
    return ngQiSessionMinder;
})();

var ngQiTestController = (function () {
    function ngQiTestController(ngQisessionWrapper) {
    }
    return ngQiTestController;
})();

angular.module("ngQi", []).value("QiSession", QiSession).provider("ngQisessionWrapper", function ngQisessionWrapperProvider() {
    var config = { sessions: [{ host: "10.1.0.7" }], sessionRetryAttempts: 2 };

    return {
        setConfig: function (minderConfig) {
            config = minderConfig;
        },
        $get: [
            '$log', '$q', function ngQisessionWrapperFactory($log, $q) {
                return new ngQiSessionMinder($log, $q, config);
            }]
    };
}).config([
    "ngQisessionWrapperProvider", function (ngQisessionWrapperProvider) {
        var minderConfig = { sessions: [], sessionRetryAttempts: 2 };

        ngQisessionWrapperProvider.setConfig(minderConfig);
    }]).controller("ngQiTestController", ["ngQisessionWrapper", ngQiTestController]).directive("ngQiMemoryKey", [
    "ngQisessionWrapper", "$rootScope", "$q", "$log", function (ngQisessionWrapper, $rootScope, $q, $log) {
        var session = ngQisessionWrapper.addSession("10.0.1.7");

        var alMemory = new ngQiALMemoryListener(session, $rootScope, $q, $log);

        var dir = {};
        dir.restrict = 'A';
        dir.template = '<span ng-bind="memoryKey"></span>';
        dir.link = function (scope, instanceElement, instanceAttributes) {
            scope.memoryKey = null;

            var keyVal = instanceAttributes.ngQiMemoryKey;

            alMemory.subscribe(keyVal).then(function (successCallback) {
                $log.info(successCallback);
            });

            $rootScope.$on(keyVal, function (event) {
                var args = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    args[_i] = arguments[_i + 1];
                }
                scope.memoryKey = args[0];
            });
        };

        return dir;
    }]);
