const enum ObjectType {
  analogInput = 0,
  analogOutput = 1,
  analogValue = 2,
  binaryInput = 3,
  binaryOutput = 4,
  binaryValue = 5,
  calendar = 6,
  command = 7,
  device = 8,
  eventEnrollment = 9,
  file = 10,
  group = 11,
  loop = 12,
  multiStateInput = 13,
  multiStateOutput = 14,
  notificationClass = 15,
  program = 16,
  schedule = 17,
  averaging = 18,
  multiStateValue = 19,
  trendLog = 20,
  lifeSafetyPoint = 21,
  lifeSafetyZone = 22,
  accumulator = 23,
  pulseConverter = 24,
  eventLog = 25,
  globalGroup = 26,
  trendLogMultiple = 27,
  loadControl = 28,
  structuredView = 29,
  accessDoor = 30,
  // 31 was lighting output, but BACnet editor changed it...
  accessCredential = 32, // addendum 2008-j
  accessPoint = 33,
  accessRights = 34,
  accessUser = 35,
  accessZone = 36,
  credentialDataInput = 37, // authentication-factor-input
  networkSecurity = 38, // addendum 2008-g
  bitstringValue = 39, // addendum 2008-w
  characterstringValue = 40, // addendum 2008-w
  datePatternValue = 41, // addendum 2008-w
  dateValue = 42, // addendum 2008-w
  datetimePatternValue = 43, // addendum 2008-w
  datetimeValue = 44, // addendum 2008-w
  integerValue = 45, // addendum 2008-w
  largeAnalogValue = 46, // addendum 2008-w
  octetstringValue = 47, // addendum 2008-w
  positiveIntegerValue = 48, // addendum 2008-w
  timePatternValue = 49, // addendum 2008-w
  timeValue = 50, // addendum 2008-w
  notificationForwarder = 51, // addendum 2010-af
  alertEnrollment = 52, // addendum 2010-af
  channel = 53, // addendum 2010-aa
  lightingOutput = 54, // addendum 2010-i
  // Enumerated values 0-127 are reserved for definition by ASHRAE.
  // Enumerated values 128-1023 may be used by others subject to
  // the procedures and constraints described in Clause 23.

  /////// DELTA proprietary objects.
  internetProtocolSettings = 311,

  //   do the max range inside of enum so that
  //   compilers will allocate adequate sized datatype for enum
  //   which is used to store decoding
  proprietaryMin = 128,
  proprietaryMax = 1023,
  maxObjectType = 1024
}

export default ObjectType;
