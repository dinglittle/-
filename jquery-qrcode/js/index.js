### 这里是 二维码生成的说明

使用了 `jquery-qrcode` 

#### 必要条件
- jquery 
- jquery.qrcode.min.js (必须是这个,否则报错)

#### 实现
```
// js
<script src="./js/jquery.qrcode.min.js"></script>
<script src="./js/jquery-3.2.1.js"></script>

// html
// 1.创建一个区域,用来显示 生成的二维码
<div id="qrcode"> </div>

// js 配置项
$('#qrcode').qrcode({
    width: 100,
    height: 100,
    // text: "http://dinglittle.github.io",
});

// 注意:由于 jquery-qrcode 是蚕蛹 charCodeAt() 这个方式进编码转换的,
// 	这个方法会默认获取它的 Unicode 编码, 
// 一般的解码器都是采用 UTF-8, ISO-8859-1 等方式
// 英文没问题, 中文需要编码转换, 
// 一般情况下 Unicode 是 UTF-16 实现, 禅道2位, 而 UTF-8 编码是3位, 


function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if ((c >= 0x0001) && (c <= 0x007F)) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        } else {
            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
        }
    }
    return out;
}

$('#qrcode1').qrcode({
	width:100,
	height:100,
	text: utf16to8('你好 ,我是xxx')
})
```