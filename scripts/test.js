const {parse, split, escape} = require('./formatMd');

const str = `
---
title: angular开发问题汇总
date: 2018-04-27 17:36:16
tags: angular
categories: 前端
---

在开发angular中遇到的一些问题及解决方案. 将会持续更新

### 1. 在cli运行的情况下, 添加懒加载模块可能报错:`;

const resOfParse = parse(str);
const resOfSplit = split(str);
const resOfEsc = escape(str);

console.log(resOfParse, resOfSplit, resOfEsc);
