# Gulp ����ָ��
https://github.com/nimojs/gulp-book

---
gulp�ͻ��� node ʵ�� web ǰ���Զ����Ŀ������ߣ��������ܹ��������߿���Ч�ʡ�

�� web ǰ�˿����������кܶࡰ�ظ�������������ѹ�� CSS/JS �ļ�������Щ���������й��ɵġ�
�ҵ���Щ���ɣ�����д gulp ���ô��룬�� gulp �Զ�ִ����Щ���ظ���������

---
## ��װ Node �� Gulp 
---
gulp�ǻ��� node ʵ�ֵģ���ô���Ǿ���Ҫ�Ȱ�װ node.
-node��һ������ Chrome JavaScript V8 ���潨����һ��ƽ̨������������ʵ�� Web ���������� PHP ���¡�

�� https://nodejs.org/ �����ɫ�� **INSTALL** ��ť���ذ�װ node .

## ʹ���ն�/������
---
### ������

�� windows �пɰ� win+R �� cmd + enter ��������

### �ն�(Mac)

�� Launchpad(����һ����ͼ��)������Ļ�Ϸ�������������  �ն� + enter ���ն�

### �鿴 node �汾��

���ն�/������������ `node -v` ��� node �Ƿ�װ�ɹ�����װ�ɹ�����ʾ�� node �İ汾�š�

### ��תĿ¼

�ն�/�������п���ʹ�� cd Ŀ¼�� ��ת��ָ��Ŀ¼��Mac�л�����ʹ�� ls �鿴��ǰĿ¼�µ��ļ��б�

**windows**
windows �¿�ʹ������������תָ��Ŀ¼��
```
//��ת�� C ��Ŀ¼
cd c:\
//��ת����ǰĿ¼�� dome �ļ���
cd demo
//��ת����һ��
cd ..
```

**Mac**
Mac�н���ֻ�� Documents Ŀ¼�½����ļ�������
```
//��ת���ļ�Ŀ¼
cd /User/����û���/Documents/
//���һ�δ��ն�ʱֱ�ӽ���
cd Documents
//�鿴Ŀ¼���ļ��б�
ls
//�����ļ���
mkdir demo
//��ת����ǰĿ¼�µ� demo �ļ���
cd demo
//��ת���ϼ�Ŀ¼
cd ..
```

### �˳�����״̬

���������������������һЩһֱ���е������������л���롰���С�״̬����ʱ�㲻�����������������������
��ͨ�� `ctrl+c` ֹͣ  gulp ��(Mac��ʹ�� `control+c`)

������½�����������д���`gulp.watch`��������������`gulp`����Ҫʹ��`ctrl+c`�˳�����

## npmģ�������
---
http://javascript.ruanyifeng.com/nodejs/npm.html

## ��װgulp
---
npm��node�İ������ߣ�������������װ gulp ����İ���(�ڰ�װnodeʱ�Ѿ��Զ���װ��npm)
������������
```
npm instll -g gulp
```
��һֱû�а�װ�ɹ�������[cnpm](https://github.com/nimojs/blog/issues/20)��װ

��˼�ǣ� ʹ�� npm ��װȫ���Ե�(-g)gulp����

-����㰲װʧ�ܣ�������` sudo npm install -g gulp`ʹ�ù���ԱȨ�ް�װ.

��װʱ��ע�������е���ʾ��Ϣ����װ��ɺ��������������`gulp -v`��ȷ�ϰ�װ�ɹ���

���ˣ����������׼��������

---

# ʹ�� gulp ѹ�� JS
---
�������������½ں��Ķ����½�:
1.��װNode �� gulp

ѹ�� js ����ɽ���js�ļ���С�����ҳ���ҿ��ٶȡ��ڲ����� gulp ʱ������Ҫͨ�����ֹ����ֻ����ѹ��������

���е� gulp �����д�����Կ����ǽ�����ת��Ϊ����Ĺ��̡�

## ����
---
�ҵ�`js/`Ŀ¼�µ�����js�ļ���ѹ�����ǣ���ѹ������ļ������`dist/js/`Ŀ¼�¡�

## gulp����
---
����� [��������ʾ������](https://github.com/nimojs/gulp-book/archive/master.zip) �� [���߲鿴����](https://github.com/nimojs/gulp-book/tree/master/demo/chapter2)

**����:** �����ֻ�Ķ�����Ĵ�����ע�ͻ�ͬʱ�Ķ��������

gulp ���������ô��붼д�� `gulpfile.js` �ļ���

### һ���½�һ�� `gulpfile.js` �ļ�
```
chapter2
 - gulpfile.js
```

---
 
### ������`gulpfile.js`�б�д����
```
//��ȡ gulp
var gulp = require('gulp')
```
require()��node��CommonJS)�л�ȡģ����﷨��
��gulp����ֻ��Ҫ��� require() ���Ի�ȡģ�顣

---

### ������ȡ`gulp-uglify`���
```
//��ȡ uglify ģ�飨����ѹ�� JS��
var uglify = requier('gulp-uglify')
```

---

### �ġ�����ѹ������
```
//ѹ�� js �ļ�
//��������ʹ�� gulp script ����������
gulp.task('script',function(){
	//1.���ļ�
	gulp.src('js/*.js')
	//2.ѹ���ļ�
		.pipe(uglify())
	//3.���ѹ������ļ�
		.pipe(gulp.dest('dist/js'))
})
```
��`gulp.task(name,fn)` -�������񣬵�һ�����������������ڶ�����������������
��`gulp.src(path)`-ѡ���ļ�������������ļ�·��
��`gulp.dest(path)`-����ļ�
��`gulp.pipe()`-�ܵ����������ʱ�� pipe ���Ϊ����������ִ�ж���

������[gulp API �ĵ�](http://www.gulpjs.com.cn/docs/api/)

---

#### �塢��ת��`gulpfile.js`����Ŀ¼

������ʹ��`cd`������ת��`gulpfile.js`�ļ�����Ŀ¼��

�����ҵ�`gulpfile.js` �ļ������� `F:\github\gulp-start\chapter2\gulpfile.js`��

��ô����Ҫ������������

```
cd F:\github\gulp-start\chapte2
```
-Mac�û���ʹ�� `cd Documents/gulp-start/chapter2/` ��ת

---

### ����ʹ������������ script ����

�ڿ���̨���� `gulp ������` ���������񣬴˴��������� `gulp script` �س�

ע�⣺����`gulp script`�������н�����ʾ������Ϣ

```
//������������
gulp script

Error:Cannot find module 'gulp=uglify'
	at Function.Module._resolveFilename (module.js:388:15)
	
```