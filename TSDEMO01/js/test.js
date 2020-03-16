"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    vscode配置自动编译
    
    1.第一步 tsc --init 生成tsconfig.json  去掉 outDir 配置的注释
    
    2.第二步 vscode 菜单栏 -> 终端 -> 运行任务 -> tsc:监视 - tsconfig.json
*/
console.log("Hello Typescript");
var str = "你好ts";
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [123, "hello"];
var arr4 = ["hello", 123];
console.log(arr3);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["orange"] = 3] = "orange";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
var c = Color.blue;
console.log(c);
// 任意类型
var a = 123;
a = "a";
// undefined
var num = 3;
num = undefined;
console.log(num);
// null
var nul = null;
console.log(nul);
function run() {
    console.log("run");
}
run();
// never
// let nev: never;
// nev = (() => {
//   throw new Error();
// })();
// es5中申明函数的方法
function go() {
    return "go";
}
// 匿名函数
var go2 = function () {
    return "go2";
};
// 剩余参数
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (total, number) { return total + number; }, 0);
}
console.log("result " + sum(1, 2, 3, 4, 5));
function fun(str) {
    if (typeof str === "string") {
        return "\u6211\u53EB" + str;
    }
    else {
        return "\u6211\u7684\u5E74\u9F84\u662F" + str;
    }
}
alert(fun("罗全"));
alert(fun(38));
// ts中定义类
/*
class Person {
  name: string;

  constructor(name: string) {
    // 构造函数 实例化类的时候触发的方法
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  run(): void {
    alert(this.name);
  }
}


const p = new Person("罗闰杰~~~");
alert(p.getName());
*/
/*
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  run(): string {
    return `${this.name}在运动`;
  }
}

class Web extends Person {
  constructor(name:string){
    super(name);  // 初始化父类的构造函数
  }
}

var w = new Web('李四');
alert(w.run());
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8-\u5B50\u7C7B";
    };
    return Web;
}(Person));
var w = new Web("李四");
alert(w.run());
