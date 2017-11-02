// Bacnet Event Type enums the following
//
// Analog Alarm
// Event Enrollment
// Controller
// Multistate Alarm

const enum EventType {
  changeOfBitstring = 0,
  changeOfState = 1,
  changeOfValue = 2,
  commandFailure = 3,
  floatingLimit = 4,
  outOfRange = 5,
  bufferReady = 7,
  changeOfLifeSafety = 8
}

export default EventType;
