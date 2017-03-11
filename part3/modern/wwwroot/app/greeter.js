"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello " + this.message + " from TypeScript!");
    };
    Object.defineProperty(Greeter.prototype, "greetingMessage", {
        get: function () {
            return "Hello " + this.message + " from TypeScript!";
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
exports.Greeter = Greeter;
//export { Greeter }; 
//# sourceMappingURL=greeter.js.map