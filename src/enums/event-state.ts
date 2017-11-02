// Bacnet Event State enums the following
//
// Binary Value
// Controller
// Life Safety Point
// Life Safety Zone
// Multistate Alarm
// Multistate Value

const enum EventState {
  normal = 0,
  fault = 1,
  offNormal = 2,
  highLimit = 3,
  lowLimit = 4,
  lifeSafetyAlarm = 5
}

export default EventState;
