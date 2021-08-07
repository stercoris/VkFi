"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const R1IO_1 = __importDefault(require("./core/factory/R1IO"));
function Hello(name) {
    return (R1IO_1.default.createElement("div", { className: "asd" },
        "Hello ",
        name,
        R1IO_1.default.createElement("div", null, " Hello Nested "),
        R1IO_1.default.createElement("div", null, " Hello Nested 2")));
}
function log(html) {
    console.log(html);
}
log(Hello("World"));
//# sourceMappingURL=index.js.map