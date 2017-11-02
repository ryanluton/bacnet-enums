"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RestartReason;
(function (RestartReason) {
    RestartReason[RestartReason["unkown"] = 0] = "unkown";
    RestartReason[RestartReason["coldStart"] = 1] = "coldStart";
    RestartReason[RestartReason["warmStart"] = 2] = "warmStart";
    RestartReason[RestartReason["detectedPowerLoss"] = 3] = "detectedPowerLoss";
    RestartReason[RestartReason["detectedPowerOff"] = 4] = "detectedPowerOff";
    RestartReason[RestartReason["hardwareWatchdog"] = 5] = "hardwareWatchdog";
    RestartReason[RestartReason["softwareWatchdog"] = 6] = "softwareWatchdog";
    RestartReason[RestartReason["suspended"] = 7] = "suspended";
})(RestartReason || (RestartReason = {}));
exports.default = RestartReason;
//# sourceMappingURL=restart-reason.js.map