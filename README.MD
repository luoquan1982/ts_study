# typescript学习

## 一、vscode配置自动编译
* 第一步 tsc --init 生成tsconfig.json  去掉 outDir 配置的注释
* 第二步 vscode 菜单栏 -> 终端 -> 运行任务 -> tsc:监视 - tsconfig.json

## 二、typescript中的数据类型
* typescript中为了使编写的代码更规范,更有利于维护,增加了类型校验,在typescript中主要给我们提供了以下数据类型
    * 布尔类型(boolean)
    * 数字类型(number)
    * 字符串类型(string)
    * 数组类型(array)
    * 元祖类型(tuple)
    * 枚举类型(enum)
    * 任意类型(any)
    * null 和 undefined
    * void类型
    * never类型