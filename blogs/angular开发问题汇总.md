---
title: angular开发问题汇总
date: 2018-04-27 17:36:16
tags: angular
categories: 前端
---

在开发angular中遇到的一些问题及解决方案. 将会持续更新

## 1. 在cli运行的情况下, 添加懒加载模块可能报错
```bash
core.js:1448 ERROR Error: Uncaught (in promise): TypeError: undefined is not a function
TypeError: undefined is not a function
    at Array.map (<anonymous>)
    at webpackAsyncContext (eval at ./src/$$_lazy_route_resource lazy recursive (main.bundle.js:13), <anonymous>:19:34)
    at SystemJsNgModuleLoader.loadAndCompile (core.js:6558)
    at SystemJsNgModuleLoader.load (core.js:6542)
    at RouterConfigLoader.loadModuleFactory (router.js:4543)
    at RouterConfigLoader.load (router.js:4523)
    at MergeMapSubscriber.eval [as project] (router.js:2015)
    at MergeMapSubscriber._tryNext (mergeMap.js:128)
```
解决方案  
重新运行项目`npm start`

## 2. 通过第三方插件数据同步问题     

### 2.1 问题根源
angular的检测机制是基于`zone`, 而第三方的异步调用运行在`zone`作用之外, 不会触发`zone`检测, 导致变量没有及时更新到模板

### 2.2 解决方法
1. 通过`ChangeDetectorRef.detectChanges()`手动进行变量检测;
2. 通过`ngZone.run(() => {})`来将方法放在zone中进行.
