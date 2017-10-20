```
<!DOCTYPE html>
<html>
<head>
	<title>鼠标无限移动 JS API Pointer Lock</title>

	<style>
		.box{
			line-height: 800px;
			text-align: center;
			position: relative;
			perspective: all;
		}
		.box img{
			vertical-align: middle;
		}
	</style>
</head>
<body>
	<!-- 
		简介 :
			Pointer Lock API

			3个属性
				Document.pointerLockElement
				Docuemnt.onPointerlockchange
				Document.onpointerlockerror

			2个方法
				Element.requestPointerLock()
				Document.exitPointerLock()

			2个事件
				pointerlockchange
				pointerlockerror

			其中,2个事件和其中2个属性是一一对应的,因此,我们实际上需要了解的知识点是下面这些:
			Document.pointerLockElement, 以及 Elemment.requestPointerLock()  Document.exitPointerLock() 

			以及 Pointerlockchange 和 pointerlockerror 事件
	-->


	<div class="box">
		<img id="image" src="./01.jpg">
	</div>
	
	<script>
		/*
			Pointer Lock API

			1. Document.pointerLockElement
			指当前页面触发鼠标无限滚动的元素,通常使用语法为:
			var element = document.pointerLockElement;
			返回的是一个DOM元素对象,如果当前页面是鼠标锁定状态,则返回值是 null


			2. Element.requestPointerLock()
			可以让页面进入鼠标锁定状态(鼠标直接消失),鼠标无限滚动,坐标无限变化,通常语法为:
			var element.requestPointerLock();

			3. Document.exitPointerLock()
			让页面从鼠标锁定状态退出,通常使用语法为:
			document.exitPointerLock();
			浏览器默认支持按下 ESC 键退出鼠标锁定状态,但是用户有时候更习惯于点击取消等,此时就可以使用 document.exitPointerLock() 进行设置.

			4. pointerlockchange 事件
			当页面鼠标锁定状态改变的时候触发. 例如:
			document.addEventListener('pointerlockchange', function(){
				// ...
			},false)

			5. pointerlockerror 事件
			当页面鼠标锁定失败的时候触发. 例如当你试图同时锁定同一个页面的多个 <iframe> 时候,就会触发这个出错事件.
		
		*/
		
		var eleImage = document.getElementById('image');

		if(eleImage){
			// 起始值
			var moveX = 0, moveY = 0;
			// 图片无限变换的方法
			var rotate3D = function(event){
				moveX = moveX + event.movementX;
				moveY = moveY + event.movementY;
				console.log(event.movementX);
				console.log(event.movementY);

				eleImage.style.transform = 'rotateX(' + moveY + 'deg) rotateY(' + moveX + 'deg)';
			};

			// 触发鼠标锁定
			eleImage.addEventListener('click',function(){
				eleImage.requestPointerLock();
			});

			// 再次点击页面,取消鼠标锁定处理
			document.addEventListener('click',function(){
				// 检测当前鼠标锁定无限滚动的元素
				if(document.pointerLockElement == eleImage){
					// 让页面从鼠标锁定状态退出
					document.exitPointerLock();
				}
			})

			// 检测鼠标锁定状态变化
			document.addEventListener('pointerlockchange',function(){
				if(document.pointerLockElement == eleImage){
					// 鼠标锁定
					document.addEventListener('mousemove',rotate3D,false);
				}else{
					// 鼠标未锁定
					document.removeEventListener('mousemove',rotate3D,false);
				}
			})


		}


		/*
			其中,应用了 pointerlockerror 事件的其他忾有属性和方法

			原理大致如下, 
				
				执行eleImage.requ3stPointerLock() 让页面进入鼠标锁定状态,

				此时,会触发 pointerlockchange 事件,

				于是,给页面绑定鼠标移动改变图片旋转的方法,

				为了避免重复绑定,我们借助 document.pointerLockElement 判断页面的锁定状态,

				最后,为了方面取消页面锁定状态,我们在页面上绑定了 点击事件 , 通过 document.exitPointerLock() 取消页面的锁定 状态.


			需要说明的:
		
				event.movementX 和 event.movementY 表示每次 mousemove 事件触发时候,距离上次移动的水平和垂直位置大小,

				而不是具体的某个坐标值.


			兼容性:
				Pointer Lock API 是与鼠标相关的API ,因此移动端都不支持

				Chrome  Firefox  Edge 都支持,可以不用加私有前缀 



		 */


		 
	</script>

	<a href="http://www.zhangxinxu.com/wordpress/2017/10/js-api-pointer-lock/comment-page-1/" title="">阅读原文</a>

</body>
</html>
```