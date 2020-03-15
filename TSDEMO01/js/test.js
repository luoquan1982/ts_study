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
