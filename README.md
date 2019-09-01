## vw 像素级 还原设计稿
vw 等于初始包含块 html 元素 的 1%

1vm 就等于屏幕宽度的 1% . 

```
元素/设计图 = vw
690/750 = 0.92 => 92vw
```

ios8+  Android 4.4+ 都支持 vw

目前通常 ios9+  Android 5+

## 解决办法
webpack -> postcss 

[postcss-px-to-viewport]( https://www.npmjs.com/package/postcss-px-toviewport )


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