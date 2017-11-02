"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventState;
(function (EventState) {
    EventState[EventState["normal"] = 0] = "normal";
    EventState[EventState["fault"] = 1] = "fault";
    EventState[EventState["offNormal"] = 2] = "offNormal";
    EventState[EventState["highLimit"] = 3] = "highLimit";
    EventState[EventState["lowLimit"] = 4] = "lowLimit";
    EventState[EventState["lifeSafetyAlarm"] = 5] = "lifeSafetyAlarm";
})(EventState || (EventState = {}));
exports.default = EventState;
//# sourceMappingURL=event-state.js.map