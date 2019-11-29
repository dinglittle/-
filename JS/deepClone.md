深浅拷贝

## json 方式

```
JSON.parse(JSON.stringify(obj))
```

## base 0.1

#### 浅拷贝

```
function clone (target){
	let cloneTarget = {}
	for(const key in target){
		cloneTarget[key] =  target[key]
	}
	return  cloneTarget
}
```

#### 深拷贝

    考虑 深度 ， object 继续拷贝

```
function clone (target){
	if(typeof target === 'object'){
		let cloneTarget = {};
		for(const key in target){
			cloneTarget[key] = clone(target[key])
		}
		return cloneTarget
	}else{
		return target
	}
}
```

### 考虑数组

```
module.export = function clone(target){
	if(typeof target === 'object'){
		// 假如是数组 ,  初始化数组
		let cloneTarget = Array.isArray(target)?[]:{};
		for(const key in target){
			cloneTarget[key] = clone(target[key])
		}
		return cloneTarget
	}else{
		return target;
	}
}
```

### 循环引用

- 使用 map 克隆对象
- 有 直接返回
- 没有 - 将当前对象 作为 key ， 克隆对象作为 value 进行存储
- 继续克隆

- 解决循环引用的问题
  额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当要拷贝时，先去存储空间找，
  有没有拷贝这个对象，如果有直接返回，如果没有的话继续拷贝

```
{a:1,b:2}
function clone(target,map=new Map()){
	// target {a:1,b:2}
	if(typeof target === 'object'){// object 包含  Object Array Null
		// cloneTarget {a:1,b:2}
		let cloneTarget = Array.isArray(target)?[]:{};
		// 默认 map 为 空，如果 map 在这个数据，就返回
		// map 空
		if(map.get(target)){
			return target
		}
		// map {a:1,b:2} {}
		map.set(target,cloneTarget);
		for(const key in target){
			// {}.a = {a:1,b:2}['a'],{}
			cloneTarget[key] = clone(target[key],map);
		}
		return cloneTarget
	}else{
		return target
	}
}
```

### 使用 weakMap 自动回收

```
const obj = {}, 默认创建了一个强引用的对象，只有手动将 obj = null ,
它才会被垃圾机制进行回收，如果是弱引用对象，垃圾回收机制会自动帮我们回收



```

## 性能优化

- for...in
- for
- while

while 执行效率最高

改写 clone ， 当遍历数组时，直接用 forEach 进行遍历，当遍历对象时，使用 Object.keys 取出
所有的 Key 进行遍历，然后在遍历时把 forEach 回调函数 value 当作 key 使用

```
function clone(target,map = new WeakMap()){
	if(typeof target === 'object'){
		const isArray = Array.isArray(target);
		let cloneTarget = isArray ? []: {};

		if(map.get(target)){
			return target
		}
		map.set(target,cloneTarget)

		// 假如是对象 就拿 keys
		const keys = isArray ? undefined : Object.keys(target)
		forEach(keys || target, (value,key)=>{
			if(keys){
				key = value;
			}
			cloneTarget[key] = clone2(target[key],map)
		})
	}else{
		return target
	}
}
```
