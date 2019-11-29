## on-day-day

[给学不动的自己加点料](./one-day-day/README.md)

## vw 像素级 还原设计稿

vw 等于初始包含块 html 元素 的 1%

1vm 就等于屏幕宽度的 1% .

```
元素/设计图 = vw
690/750 = 0.92 => 92vw
```

ios8+ Android 4.4+ 都支持 vw

目前通常 ios9+ Android 5+

## 解决办法

webpack -> postcss

[postcss-px-to-viewport](https://www.npmjs.com/package/postcss-px-toviewport)

## post-css-px-to-viewport 插件配置

```
module.exports = {
	"plugins":{
		"postcss-px-to-viewport":{
			viewportWidth: 750, // 设计图基准 375
			viewportHeight: 1334, // 667
			unitPrecision: 3, // 转换后的精度, 3 表示保留3位小数
			viewportUnit:'vw', // 转换成什么视口单位 , 这里 vw
			selectorBlackList:['.usepixel'], // 选择符数组,对应声明中的像素单位不会转换
			minPixeValue:1, // 最小像素值,大于等于这个值才会转换
			mediaQuery:false, // 是否转换媒体查询中的像素
		}
	}
}
```

## Vue.js 技术揭秘

为了把 Vue.js 的源码讲明的, 课程设计成由浅入深, 分为核心、编译、扩展、生态四个方面去讲，并拆成了八个章节

![img](https://ustbhuangyi.github.io/vue-analysis/assets/mind.png)

- 准备工作 - 认识 Flow - Vue.js 源码目录设计 - Vue.js 源码构建 - 从入口开始
- 数据驱动 - new Vue 发生了什么 - Vue 实例挂载的实现 - render - Vitrual DOM - createElement - update
- 组件化 - createComponent - patch - 合并配置 - 生命周期 - 组件注册 - 异步组件
- 深入响应式原理 - 响应对象 - 依赖收集 - 派发更新 - nextTick - 检测变化的注意事项 - 组件更新 - 原理图
- 编译 - 编译入口 - parse - optimize - codegen
- 扩展 - event - v-model - slot - keep-alive - transitlon - transition-troup
- Vue-Router - 路由注册 - VueRouter 对象 - matcher - 路径切换
- Vuex - Vuex 初始化 - API - 插件
