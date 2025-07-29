"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function process(val) {
    if (typeof val === "object" && !!val && "log" in val && typeof val.log === "function") {
        val.log();
    }
}
//# sourceMappingURL=unknown.js.map