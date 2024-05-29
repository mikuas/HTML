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















