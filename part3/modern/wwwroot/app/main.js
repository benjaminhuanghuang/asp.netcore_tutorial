"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter_1 = require("./Greeter");
var Main = (function () {
    function Main() {
        this.greeter = new Greeter_1.Greeter("TypeScipt");
    }
    Main.prototype.sayHello = function () {
        this.greeter.sayHello();
        document.getElementById("greeting").innerHTML = "<h1>" + this.greetingMessage + "</h1>";
    };
    Object.defineProperty(Main.prototype, "greetingMessage", {
        get: function () {
            return this.greeter.greetingMessage;
        },
        enumerable: true,
        configurable: true
    });
    return Main;
}());
exports.Main = Main;
var m = new Main();
m.sayHello();
console.log(m.greetingMessage);
//# sourceMappingURL=main.js.map