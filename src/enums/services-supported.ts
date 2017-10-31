const enum ServicesSupported {
  // alarm and event services
  acknowledgeAlarm = 0,
  confirmedCovNotification = 1,
  confirmedEventNotification = 2,
  getAlarmSummary = 3,
  getEnrollmentSummary = 4,
  getEventInformation = 39,
  subscribeCov = 5,
  subscribeCovProperty = 38,
  lifeSafetyOperation = 37,
  // file access services
  atomicReadFile = 6,
  atomicWriteFile = 7,
  // object access services
  addListElement = 8,
  removeListElement = 9,
  createObject = 10,
  deleteObject = 11,
  readProperty = 12,
  readPropConditional = 13,
  readPropMultiple = 14,
  readRange = 35,
  writeProperty = 15,
  writePropMultiple = 16,
  writeGroup = 40,
  // remote device management services
  deviceCommunicationControl = 17,
  privateTransfer = 18,
  textMessage = 19,
  reinitializeDevice = 20,
  // virtual terminal services
  vtOpen = 21,
  vtClose = 22,
  vtData = 23,
  // security services
  authenticate = 24,
  requestKey = 25,
  iAm = 26,
  iHave = 27,
  unconfirmedCovNotification = 28,
  unconfirmedEventNotification = 29,
  unconfirmedPrivateTransfer = 30,
  unconfirmedTextMessage = 31,
  timeSynchronization = 32,
  utcTimeSynchronization = 36,
  whoHas = 33,
  whoIs = 34
};

export default ServicesSupported;