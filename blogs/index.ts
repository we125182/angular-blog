export const mdList = [{
  path: 'blog/angular开发问题汇总.md',
  time: '2019-08-27T03:18:11.739Z',
  name: 'angular开发问题汇总'
}, {path: 'blog/README1.md', time: '2019-08-27T02:28:47.949Z', name: 'README1'}, {
  path: 'blog/README.md',
  time: '2019-08-26T13:53:43.501Z',
  name: 'README'
}];
export const lastArticle = {
  title: 'angular开发问题汇总',
  date: '2018-04-27T09:36:16.000Z',
  tags: 'angular',
  categories: '前端',
  _content: '\n在开发angular中遇到的一些问题及解决方案. 将会持续更新\n\n### 1. 在cli运行的情况下, 添加懒加载模块可能报错:\n```bash\ncore.js:1448 ERROR Error: Uncaught (in promise): TypeError: undefined is not a function\nTypeError: undefined is not a function\n    at Array.map (<anonymous>)\n    at webpackAsyncContext (eval at ./src/$$_lazy_route_resource lazy recursive (main.bundle.js:13), <anonymous>:19:34)\n    at SystemJsNgModuleLoader.loadAndCompile (core.js:6558)\n    at SystemJsNgModuleLoader.load (core.js:6542)\n    at RouterConfigLoader.loadModuleFactory (router.js:4543)\n    at RouterConfigLoader.load (router.js:4523)\n    at MergeMapSubscriber.eval [as project] (router.js:2015)\n    at MergeMapSubscriber._tryNext (mergeMap.js:128)\n```\n#### 1.1 解决方案\n重新运行项目`npm start`\n\n### 2. 通过第三方插件或方法异步改变组件变量的值时出现变量没有更新到模板     \n\n#### 2.1 问题根源\nangular的检测机制是基于`zone`, 而第三方的异步调用运行在`zone`作用之外, 不会触发`zone`检测, 导致变量没有及时更新到模板\n\n#### 2.2 解决方法\n1. 通过`ChangeDetectorRef.detectChanges()`手动进行变量检测;\n2. 通过`ngZone.run(() => {})`来将方法放在zone中进行.\n',
  path: 'blog/angular开发问题汇总.md'
};
