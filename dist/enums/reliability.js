"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reliability;
(function (Reliability) {
    Reliability[Reliability["noFaultDetected"] = 0] = "noFaultDetected";
    Reliability[Reliability["noSensor"] = 1] = "noSensor";
    Reliability[Reliability["overRange"] = 2] = "overRange";
    Reliability[Reliability["underRange"] = 3] = "underRange";
    Reliability[Reliability["openLoop"] = 4] = "openLoop";
    Reliability[Reliability["shortedLoop"] = 5] = "shortedLoop";
    Reliability[Reliability["noOutput"] = 6] = "noOutput";
    Reliability[Reliability["unreliableOther"] = 7] = "unreliableOther";
    Reliability[Reliability["processError"] = 8] = "processError";
    Reliability[Reliability["multiStateFault"] = 9] = "multiStateFault";
    Reliability[Reliability["configurationError"] = 10] = "configurationError";
    Reliability[Reliability["memberFault"] = 11] = "memberFault";
    Reliability[Reliability["communicationFailure"] = 12] = "communicationFailure";
    Reliability[Reliability["tripped"] = 13] = "tripped";
    Reliability[Reliability["proprietaryMin"] = 64] = "proprietaryMin";
    Reliability[Reliability["proprietaryMax"] = 65535] = "proprietaryMax";
})(Reliability || (Reliability = {}));
exports.default = Reliability;
//# sourceMappingURL=reliability.js.map