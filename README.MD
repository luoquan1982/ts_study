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

  - null 和 undefined

  - void 类型

  - never 类型

- typescript 中为了使编写代码更规范,更有利于维护,增加了类型校验,写 ts 代码必须制定类型
