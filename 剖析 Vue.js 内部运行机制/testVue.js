// 实现 一遍 自定义vue

class Vue {
    // 构造函数需要入参
    /*
    	options: Vue 对象
     */
    constructor(options) {
        this._data = options.data;
        observer(this._data)
    }
}

// 自定义函数 实现watcher
function observer(obj) {
    /*
    	obj: 传入的实参, Object
     */
    // 先判断 
    // 入参存在 || 类型为 'object' (类型小写)
    if (!obj || typeof obj !== 'object') {
        return;
    }
    // 遍历 入参(object), 并调用监听方法
    // Object.keys(obj)  入参是一个对象类型
    Object.keys(obj).forEach((key) => {
            // 遍历 入参所有key
            // 取 对象 下的不定 key-value 值的时候 , 需要用 obj[key] 方式
            defineReactive(obj, key, obj[key])
        }
    }

    // 监听方法
    // 因为要实现 getter setter 方法, 所以需要将 val 传入
    function defineReactive(obj, key, val) {
        // ES5 Object.defineproperty(obj,key,descriptor)
        Object.defineProperty(obj, key, {
                // 描述
                // 是否可枚举
                enumerable: true, // 默认false
                // 是否可配置
                configurable: true // 默认false
            },
            get: function(val) {
                return val;
            },
            set: function(newVal) {
            	// 这里的 newVal 是外部调用的时候给的入参  app.a = 1
                if (newVal === val) return;
                cb(newVal);
            }
        )
    }


    function cb(newVal) {
        console.log('更新:', newVal)
    }