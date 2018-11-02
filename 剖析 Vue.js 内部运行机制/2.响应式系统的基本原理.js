// 响应式系统的依赖收集追踪原理

// 订阅者
// 定义了 增加 watcher 方法
// 触发通知方法
class Dep{
	constructor(){
		// 存放 Watcher 对象的数组
		this.subs = [];
	}
	// 在 subs 中添加一个 Watcher 对象
	addSub(sub){
		this.subs.push(sub);
	}

	// 通知所有 Watcher 对象更新视图
	notify(){
		this.subs.forEach((sub)=>{
			sub.update();
		})
	}
}

// 观察者 Watcher
// 
class Watcher{
	constructor(){
		// 在 new 一个 Watcher 对象时将该赋值给 Dep.target, 在 get 中用
		Dep.target = this;
	}
	// 更新视图的方法
	update(){
		console.log('视图更新啦~');
	}
}

// Dep.target = null;


// 依赖收集
// 改造  definfReactive 方法

function defineReactive(obj,key,val){
	// 一个 Dep 对象
	const dep = new Dep();

	Object.defineProperty(obj,key,{
		enumerable:true,
		configurable:true,
		get:function reactiveGetter(){
			// 将 Dep.target (即当前的 Watcher 对象存入dep的subs中)
			dep.addSub(Dep.target);
			return val;
		},
		set: function reactiveSetter(newVal){
			if(newVal === val) return;
			// 在 set 的时候 触发 dep 的 
			dep.notify();
		}
	})
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

class Vue{
	constructor(options){
		this._data = options.data;
		observer(this._data);
		// 新建一个 watcher 观察者对象, 这时候 Dep.target 会指向这个 watcher 对象 
		new Watcher();
		// 在这里模拟 render 的过程 ,为了触发 test 属性的 get 函数
		console.log('render~',this._data.test);
	}
}