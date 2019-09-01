class VNode{
	constructor(tag,data,children,text,elm){
		// 当前节点的标签名
		this.tag = tag;
		// 当前节点的一些数据信息, 比如 props attrs 等数据
		this.data = data;
		// 当前节点的了节点 , 是一个数组
		this.children = children;
		// 当前节点的文本
		this.text = text;
		// 当前虚拟节点对应的真实dom节点
		this.elm = elm;
	}
}

function render(){
	return new VNode(
		'span',
		{
			// 指令集合
			directives:[
				{
					rawName:'v-show',
					expression:'isShow',
					name:'show',
					value:true
				}
			],
			// 静态 class
			staticClass:'demo'
		},
		[ new VNode(undefined,undefined,undefined,'This is a span')]
	);
}

// 转换成 VNode 以后的情况
/*
	{
		tag:'span',
		data:{
			// 指令集合数组
			directives:[
				{
					// v-show 指令
					rawName:'v-show',
					expression:'isShow',
					name:'show',
					value:true
				}
			],
			// 静态 class
			staticClass:'demo'
		},
		text: undefined,
		children:[
			// 子节点
			{
				tag:undefined,
				data:undefined,
				text:'This is a span',
				children: undefined
			}
		]
	}
*/

// 创建一个空节点
function createEmptyVNode(){
	const node = new VNode();
	node.text = '';
	return node;
}
// 创建一个文本节点
function createTextVNode(val){
	return new VNode(undefined, undefined,undefined,String(val));
}
// 克隆一个 VNode 节点
function cloneVNode(node){
	const cloneVnode = new VNode(
		node.tag,
		node.data,
		node.children,
		node.text,
		node.elm
	);
	return cloneVnode;
}
