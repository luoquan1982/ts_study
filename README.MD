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

```js
function run():string{
  return 'run';
}
```

- 匿名函数

```js
const func2 = function():number{
  return 123;
}
```

- es5 里面方法的实参和形参可以不一样,但是 ts 中必须一样,如果不一样就需要配置可选参数

```js
function getInfo(name:string,age?:number):string{
  let result:string;
  age?result = `${name}----${age}`:`${name}----年龄保密`;
  return result;
}
```

- 默认参数:es5 中没法设置默认参数,es6 和 ts 中都可以设置默认参数
- 注意:可选参数必须配置到参数的最后面

```js
function getInfo(name:string,age:number=20){
  return `${name}----${age}`;
}
```

- 剩余参数

```js
function sun(...args:number[]){
  return args.reduce((total,num)=> total+sum,0);
}
```

- ts 函数重载
  - ts 为了兼容 es 以及 es6 重载的写法和 java 中有区别.

```js
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

```js
setTimeout(()=>{
  alert('1秒后执行');
},1000);
```

## 四、类

### es5 中的类

- 最简单的类

```js
function Person(){
  this.name = '张三';
  this.age = 20;
}

var p = new Person();
alert(p.name);
```

- 构造函数和原型链里面增加方法

```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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
```js
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

```js
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
```js
interface FullName {
  firstName: string; // 注意 以;结束
  secondName?: string;
}

function printName(name: FullName) {
  console.log(`${name.firstName}`);
}

printName({ firstName: "quan"});
```