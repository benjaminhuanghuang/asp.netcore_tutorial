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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Final loader didn't return a Buffer or String\n    at /Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/webpack/lib/NormalModule.js:149:64\n    at /Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/loader-runner/lib/LoaderRunner.js:370:3\n    at iterateNormalLoaders (/Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/loader-runner/lib/LoaderRunner.js:211:10)\n    at iterateNormalLoaders (/Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at context.callback (/Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /Users/hhuang/Documents/Ben/_BenGithub/asp.netcore_tutorial/part3/modern/node_modules/awesome-typescript-loader/src/index.ts:106:13");

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Greeter_1 = __webpack_require__(2);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map