"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + " \u5403\u732B\u7CAE");
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A = exports.A || (exports.A = {}));
