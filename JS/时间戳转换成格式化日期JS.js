/*
	一个完整的时间戳转换成格式化日期JS
	eg:
		dateFormat(1111, 'Y年m月d日 H时i分')
		"2322年02月06日 03时45分"
 */

var dateFormat = function(timestamp,formats){
	// formats 格式包括
	// 1. Y-m-d
	// 2. Y-m-d H:i:s
	// 3. Y年m月d日
	// 4. Y年m月d日 H时i分
	formats = formats || 'Y-m-d';

	// 处理 < 10 的,补 0
	var zero = function(value){
		if(value<10){
			return '0' + value;
		}
		return value;
	}

	var myDate = timestamp? new Date(timestamp): new Date();

	var year = myDate.getFullYear();
	var month = zero(myDate.getMonth() + 1);
	var day = zero(myDate.getDate());

	var hour = zero(myDate.getHours());
	var minite = zero(myDate.getMinutes());
	var second = zero(myDate.getSeconds());
	// stringObject.match(searchvalue) 在字符串内检索指定的值,返回值 
	return formats.replace(/Y|m|d|H|i|s/ig, function(matches){
		// 这里 matches 是通过正则匹配出来的, formats = 'Y-m-d', 分别是 Y m d
		// 下面返回的数据, 从对象中找到 对应的值, 因为是可变的所以用 [] 
		return({
			Y: year,
			m: month,
			d: day,
			H: hour,
			i: minite,
			s: second
		})[matches];
	})
}