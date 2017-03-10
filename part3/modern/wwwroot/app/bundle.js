/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Greeter_1 = __webpack_require__(0);
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

/***/ })
/******/ ]);