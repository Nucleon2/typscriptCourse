"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function lodAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
const logMsg = (msg) => {
    console.log(msg);
};
function performJob(cb) {
    // ... 
    cb("job Done!");
}
performJob(logMsg);
let user = {
    name: "Max",
    age: 39,
    greet() {
        console.log("Hello there");
        return this.name;
    }
};
//# sourceMappingURL=functions.js.map