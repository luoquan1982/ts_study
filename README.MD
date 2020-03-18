# typescript 学习

## 一、vscode 配置自动编译

- 第一步 tsc --init 生成 tsconfig.json 去掉 outDir 配置的注释
- 第二步 vscode 菜单栏 -> 终端 -> 运行任务 -> tsc:监视 - tsconfig.json

## 二、typescript 中的数据类型

- typescript 中为了使编写的代码更规范,更有利于维护,增加了类型校验,在 typescript 中主要给我们提供了以下数据类型

  - 布尔类型(boolean)

  - 数字类型(number)

  - 字符串类型(string)

  - 数组类型(array)

    - 定义数组有两种方式
      - 第一种定义数组的方式 let arr:number[] = [1,2,3,4]
      - 第二种定义数组的方式 let arr:Array<number> = [1,2,3,4]

  - 元祖类型(tuple) 属于数组的一种

    - 定义 let arr:[number,string] = [123,'123'];

  - 枚举类型(enum)

    - 定义 enum 枚举名 {
      标识符 [=整型常数],
      标识符 [=整型常数],
      标识符 [=整型常数],
      };
    - 如果标识符没有赋值 他的值就是下标

  - 任意类型(any)

    - 定义 let a:any = 123;

  - null 和 undefined

    - 其他数据类型的子类型
    - 定义 undefined let ud:undifined;
      - 一般对于一个值可能是一种确定的数据类型也可能是 undefined 就可以这样定义
      - let ud:number|undefined
    - 定义 null let num:null = null
    - 当一个元素可能为 number,null 或 undefined 可以这样定义
      - let num:number|null|undefined

  - void 类型

    - void 类型:typescript 中的 void 表示没有任何类型,一般用于定义方法的时候方法没有返回值
    - 定义一个没有返回值的方法
      function run(): void {
      console.log("run");
      }

  - never 类型

    - never 类型:是其他类型(包括 null 和 undefined)的子类型,代表从不会出现的值
    - 这意味着声明 never 的变量只能被 never 类型所赋值
    - 定义
      let nev: never;
      nev = (() => {
      throw new Error();
      })();

  - typescript 中为了使编写代码更规范,更有利于维护,增加了类型校验,写 ts 代码必须制定类型

## 三、函数的定义

- 函数声明法

```ts
function run():string{
  return 'run';
}
```

- 匿名函数

```ts
const func2 = function():number{
  return 123;
}
```

- es5 里面方法的实参和形参可以不一样,但是 ts 中必须一样,如果不一样就需要配置可选参数

```ts
function getInfo(name:string,age?:number):string{
  let result:string;
  age?result = `${name}----${age}`:`${name}----年龄保密`;
  return result;
}
```

- 默认参数:es5 中没法设置默认参数,es6 和 ts 中都可以设置默认参数
- 注意:可选参数必须配置到参数的最后面

```ts
function getInfo(name:string,age:number=20){
  return `${name}----${age}`;
}
```

- 剩余参数

```ts
function sun(...args:number[]){
  return args.reduce((total,num)=> total+sum,0);
}
```

- ts 函数重载
  - ts 为了兼容 es 以及 es6 重载的写法和 java 中有区别.

```ts
function fun(name: string): string;

function fun(age: number): number;

function fun(str: any): any {
  if (typeof str === "string") {
    return `我叫${str}`;
  } else {
    return `我的年龄是${str}`;
  }
}

alert(fun('罗全'));
alert(fun(38));
```

- 箭头函数
- 注意箭头函数里面 this 指向的上下文

```ts
setTimeout(()=>{
  alert('1秒后执行');
},1000);
```

## 四、类

### es5 中的类

- 最简单的类

```ts
function Person(){
  this.name = '张三';
  this.age = 20;
}

var p = new Person();
alert(p.name);
```

- 构造函数和原型链里面增加方法

```ts
function Person(){
  this.name = '张三';
  this.age = 20;
  this.run = function(){  // 实例方法,new了对象之后才能调用
    alert(this.name+'在运动');
  }
}
// 原型链上面的属性会被多个实例共享,构造函数不会
Person.prototype.sex='男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}
var p = new Person();
p.work();
```

- 类里面的静态方法
```ts
function Person(){
  this.name = '张三';
  this.age = 20;
  this.run = function(){  // 实例方法,new了对象之后才能调用
    alert(this.name+'在运动');
  }
}
// 原型链上面的属性会被多个实例共享,构造函数不会
Person.prototype.sex='男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}
Person.getInfo = function(){
  alert('我是静态方法');
}
// 调用静态方法
Person.getInfo();
var p = new Person();
// 调用实例方法
p.work();
```

- es5里面的继承 对象冒充继承
```ts
function Person(){
  this.name = '张三';
  this.age = 20;
  this.run = function(){  // 实例方法,new了对象之后才能调用
    alert(this.name+'在运动');
  }
}

Person.prototype.sex='男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}

// web类继承person类 原型链对象冒充的组合继承模式
function Web(){
  Person.call(this);  // 对象冒充实现继承
}

var w = new Web();
w.run();  // 对象冒充可以继承构造函数里面的属性和方法
w.work(); // 此方法会报错,因为对象冒充继承可以继承构造函数里面的属性和方法,但不能继承原型链上的属性和方法
```

- es5里面的继承 原型链继承
```ts
function Person(){
  this.name = '张三';
  this.age = 20;
  this.run = function(){  // 实例方法,new了对象之后才能调用
    alert(this.name+'在运动');
  }
}

Person.prototype.sex='男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}

// web类继承person类 
function Web(){
}

// 原型链实现继承:可以继承构造函数里面的属性和方法
// 也可以继承原型链上面的属性和方法
Web.prototype = new Person(); 
var w = new Web();
w.run();  // 原型链继承可以继承构造函数中的方法
w.work(); // 原型链继承可以继承原型链上的属性和方法
```

- 原型链继承的问题
```ts
function Person(name,age){
  this.name = name;
  this.age = age;
  this.run = function(){
    alert(this.name+'在运动');
  }
}

Person.prototype.sex = '男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}

function Web(name,age){
}

Web.prototype = new Person();

var w = new Web('赵四',20); // 实例化子类的时候没办法给父类传参
w.run();
```

- 组合继承模式 原型链+构造函数的组合继承模式
```ts
function Person(name,age){
  this.name = name;
  this.age = age;
  this.run = function(){
    alert(this.name+'在运动');
  }
}

Person.prototype.sex='男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}

function Web(name,age){
  Person.call(this,name,age); // 对象冒充继承 可以继承构造函数里面的属性和方法 实例化子类可以给父类传参
}

Web.prototype=new Person();
var w = new Web('赵四',20);
w.run();
```

- 原型链 + 对象冒充继承的另一种方式
```ts
function Person(name,age){
  this.name = name;
  this.age = age;
  this.run = function(){
    alert(this.name+'在运动');
  }
}

Person.prototype.sex='男';
Person.prototype.work = function(){
  alert(this.name+'在工作');
}

function Web(name,age){
  Person.call(this,name,age); // 对象冒充继承 可以继承构造函数里面的属性和方法 实例化子类可以给父类传参
}

Web.prototype = Person.prototype;
var w = new Web('赵四',20);
w.run();
```

### TS中定义类
```ts
class Person {
  name: string;

  constructor(name: string) {
    // 构造函数 实例化类的时候触发的方法
    this.name = name;
  }

  getName:string(){
    return this.name;
  }

  setName:void(name:string){
    this.name = name
  }

  run(): void {
    alert(this.name);
  }
}

const p = new Person("张三");
alert(p.getName());
```

### TS中类的继承 extends super
```ts
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
  // 构造函数是必须要有的
  constructor(name:string){
    super(name);  // 初始化父类的构造函数
  }
}

var w = new Web('李四');
alert(w.run());
```

### TS中继承的探讨 父类的方法和子类的方法一致
```ts
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
```

### 类里的修饰符 typescript里面定义属性的时候给我们提供了 三种修饰符
  - public:公有 在类里面 子类 类外面都可以访问
  - protected:保护类型 在类里面 子类里面可以访问,在类外部没法访问
  - private:私有 在类里面可以访问 子类,类外部都没法访问
  - 注意:属性如果不加修饰符,默认就是public

### 静态属性 静态方法
```ts
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
```

### 多态:父类定义一个方法不去实现,让继承他的子类去实现 每一个子类有不同的表现 多态属于继承
```ts
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
```

### 抽象方法 用abstract关键字定义抽象方法和抽象类,抽象类中的抽象方法不包含具体实现并且必须在派生类中实现.
- 注意:抽象方法只能放在抽象类里面,抽象类不能被实例化
- 抽象类和抽象方法用来定义标准
```ts
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
```

## TS中的接口
- 接口的作用:在面向对象的编程中,接口是一种规范的定义,他定义了行为和动作的规范,在程序设计里面,接口起到了一种限制和规范的作用.接口定义了某一批类所需要遵守的规范,接口不关心这些类的内部状态数据,也不甘心这些类里方法的实现细节,他只规定这批类里必须提供某些方法,提供这些方法的类就可以满足实际需要.typescript中的接口类似于java,同时还增加了更灵活的接口类型,包括属性、函数、可索引的类等。

- typescript中的接口类型
  - 属性接口
  - 函数类型接口
  - 可索引接口
  - 类类型接口
  - 接口扩展

```ts
interface FullName {
  firstName: string; // 注意 以;结束
  secondName: string;
}

function printName(name: FullName) {
  console.log(`${name.firstName}--${name.secondName}`);
}

printName({ firstName: "quan", secondName: "luo" });
```

### 可选属性
```ts
interface FullName {
  firstName: string; // 注意 以;结束
  secondName?: string;
}

function printName(name: FullName) {
  console.log(`${name.firstName}`);
}

printName({ firstName: "quan"});
```

- TS封装ajax
```ts
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
```

### 函数类型接口
- 对方法传入的参数 以及返回值进行约束 批量约束
```ts
interface encrypt {
  (key: string, value: string): string;
}

const md5: encrypt = function(key: string, value: string): string {
  return key + value;
};

console.log(md5('name','zhangshan'));

```

### 可索引接口:数组或对象的约束(不常用)
```ts
interface UserArr {
  [index: number]: string;  // 索引值必须为number,值必须为string
}

var arr: UserArr = ["aaa", "bbb"];
console.log(arr[0]);
```

### 可索引接口:对对象的约束
```ts
interface UserObj {
  [index: string]: string;
}

const arr: UserObj = {
  name: "luoquan"
};
```

### 类类型接口:对类的约束 和抽象类有点相似
```ts
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
```

### 接口扩展:接口可以继承接口
```ts
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
```

## 泛型
- 软件工程中,我们不仅要创建一致的定义良好的API,同时也要考虑可重用性.组件不仅能够支持当前的数据类型,同时也能支持未来的数据类型,这在创建大型系统时为你提供了十分灵活的功能.
- 在像C#和Java这样的语言中,可以使用泛型来创建可重用的组件,一个组件可以支持多种类型的数据.这样用户就可以以自己的数据类型来使用组件.
- 通俗理解:泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
```ts
function getData<T>(value: T): T {
  return value;
}

console.log(getData<string>('hello'));
```

- 泛型类:比如有个最小堆算法,需要同时支持返回数字和字符串两种类型.通过类的泛型来实现
```ts
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
```

### 泛型接口1
```ts
interface ConfigFn {
  <T>(value: T): T;
}

const getData: ConfigFn = function<T>(value: T): T {
  return value;
};

console.log(getData<string>('abc'));
```

### 泛型接口2
```ts
interface ConfigFn<T> {
  (value: T): T;
}

function getData<T>(value: T): T {
  return value;
}

const myGetData:ConfigFn<string> = getData;

console.log(myGetData('20'));
```

- 定义一个操作数据库的库 支持Mysql Mssql MongoDb
- 要求:Mysql MsSql MongoDb功能一样 都有 add update delete get方法
- 注意:约束统一的规范、以及代码重用
- 解决方案:需要约束规范所以要定义接口,需要代码重用所以用到泛型
  - 1.接口:在面向对象的编程中,接口是一种规范定义,它定义了行为和动作的规范
  - 2.泛型 通俗理解:泛型就是解决 类 接口 方法的复用性
```ts
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

//定义一个操作mysql数据库的类
//注意:要实现泛型接口 这个类也应该是一个泛型类
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
```

## TS中的模块
- 模块的概念(官方):关于术语的一点说明:请务必注意一点,typescript 1.5里面术语名已经发生了变化."内部模块"现在称做"命名空间"。"外部模块"现在则简称为"模块"模块再起自身的作用域里执行,而不是在全局作用域里;这意味着定义在一个模块里的变量,函数,类等等在模块外部是不可见的,除非你明确地使用export形式之一导出他们.相反,如果想使用其他模块导出的变量,函数,类,接口等得时候,你必须要导入他们,可以使用import形式之一.
- 模块的概念(自己理解):我们可以吧一些公共的功能单独抽离成一个文件作为一个模块.模块里面的变量 函数 类等默认是私有的,如果我们要在外部访问模块里面的数据(变量、函数、类),我们需要通过export暴露模块里面的数据(变量、函数、类...)。暴露后我们通过import引入模块就可以使用模块里面暴露的数据(变量、函数、类...)
```ts
// 模块暴露方式一
export const dbUrl = "××××××××";

export function getData(): any[] {
  console.log("获取数据库的数据");
  return [
    {
      title: "123123"
    },
    {
      title: "123123"
    }
  ];
}

export function save() {
  console.log("保存数据成功");
}
```
```ts
// 模块暴露方式二
const dbUrl = "××××××××";

function getData(): any[] {
  console.log("获取数据库的数据");
  return [
    {
      title: "123123"
    },
    {
      title: "123123"
    }
  ];
}

function save() {
  console.log("保存数据成功");
}

export {
  dbUrl,
  getData,
  save
}
```

### export default 默认导出
- 每个模块都可以有一个default导出.默认导出使用default关键字标记;并且一个模块只能够有一个default导出.需要使用一种特殊的导入形式来使用

## 命名空间
- 在代码量较大的情况下,为了避免各种变量命名冲突,可将相似功能的函数、类、接口等放置到命名空间内。同Java的包、.Net的命名空间一样,Typescript的命名空间可以将代码包裹起来,只对外暴露需要在外部访问的对象。命名空间内的对象通过export
- 命名空间和模块的区别:内部模块,主要用于组织代码,避免命名冲突.
- 模块:TS的外部模块的简称,侧重代码的复用,一个模块里可能会有多个命名空间
```ts
namespace A {
  interface Animal {
    name: string;
    eat(): void;
  }

  class Dog implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat(): void {
      console.log(`${this.name} 吃狗粮`);
    }
  }

  class Cat implements Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    eat(): void {
      console.log(`${this.name} 吃猫粮`);
    }
  }

  let dog = new Dog('狗狗');
  dog.eat();
}
```

## TS装饰器
- 装饰器是一种特殊类型的声明,它能够被附加到类声明,方法,属性或参数上,可以修改类的行为.
- 通俗的讲装饰器就是一个方法,可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
- 常见的装饰器有:类装饰器、属性装饰器、方法装饰器、参数装饰器
- 装饰器的写法:普通装饰器(无法传参)、装饰器工厂(可传参)
- 装饰器是过去几年中js最大的成就之一,已是ES7的标准特性之一
### 类装饰器:类装饰器在类声明之前被声明(紧靠着类声明).类装饰器应用于构造函数,可以用来监视,修改或替换类定义.传入一个参数
### 普通装饰器(无法传参)
```ts
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
```

### 类装饰器:装饰器工厂(可传参)
```ts
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
```

### 类装饰器:重载构造函数的例子
- 类装饰器表达式会在运行时当作函数被调用,类的构造函数作为其唯一的参数.
- 如果类装饰器返回一个值,它会使用提供的构造函数来替换类的声明.
```ts
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
```

### 属性装饰器:属性装饰器表达式会在运行时当作函数被调用,传入下列两个参数
- 1、对静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 2、成员的名字
```ts
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
```

### 方法装饰器
- 它会被应用到方法的属性描述符上,可以用来监视,修改或者替换方法定义
- 方法装饰器会在运行时传入下列三个参数:
  - 1、对于静态成员来说是类的构造函数，对于实力成员是类的原型对象
  - 2、成员的名字
  - 3、成员的属性描述符

- 方法装饰器一
```ts
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
```
- 方法装饰器二
```ts
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
```

### 方法参数装饰器(用的场景不是太多)
- 参数装饰器表达式会在运行时当作函数被调用,可以使用参数装饰器为类的原型增加一些元素数据,传入下列3个参数:
  - 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
  - 2、参数的名字
  - 3、参数在函数参数列表中的索引
```ts
// 装饰器
function logParams(params: any) {
  return function (target: any, methodName: any, paramIndex: any) {
    console.log(params);
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
    target.apiUrl = params;
  }
}

class HttpClient {
  url: any | undefined;

  constructor() { }

  getData(uuid: any, @logParams('×××××') data: any) {
    console.log(`${uuid}----${data}`);
  }
}

const http: any = new HttpClient();
http.getData(123456, 565656);
console.log(http.apiUrl);
```

### 装饰器执行顺序
- 属性->>方法->>方法参数->>类