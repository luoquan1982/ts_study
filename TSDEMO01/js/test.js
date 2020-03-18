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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 任意类型
/*
let a: any = 123;
a = "a";

// undefined
let num: number | undefined = 3;
num = undefined;
console.log(num);

// null
let nul: null = null;
console.log(nul);

function run(): void {
  console.log("run");
}

run();
*/
// never
// let nev: never;
// nev = (() => {
//   throw new Error();
// })();
// es5中申明函数的方法
/*
function go() {
  return "go";
}
*/
// 匿名函数
/*
var go2 = function() {
  return "go2";
};
*/
// 剩余参数
/*
function sum(...args: number[]): number {
  return args.reduce((total, number) => total + number, 0);
}

console.log(`result ${sum(1, 2, 3, 4, 5)}`);
*/
// ts中的重载
/*
function fun(name: string): string;

function fun(age: number): number;

function fun(str: any): any {
  if (typeof str === "string") {
    return `我叫${str}`;
  } else {
    return `我的年龄是${str}`;
  }
}

alert(fun("罗全"));
alert(fun(38));
*/
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
  constructor(name: string) {
    super(name);
  }

  run(): string {
    return `${this.name}在运动-子类`;
  }
}
 
var w = new Web("李四");
alert(w.run());
*/
/*
class Man {
  name: string;

  // 静态属性
  static sex='Male';

  constructor(name: string) {
    this.name = name;
  }

  run() {
    alert(`${this.name}在运动`);
  }

  work(){
    alert(`${this.name}在工作`);
  }

  // 静态方法 里面没法访问类里面的普通属性,只能访问静态属性
  static print(){
    alert(this.sex);
    alert('类的静态方法')
  }
}

Man.print();
*/
/*
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log("吃的方法");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  eat() {
    return `${this.name}吃骨头`;
  }
}

class Cat extends Animal{
  constructor(name: string) {
    super(name);
  }

  eat() {
    return `${this.name}吃鱼`;
  }
}
*/
/*
abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // 父类中的抽象方法必须在子类中实现
  abstract eat(): any;
}

class Dog extends Animal {
  constructor(name: any) {
    super(name);
  }
  // 抽象类的非抽象子类必须实现抽象类里面的抽象方法
  eat() {
    console.log(`${this.name}吃骨头`);
  }
}


const dog = new Dog('美丹');
dog.eat();
*/
// 1.属性接口 对json的约束
// ts中定义方法
/*
function printLabel(lableInfo: { label: string }): void {
  console.log("printLabel");
}

printLabel({ label: "hahaha" });
*/
// 就是传入对象的约束 属性的接口
/*
interface FullName {
  firstName: string; // 注意 以;结束
  secondName?: string;
}

function printName(name: FullName) {
  console.log(`${name.firstName}`);
}

printName({ firstName: "quan"});
*/
/*
interface Config {
  type: string;
  url: string;
  data?: string;
  dataType: string;
}

function ajax(config: Config) {
  var xhr = new XMLHttpRequest();

  xhr.open(config.type, config.url, true);

  xhr.send(config.data);

  xhr.onreadystatechange = function() {
    if (4 === xhr.readyState && 200 === xhr.status) {
      console.log("成功");
      if ("json" === config.type) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}

ajax({
  type: "get",
  url: "http://a.itying.com/api/productlist",
  dataType: "json"
});
*/
/*
interface encrypt {
  (key: string, value: string): string;
}

const md5: encrypt = function(key: string, value: string): string {
  return key + value;
};

console.log(md5('name','zhangshan'));
*/
// 可索引接口:数组或对象的约束(不常用)
/*
interface UserArr {
  [index: number]: string;  // 索引值必须为number,值必须为string
}

var arr: UserArr = ["aaa", "bbb"];
console.log(arr[0]);
*/
// 可索引接口:对对象的约束
/*
interface UserObj {
  [index: string]: string;
}

const arr: UserObj = {
  name: "luoquan"
};
*/
// 类类型接口:对类的约束 和抽象类有点相似
/*
interface Animal {
  name: string;
  eat(str: string): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(str: string) {
    console.log(`${this.name}吃${str}`);
  }
}

const d = new Dog('小黑');
d.eat('骨头');
*/
// 接口扩展:接口可以继承接口
/*
interface Animal {
  eat(): void;
}

interface Person extends Animal {
  work(): void;
}

class Programm {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  coding(code: string): void {
    console.log(`${this.name} ${code}`);
  }
}

class Web extends Programm implements Person {

  constructor(name: string) {
    super(name);
  }

  eat() {
    console.log(`${this.name}:吃饭`);
  }

  work() {
    console.log(`${this.name}:写代码`);
  }
}

const w = new Web("罗全");
w.eat();
w.work();
w.coding('react');
*/
// 泛型
/*
function getData<T>(value: T): T {
  return value;
}

console.log(getData<string>('hello'));
*/
// 泛型类:比如有个最小堆算法,需要同时支持返回数字和字符串两种类型.通过类的泛型来实现
/*
class MinClass<T> {
  list: T[] = [];

  add(value: T) {
    this.list.push(value);
  }

  min(): T {
    let min: T = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (min > this.list[i]) {
        min = this.list[i];
      }
    }
    return min;
  }
}

const m = new MinClass<number>();
m.add(7);
m.add(5);
m.add(9);
m.add(4);
m.add(8);
console.log(m.min());
*/
// 函数类型接口2
/*
interface ConfigFn<T> {
  (value: T): T;
}

function getData<T>(value: T): T {
  return value;
}

const myGetData:ConfigFn<string> = getData;

console.log(myGetData('20'));
*/
/*
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 定义一个操作mysql数据库的类
// 注意:要实现泛型接口 这个类也应该是一个泛型类
class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true;
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 定义一个操作mssql数据库的类
class MssqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

// 操作用户表 定义一个user类和数据表做映射
class User {
  username: string | undefined;
  password: string | undefined;
}

const u = new User();
u.username = "张三";
u.password = "123456~";

const oMysql = new MysqlDb<User>();
oMysql.add(u);
*/
/*
import { MssqlDb } from "./modules/db";

class User {
  username: string | undefined;
  password: string | undefined;
}

const u = new User();
u.username='张三';
u.password='123456';

const oMysql = new MssqlDb<User>();
oMysql.add(u);
*/
/*
import { UserClass, UserModel } from "./model/user";
import { ArticleClass, ArticleModel } from "./model/article";

// 增加数据
const user = new UserClass();
user.username = "张三";
user.password = "123456";

UserModel.add(user);

// 获取user表数据
const res = UserModel.get(123);
console.log(res);

// 获取文章表的数据
const aRes = ArticleModel.get(1);
console.log(aRes);
*/
/*
namespace A {
  interface Animal {
    name: string;
    eat(): void;
  }

  export class Dog implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat(): void {
      console.log(`${this.name} 吃狗粮`);
    }
  }

  export class Cat implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat(): void {
      console.log(`${this.name} 吃猫粮`);
    }
  }

}

let dog = new A.Dog('狗狗');
dog.eat();
*/
/*
import { A } from './modules/a';

const d = new A.Dog('小黄');
d.eat();
*/
// 装饰器
/*
function logClass(params: any) {
  // params就是被修饰的当前类
  console.log(params);
  // 动态扩展的属性
  params.prototype.apiUrl = '动态扩展的属性';

  params.prototype.run = function(){
    console.log('扩展的run方法');
  }
}

@logClass
class HttpClient {
  constructor() { }

  getData() { }
}

const http: any = new HttpClient();
console.log(http.apiUrl);
http.run();
*/
// 类装饰器:装饰器工厂(可传参)
/*
function logClass(params: string) {
  return function (target: any) {
    console.log(`${target}---${params}`)
    target.prototype.apiUrl = params;
  }
}

@logClass('http://www.google.com')
class HttpClient {
  constructor() { }
  getData() { }
}

const http: any = new HttpClient();
console.log(http.apiUrl);
*/
// 类装饰器:重载构造函数的例子
/*
function logClass(target: any) {
  console.log(target);

  return class extends target {
    apiUrl: any = '我是修改后的数据';
    getData() {
      super.getData();
      console.log('我是修改后的方法');
    }
  }
}

@logClass
class HttpClient {
  apiUrl: string | undefined;
  constructor() {
    this.apiUrl = '我是构造函数里面的api';
  }

  getData() {
    console.log(this.apiUrl);
  }
}

const http = new HttpClient();
http.getData();
*/
// 属性装饰器
// 类装饰器
/*
function logClass(params: string) {
  return function (target: any) {
    console.log(target);
    console.log(params);
  }
}
*/
/*
// 属性装饰器
function logProperty(params: any) {
  return function (target: any, attr: any) {
    console.log(target);  // target 类的原型对象
    console.log(`attrname:${attr}`); // attr 被类修饰器修饰的属性名称
    target[attr] = params;
  }
}

// @logClass('×××××××××')
class HttpClient {
  @logProperty('https://www.google.com')
  public url: any | undefined;
  constructor() {
  }

  getData() {
    console.log(this.url);
  }
}

const http: any = new HttpClient();
http.getData();
*/
//方法装饰器
// 方法装饰器
/*
function get(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName);
    console.log(desc);

    target.apiUrl = '××××';
    target.run = function () {
      console.log('run');
    }
  }
}

class HttpClient {
  url: any | undefined;
  constructor() { }
  @get('https://www.google.com')
  getData() {
    console.log(this.url);
  }
}

const http: any = new HttpClient();
console.log(http.apiUrl);
http.run();
*/
/*
function get(params: any) {
  return function (target: any, methodName: any, desc: any) {
    console.log(target);
    console.log(methodName);
    console.log(desc.value);

    // 修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型
    // 1.保存当前的方法
    const oMethod = desc.value;
    desc.value = function (...args: any[]) {
      args = args.map((value) => String(value));
      console.log(args);
      console.log(params);
      oMethod.apply(this, args);
    }
  }
}


class HttpClient {
  url: any | undefined;
  constructor() { }
  @get('https://www.google.com')
  getData(...args:any[]) {
    console.log('我是getData里面的方法');
    console.log(args);
  }
}

const http: any = new HttpClient();
http.getData(123, '××××');
*/
// 装饰器
function logParams(params) {
    return function (target, methodName, paramIndex) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramIndex);
        target.apiUrl = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function (uuid, data) {
        console.log(uuid + "----" + data);
    };
    __decorate([
        __param(1, logParams('×××××'))
    ], HttpClient.prototype, "getData", null);
    return HttpClient;
}());
var http = new HttpClient();
http.getData(123456, 565656);
console.log(http.apiUrl);
