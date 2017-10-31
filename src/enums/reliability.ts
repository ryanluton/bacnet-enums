const enum Reliability {
  noFaultDetected = 0,
  noSensor = 1,
  overRange = 2,
  underRange = 3,
  openLoop = 4,
  shortedLoop = 5,
  noOutput = 6,
  unreliableOther = 7,
  processError = 8,
  multiStateFault = 9,
  configurationError = 10,
  memberFault = 11,
  communicationFailure = 12,
  tripped = 13,

  proprietaryMin = 64,
  proprietaryMax = 65535
}

export default Reliability;
