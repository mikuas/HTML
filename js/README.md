## JavaScript

>是运行在浏览器的一门编程语言

JavaScritp的组成
* ECMAScritp
* Web APIs
    * DOM(文档对象模型)----Document Object Model

      > DOM树
      >
      > * 将HTML文档以树状结构直观的表现出来,我们称之为文档对象或DOM数
      > * 作用：文档树直观的体现了标签与标签之间的关系

    * BOM(浏览器对象模型)----Browser Object Model

---

### 变量(let)

大小写敏感

遵循小驼峰命名法

#### 获取数组中数据个数

~~~javascript
// 声明
let element

let arr = [1, 2]
arr.lenght // 结果 2
~~~

---

### 常量(const)

~~~ javascript
// 声明

const element
//常量不允许重新赋值,申明的时候必须赋值(初始化)
~~~

## 数据类型

#### 基本数据类型
* number 数字型
>可以是整数, 小数, 正数, 负数 \
>JavaScript中的正数, 负数, 小数 等统一称为 数字类型

* 算数运算符
  * +:求和
  * -:求差
  * *:求积
  * /:求商
  * %:取余

NaN

>NaN 代表一个计算错误 它是一个不正确的或者一个未定义的数学操作所得到的结果
>
>NaN 是粘性的 任何对NaN的操作都会返回NaN
>
>NaN 不等于任何人 包括自己

* string 字符串型
>通过单引号 [''] | 双引号 [""] 反引号 [``] 包裹的都叫字符串
>
>~~~ javascript
>let str = '123456'
>let str1 = "123456"
>let str2 = `123456`
>~~~

* 模板字符串

语法:

~~~ javascript
// ``(反引号)
// 内容拼接变量时 用${}包住变量

let num = 18
console.log(`我今年${num}岁`)
~~~

* boolean 布尔型
* undefined 未定义型
* null 空类型 
* #### 引用数据类型
* object 对象

---

### 检测数据类型

~~~ javascript
// 通过 typeof 关键字检测数据类型
作为运算符
typeof x

函数形式
typeof(x)
~~~

---

## 类型转换

#### 隐式转换
>加号两边只要有一个是字符串, 都会把另一个转成字符串
>
> 除了+以外的算数运算符 比如 - * 
>
>等都会把数据转成数字类型

>+号作为正号解析可以转换成数字型
>
> 任何数据和字符串相加结果都是字符串
#### 显式转换
* 转换为数字型

  ~~~ javascript
  Number(data)

  parseInt(data) // 只保留整数(不会四舍五入)

  parseFloat(data) // 可以保留小数
  ~~~
## 运算符

#### 赋值运算符
* +=
* -+
* *+
* /=
* %=

#### 一元运算符
* '+' | '-' 号
* 自增 
  * 符号: ++ 让变量的值+1
  * 前置自增(++num),后置自增(num++)
  >++在前,先加
  >++在后,后加
* 自减
  * 符号: -- 让变量的值-1

---

### 比较运算符
* \>: 左边的是否大于右边
* <: 左边的是否小于右边
* \>=: 左边的是否大于等于右边
* <=: 左边的是否小于等于右边
* ==: 左右两边值是否相等
* ===: 左右两边的类型和值是否都相等
* !==" 左右两边是否不全等

---

### 逻辑运算符
* 逻辑与(&&)
* 逻辑或(||)
* 逻辑非(!)

逻辑运算符里的短路

| 符号   | 短路条件        |
|------|-------------|
| &&   | 左边为false就短路 |
| \|\| | 左边为true就短路  |

### 运算符优先级

| 优先级 | 运算符   | 顺序            |
|-----|-------|---------------|
| 1   | 小括号   | ()            |
| 2   | 一元运算符 | ++ -- !       |
| 3   | 算数运算符 | 先* / % 后+ -   |
| 4   | 关系运算符 | \> >= < <=    |
| 5   | 相等运算符 | == != === !== |
| 6   | 逻辑运算符 | 先&&后\|\|      |
| 7   | 赋值运算符 | =             |
| 8   | 逗号运算符 | ,             |

## 表达式 | 语句

>表达式: 因为表达式可被求值,所以它可以写在赋值语句的右侧
>
>而语句不一定有值,所以比如alert() for和break等语句就不能被用于赋值

#### 分支语句
* if分支语句 语法:

  ~~~ javascript
  // 除了 0 所有的数字 字符串 都为真

  if (条件) {
      满足条件时执行的代码
  } else if () {
       >
  } else {
      不满足执行的代码
  }
  ~~~

* 三元运算符 语法: 

  ~~~ javascript
  条件 ? 满足条件执行的代码 : 不满足条件执行的代码
  ~~~

* switch语句 语法: 

  ~~~ javascript
  switch (data) {
      case 值1:
          代码
          break
      case 值2：
        代码
        break ...
      default: 代码    // 找到跟小括号里数据全部相等的case值,并执行对应代码
      	[break]		// 若没有全等===的执行default里的代码 [一般用于等值判断]
  }
  ~~~
## 循环语句

* 断点调试
* while循环 语法:
~~~ javascript
while (条件) {
    满足条件执行的代码
}
~~~

#### 退出循环
* break:  退出循环
* continue:    结束本次循环,继续下次循环

### for循环
语法:

~~~javascript
for (变量起始值; 终止条件; 变量变化值) {
    代码段
}

// 无限循环
for (;;) {
    
}
~~~

## 数组(Array)

>数组:  是一种可以按顺序保存数据的数据类型[支持下标|索引]

#### 声明数组

~~~javascript
let array = [数据1, 数据2, ..., 数据n]

let array = new Array(数据1, 数据2, ..., 数据n)
~~~

### 更改数组元素

~~~javascript
array[index] = element
~~~

### 新增元素

~~~ javascript
let arr = []

// 新增 push()
arr.push(element1, element2, ...)  // 将一个或多个元素添加到数组的'末尾',并返回该数组的新'长度'

// 新增 unshift()          
arr.unshift(element1, element2, ...)  // 将一个或多个元素添加到数组的'开头',并返回该数组的新'长度'
~~~

### 删除元素

~~~ javascript
let arr = [1, 2, 3]

// 删除 pop()
arr.pop  // 从数组中删除最后一个元素,并返回该元素的值

// 删除 shift()
arr.shift()  // 从数组中删除第一个元素,并返回该元素的值

// 删除 splice()
arr.splice(startIndex, deleteCount) // startIndex起始下标, deleteCount删除个数,返回数组,数组内容是被删的元素
~~~

### 数组排序

~~~javascript
arrary.sort()
// 升序
array.sort(function (a, b) {
    return a - b
})
//降序
array.sort(function (a, b) {
    return b - a
})
~~~

## 函数

声明: function f_name () { ... }
>两个相同的函数后面的会覆盖前面的函数

##### 命名规范
* 和变量命名基本一致
* 尽量小驼峰命名法
* 前缀应该为动词

##### 常用动词约定

| 动词   | 含义          |
|------|-------------|
| can  | 判断是否可执行某个动作 |
| has  | 判断是否含义某个值   |
| is   | 判断是否为某个值    |
| get  | 获取某个值       |
| set  | 设置某个值       |
| load | 加载某些数据      |

#### 函数的返回子(return)

>return后面的代码不会执行

返回多个值

~~~ javascript
function () {
    return ele1, ele2, ...
}
~~~

### 匿名函数

~~~javascript
name = function (形参) {
    code
}
~~~

#### 立即执行函数

~~~javascript
(function (形参) {
    code
})() -> 相当于实参
~~~

##### 时分秒计算公式

~~~ javascript
hour = parseInt(allSecond / 60 / 60 % 24) // 时
min = parseInt(allSecond / 60 % 60) // 分
second = parseInt(allSecond % 60) // 秒
~~~

## 对象

#### 声明对象

~~~javascript
let objectName = {}

let objectName = new Object()
~~~

#### 查找

~~~javascript
objectName.属性

objectName['属性']
~~~

#### 修改

~~~javascript
objectName.属性 = newValue
~~~

#### 新增

~~~javascript
objectName.属性 = newValue
~~~

#### 删除

~~~javascript
delete objectName.属性
~~~

#### 遍历对象

~~~javascript
for (let key in object) {
    code
}
~~~

### 内置对象-Math

| 方法     | 功能                      |
|--------|-------------------------|
| random | 生成0-1之间的随机数(包含开始,不包含结束) |
| ceil   | 向上取整                    |
| floor  | 向下取整                    |
| max    | 找最大数                    |
| min    | 找最小数                    |
| pow    | 幂运算                     |
| abs    | 绝对值                     |

#### 获取随机数

~~~javascript
// 获取 N - M 之间的整数
function getRandom(N, M) {
    return Math.floor(Math.randmo() * (M - N + 1)) + N
}
~~~



#### 基本数据类型和引用数据类型

> 简单类型又叫基本数据类型或者`值类型`,复杂类型有叫做`引用类型`
>
> * 值类型:	  简单数据类型/基本数据类型,在存储时变量中存储的是值本身,因此叫做值类型
> * 引用类型:  复杂数据类型,在存储变量中存储的仅是地址(引用),因此叫做引用数据类型

>堆栈控件分配区别
>
>1. 栈(操作系统)：由操作系统自动分配释放存放函数的参数值,局部变量等,其操作方式类似于数据结构中的栈
>
>   `简单数据类型存放到栈里面`
>
>   2. 堆(操作系统)：存储复杂类型(对象),一般由程序员分配释放,若程序员不释放,由垃圾回收机制回收
>
>      `引用数据类型存放到堆里面`

~~~javascript
let obj1 = {
    age: 18
}

let obj2 = obj1 // 赋值的是地址, 指向的还是统一对象

obj2.age = 24

console.log(obj1.age) // 输出24
~~~

## DOM

### 根据CSS选择器来获取DOM元素

1. 选择匹配的第一个元素

   ~~~javascript
   document.querySelector('CSS选择器')
   ~~~



2. 选择匹配的多个元素

   ~~~javascript
   document.querySelectorAll('CSS选择器')

   //返回值 CSS 选择器匹配的NodeList 对象集合
   ~~~

> 得到的是一个`伪数组`
>
> * 有长度有索引号的数组
> * 但是没有 pop() push() 等数组方法



### 操纵元素内容

1. 元素 innerText 属性

   > 将文本内容添加/更新到任意标签位置
   >
   > 显示纯文本,不解析标签

2. 元素 innerHTML 属性

   > 将文本内容添加/更新到任意标签位置
   >
   > 会解析标签,多标签建议使用模板字符串

### 操纵元素常用属性

~~~javascript
对象.属性 = 值
~~~

#### 操纵元素样式属性

~~~javascript
// 通过style属性操作CSS
object.style.样式属性 = 值

//

~~~

### 操作类名(className)操作CSS

~~~javascript
element.className = 'active'
~~~

### 通过classList操作类控制CSS

~~~javascript
// 追加一个类
element.classList.add('类名')
// 删除一个类
element.classList.remove('类名')
//切换一个类
element.classList.toggle('类名') // 有就删掉 没有就加上
~~~

### 操作表单元素 属性

~~~javascript
// 获取
表单.value = 'userName'
//设置
表单.type = 'setType'
~~~

> 表单属性中添加就有效果,移除就没有效果,一律使用布尔值表示,如果为true代表添加了该属性,如果是false代表移除了该属性
>
> 比如：disabled, checked, selected

### 自定义属性

> 在html5中推出来了专门的data-自定义属性
>
> 在标签上一律以data-开头
>
> 在DOM树上一律以dataset对象方式获取 			返回一个set

### 定时器-间歇函数

#### 开启定时器

~~~ javascript
setInterval(函数,间隔时间)
// 每隔一段时间调用这个函数
// 间隔时间单位是毫秒 1s = 1000ms
~~~

#### 关闭定时器

~~~javascript
let 变量名 = setInterval(函数, 间隔时间)
clearInterval(变量名)
~~~

### 事件监听

~~~javascript
// 语法
元素对象.addEventListener('事件类型', function)

/*
事件监听三要素
> 事件源： 哪个dom元素被事件触发了，要获取dom元素
> 事件类型： 用什么方式触发，比如鼠标单击click，鼠标经过mouseover等
> 事件调用的函数： 要做什么事
*/
~~~

### 事件监听版本

* DOM LO
~~~javascript
事件源.on事件(click...) = function () {
    
}
~~~

* DOM L2
~~~javascript
事件源.addEventListener(事件(click), function () {
    
})
~~~

> 区别: on方式会被覆盖, addEventListener方式可绑定多次,拥有事件更多特性

### 事件类型

| 鼠标事件                                        | 焦点事件       | 键盘事件           | 文本事件         |
|---------------------------------------------|------------|----------------|--------------|
| click 鼠标点击                                  | focus 获得焦点 | keydown 键盘按下触发 | input 用户输入事件 |
| mouseenter(无冒泡) 鼠标经过 \| mouseover(有冒泡) 鼠标经过 | blur 失去焦点  | keyup 键盘抬起触发   |              |
| mouseleave(无冒泡) 鼠标离开 \| mouseout(有冒泡) 鼠标离开  |            |                |

### 事件对象
获取事件对象
* 事件对象是什么
  >也是个对象，这个对象里有事件触发时的相关信息
  > 列如：鼠标点击事件中，事件对象就存了鼠标点在哪个位置等信息
* 使用场景
  >可以判断用户按下哪个键，比如按下回车键可以发布新闻
  > 可以判断鼠标点击了哪个元素，从而做相应的操作

#### 获取事件对象
* 在事件绑定的回调函数的第一个参数就是事件对象
* 一般命名为event, ev, e
~~~javascript
element.addEventListener('click', function (e){
    // 事件对象 e
})
~~~

### 常用属性
* type    获取当前的事件类型
* clientX/clientY    获取光标相对于浏览器可见窗口左上角的位置
* offsetX/offsetY    获取光标相对于当前DOM元素左上角的位置
* key    用户按下的键盘键的值

~~~javascript
trim // 去除字符左右两边的空格
~~~

### 环境对象
目标: 能够分析判断函数运行在不同环境中this所指代的对象

环境对象:   指的是函数内部的`变量 this`, 它代表着当前函数运行时所处的环境

作用: 弄清楚this的指向,可以让我们的代码更简洁
* 函数的调用方式不同, this 指代的对象也不同
* [随调用, this就是谁] 是判断 this 指向的粗略规则
* 直接调用函数, 其实相当于是 window.函数, 所以 this 指代 window

~~~javascript
// 每个函数里面都有this 环境对象 普通函数里面的this指向的都是window
function fc() {
    console.log(this)
}

// this 指向的是函数调用者
<button>点击</button>

addEvent(miku('button'), 'click', function () {
    console.log(this)
    // 输出 <button>点击</button>
    
    miku('button').style.color = 'red'
    // 可写为
    this.style.color = 'red'
})
~~~

### 回调函数
~~~javascript
// 当一个函数当做参数来传递给另外一个函数的时候,这个函数就是`回调函数`
function fc() {
    console.log('我是回调函数')
}
// fc传递给了setInterval, fn就是回调函数
setInterval(fc, 1000)
~~~

### 事件流
* 事件流指的是事件完整执行过程中的流动路径

~~~javascript
// click div

捕    1.     Document        7.     冒
获    2.     Element html    6.     泡
阶    3.     Element body    5.     阶
段           Element div     4.     段

// 假设页面里面有个 div 当触发事件时 会经历两个阶段 分别是捕获阶段 冒泡阶段
// 捕获阶段是 从父到子      冒泡阶段(为主)是 从子到父
~~~

### 事件捕获
~~~javascript
DOM.addEventListener(事件类型, function, 是否使用捕获机制)
~~~

### 冒泡事件
~~~javascript
// 当一个元素的事件被触发时,同样的事件将会在该元素的所有祖先元素中依次触发 这一过程被称为事件冒泡
// 当一个元素触发事件后 会依次想上调用所有父级元素的 `同名事件`
~~~

### 阻止冒泡
~~~javascript
事件对象.stopPropagation()
// 此方法可以阻断事件流动传播, 不光在冒泡阶段有效, 捕获阶段也有效

/*
阻止默认行为
e.preventDefault() 
*/

<form action='http://www.baidu.com'>
    <input type='submit' value='免费注册'> 
</form>

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    // 阻止默认行为 提交
    e.preventDefault()
})

~~~

### 解绑事件
~~~javascript
/*
on 事件方式 
*/
// 绑定事件
obj.onclick = function () {
    alert()
}
// 解绑事件
obj.onclick = null

/*
addEventListener方式 必须使用:
removeEventListener(事件类型, function, [捕获, 冒泡]
*/

function fc() {
    alert(1)
}

// 绑定事件
obj.addEventListener('click', fc)

// 解绑事件
obj.removeEventListener('click', fc)

/*      匿名函数无法解绑        */
~~~

### 事件委托
~~~javascript
// 优点:  减少注册次数，可以提高程序性能
// 原理:  事件委托其实是利用事件冒泡的特点
/*
给`父元素注册事件,当我们触发子元素的时候,会冒泡到父元素身上,从而触发父元素的事件`
*/
ul.addEventListener('click', function () {}) // 执行父级点击事件
//实现:   事件对象.target.tagName 可以获得真正触发事件的元素
~~~

### 页面加载事件
~~~javascript
/*
load
*/
// 等待页面所有元素加载完毕 就回去执行回调函数
window.addEventListener('load', function () {
    Code
})

img.addEventListener('load', function () {
    // 等待图片加载完毕执行
})

/*  不光可以监听整个页面资源加载完毕,也可以针对某个资源绑定load事件  */

// 当初始的HTML文档被完全加载和解析完成之后, DOMContentLoaded 事件被触发 而无需等待样式表,图像等完全加载
/*
DOMContentLoaded 
*/
// 监听页面DOM元素加载完毕 给document添加
document.addEventListener('DOMContentLoaded', function () {
   Code 
})
~~~

### 页面滚动事件
~~~javascript
/*
scroll 
*/
// 监听整个页面滚动
window.addEventListener('scroll', function () {
    Code
})
~~~






