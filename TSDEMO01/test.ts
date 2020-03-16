/*
    vscode配置自动编译
    
    1.第一步 tsc --init 生成tsconfig.json  去掉 outDir 配置的注释
    
    2.第二步 vscode 菜单栏 -> 终端 -> 运行任务 -> tsc:监视 - tsconfig.json
*/
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

// 任意类型
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
var go2 = function() {
  return "go2";
};

// 剩余参数
function sum(...args: number[]): number {
  return args.reduce((total, number) => total + number, 0);
}

console.log(`result ${sum(1, 2, 3, 4, 5)}`);

// ts中的重载
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
