"use strict";
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
function printName(name) {
    console.log("" + name.firstName);
}
printName({ firstName: "quan" });
