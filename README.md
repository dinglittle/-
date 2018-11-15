## Vue.js  技术揭秘

为了把 Vue.js 的源码讲明的, 课程设计成由浅入深, 分为核心、编译、扩展、生态四个方面去讲，并拆成了八个章节

![img](https://ustbhuangyi.github.io/vue-analysis/assets/mind.png)

- 准备工作
	- 认识 Flow
	- Vue.js 源码目录设计
	- Vue.js 源码构建
	- 从入口开始
- 数据驱动
	- new Vue 发生了什么
	- Vue 实例挂载的实现 
	- render
	- Vitrual DOM
	- createElement
	- update
- 组件化
	- createComponent
	- patch
	- 合并配置
	- 生命周期
	- 组件注册
	- 异步组件
- 深入响应式原理
	- 响应对象
	- 依赖收集
	- 派发更新
	- nextTick
	- 检测变化的注意事项
	- 组件更新
	- 原理图
- 编译
	- 编译入口
	- parse
	- optimize
	- codegen
- 扩展
	- event
	- v-model
	- slot
	- keep-alive
	- transitlon
	- transition-troup
- Vue-Router
	- 路由注册
	- VueRouter 对象
	- matcher
	- 路径切换
- Vuex
	- Vuex 初始化
	- API
	- 插件
