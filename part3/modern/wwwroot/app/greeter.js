"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHello = function () {
        console.log("hello " + this.message);
    };
    Object.defineProperty(Greeter.prototype, "greetingMessage", {
        get: function () {
            return "hello " + this.message;
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
exports.Greeter = Greeter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGh1YW5nL0RvY3VtZW50cy9CZW4vX0JlbkdpdGh1Yi9hc3AubmV0Y29yZV90dXRvcmlhbC9wYXJ0My9tb2Rlcm4vc3JjL2FwcC8iLCJzb3VyY2VzIjpbImdyZWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNJLGlCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUNuQyxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxJQUFJLENBQUMsT0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNCQUFJLG9DQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLFdBQVMsSUFBSSxDQUFDLE9BQVMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQUVRLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR3JlZXRlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB9XG5cbiAgICBzYXlIZWxsbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coYGhlbGxvICR7dGhpcy5tZXNzYWdlfWApO1xuICAgIH1cblxuICAgIGdldCBncmVldGluZ01lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBoZWxsbyAke3RoaXMubWVzc2FnZX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgR3JlZXRlciB9Il19