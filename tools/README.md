# vConsole
http://github.com/Tencent/vConsole

## 介绍
一个轻量、可拓展、针对手机网页的前端开发者调试面板

## 特性
- 查看 console 日志
- 查看网络请求
- 查看页面 element 结构
- 查看 Cookie、localStorage 和 SessionStorage
- 手机执行 JS 命令行
- 自定义插件

## 上手
### 安装
npm install vsconsole

### 引入 `dist/vconsole.min.js` 到项目中
```
<script src="path/to/vconsole.min.js"></script>
<script>
	// 初始化
	var vConsole = new VConsole();
	console.log('Hello world');
</script>
```
