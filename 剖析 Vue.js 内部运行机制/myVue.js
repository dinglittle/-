// 自己实现 一个 Vue

class Vue{
	// 构造 函数
	constructor(options){
		this._data = options.data;
		observer(this._data);
	}
}

function observer(value){
	// 先判断  传入的数据类型
	if(!value || (typeof value !== 'object')){
		return;
	}
	// 遍历 传入的数据  (对象)
	Object.keys(value).forEach((key)=>{
		/*
			value: 所有数据
			key:   key
			value[key]: 每个key对应的值
		 */
		defineReactive(value, key, value[key])
	})
}

function defineReactive(obj, key, val){
	// Object.defineproperty( obj , kye , descriptor)
	Object.defineProperty(obj, key, {
		enumerable:true, // 可枚举
		configurable:true, // 可修改 删除
		get: function reactiveGetter(){
			return val;// 直接返回值
		},
		set: function reactiveSetter(newValue){
			console.log('Object.defineproperty',newValue);
			if(newValue === val) return; // 值 一样
			cb(newValue);
		}
	})
}

// 更新调用 的方法
function cb(newValue){
	console.log('视图更新',newValue)
}