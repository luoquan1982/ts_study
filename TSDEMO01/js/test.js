"use strict";
/*
    vscode配置自动编译
    
    1.第一步 tsc --init 生成tsconfig.json  去掉 outDir 配置的注释
    
    2.第二步 vscode 菜单栏 -> 终端 -> 运行任务 -> tsc:监视 - tsconfig.json
*/
/*
console.log("Hello Typescript");
const str: string = "你好ts";

let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

let arr3: [number, string] = [123, "hello"];
let arr4: Array<number | string> = ["hello", 123];

console.log(arr3);

enum Color {
  red,
  orange = 3,
  blue
}

let c: Color = Color.blue;
console.log(c);
*/
function getData(value) {
    return value;
}
var myGetData = getData;
console.log(myGetData('20'));
