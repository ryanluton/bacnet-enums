const enum RestartReason {
  unkown = 0,
  coldStart = 1,
  warmStart = 2,
  detectedPowerLoss = 3,
  detectedPowerOff = 4,
  hardwareWatchdog = 5,
  softwareWatchdog = 6,
  suspended = 7
}

export default RestartReason;
