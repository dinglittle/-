/*
	时间戳显示为多少分钟前, 多少天前的JS处理
	方法名为 dateDiff , 支持一个参数 timestamp , 必须参数, 
	本方法会自动补全为何JS支持的13位数值(因为后端返回时间戳可能只星期到秒)
 */
/*
	时间戳显示为多少分钟前, 多少天前的处理
	eg.
	console.log(dateDiff(1411111111111)); // 2014年09月19日
 */

var dateDiff = function(timestamp) {
    // 补全为13位
    var arrTimestamp = (timestamp + '').split('');
    for (var start = 0; start < 13; start++) {
        if (!arrTimestamp[start]) {
            arrTimestamp[start] = '0';
        }
    }

    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamounth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - timestamp;

    // 如果本地时间反而小于变量时间
    if (diffValue < 0) {
        return '不久前';
    }

    // 计算差异时间的量级
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;

    // 数值补0方法
    var zero = function(value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    }

    // 使用
    if (monthC > 12) {
        // 月超过一年,直接显示年月日
        return (functioin() {
            var date = new Date(timestamp);
            return date.getFullYear() + '年' + zero(date.getMonth() + 1) + '月' + zero(date.getDate()) + '日';
        })()
    } else if (monthC >= 1) {
        return parseInt(monthC) + '月前';
    } else if (weekC >= 1) {
        return parseInt(weekC) + '周前';
    } else if (dayC >= 1) {
        return parseInt(dayC) + '天前';
    } else if (hourC >= 1) {
        return parseInt(hourC) + '小时前';
    } else if (minC >= 1) {
        return parseInt(minC) + '分钟前';
    }

    return '刚刚';
}