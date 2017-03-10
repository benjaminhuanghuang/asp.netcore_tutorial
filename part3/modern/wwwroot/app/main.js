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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGh1YW5nL0RvY3VtZW50cy9CZW4vX0JlbkdpdGh1Yi9hc3AubmV0Y29yZV90dXRvcmlhbC9wYXJ0My9tb2Rlcm4vc3JjL2FwcC8iLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBbUM7QUFFbkM7SUFHSTtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7SUFDNUYsQ0FBQztJQUVELHNCQUFJLGlDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBQ0wsV0FBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksb0JBQUk7QUFrQmpCLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmVldGVyIH0gZnJvbSBcIi4vR3JlZXRlclwiXG5cbmV4cG9ydCBjbGFzcyBNYWlue1xuICAgIHByaXZhdGUgZ3JlZXRlciA6IEdyZWV0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmdyZWV0ZXIgPSBuZXcgR3JlZXRlcihcIlR5cGVTY2lwdFwiKTtcbiAgICB9XG5cbiAgICBzYXlIZWxsbygpXG4gICAge1xuICAgICAgICB0aGlzLmdyZWV0ZXIuc2F5SGVsbG8oKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmVldGluZ1wiKS5pbm5lckhUTUwgPSBcIjxoMT5cIiArIHRoaXMuZ3JlZXRpbmdNZXNzYWdlICsgXCI8L2gxPlwiO1xuICAgIH1cblxuICAgIGdldCBncmVldGluZ01lc3NhZ2UoKSA6IHN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JlZXRlci5ncmVldGluZ01lc3NhZ2U7XG4gICAgfVxufVxuXG52YXIgbSA9IG5ldyBNYWluKCk7XG5tLnNheUhlbGxvKCk7XG5jb25zb2xlLmxvZyhtLmdyZWV0aW5nTWVzc2FnZSk7Il19