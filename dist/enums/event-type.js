"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    EventType[EventType["changeOfBitstring"] = 0] = "changeOfBitstring";
    EventType[EventType["changeOfState"] = 1] = "changeOfState";
    EventType[EventType["changeOfValue"] = 2] = "changeOfValue";
    EventType[EventType["commandFailure"] = 3] = "commandFailure";
    EventType[EventType["floatingLimit"] = 4] = "floatingLimit";
    EventType[EventType["outOfRange"] = 5] = "outOfRange";
    EventType[EventType["bufferReady"] = 7] = "bufferReady";
    EventType[EventType["changeOfLifeSafety"] = 8] = "changeOfLifeSafety";
})(EventType || (EventType = {}));
exports.default = EventType;
//# sourceMappingURL=event-type.js.map