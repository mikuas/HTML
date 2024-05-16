### HTML定义
HTML 超文本标记语言(HyperText Markup Language)
* 超文本是什么    [链接]
* 标记是什么      [标记也叫标签,带尖括号的文本]

#### 标签成对出现,中间包裹内容

### 标题标签(独占一行)
* h1 ~ h6
    * h1标签在一个网页中一般只用一次,用来放新闻标题或网页的logo
    * h2 ~ h6 没有限制

---

### [文本格式化标签](html/text_format_label.html)

| 标签名    | - | 效果  |
|--------|---|-----|
| strong | b | 加粗  |
| em     | i | 倾斜  |
| ins    | u | 下划线 |
| del    | s | 删除线 |

---

### [超链接](html/superLink.html)
> target="_blank" 新窗口跳转页面

---

### [audio音频标签](html/audio_label.html)

常见属性

| 属性       | 作用       | 特殊说明                  |
|----------|----------|-----------------------|
| src      | 音频URL    | 支持格式:MP3, Ogg, Wav    |
| controls | 显示音频控制面板 |
| loop     | 循环播放     |
| autoplay | 自动播放     | 为了用户体验 浏览器一般会禁用自动播放功能 |

---

### [video视频标签](html/video_label.html)


| 属性       | 作用       | 特殊说明                  |
|----------|----------|-----------------------|
| src      | 视频URL    | 支持格式:MP4, WebM, Ogg   |
| controls | 显示视频控制面板 |
| loop     | 循环播放     |
| muted    | 静音播放     |
| autoplay | 自动播放     | 为了用户体验 浏览器支持在静音状态自动播放 |

---

### [列表](html/list.html)
>列表的分布: 无序列表, 有序列表, 定义列表
#### 无序列表(ul)
* 作用: 布局排列整齐的不需要规定顺序的区域
* 标签 ul 嵌套 li, ul是无无序列表 li是列表条目
#### 有序列表(ol)
* 作用: 布局排列整齐的需要规定顺序的区域
* 标签 ol 嵌套 li, ol是无无序列表 li是列表条目
#### 定义列表(dl)
* 标签 dl 嵌套 dt和dd dt是定义列表的标题 dd是定义列表的描述/详情
>去除列表的项目符号: list-style=none

---

### [表格](html/form.html)
* 标签: table 嵌套 tr, tr嵌套td/th

| 标签名   | 说明    |
|-------|-------|
| table | 表格    |
| tr    | 行     |
| th    | 表头单元格 |
| td    | 内容单元格 |

### 表格结构标签

| 标签名   | 含义   | 特殊说明   |
|-------|------|--------|
| thead | 表格头部 | 表格头部内容 |
| tbody | 表格主体 | 主要内容区域 |
| tfoot | 表格底部 | 汇总信息区域 |

### 合并单元格
>作用: 将多个单元格合并成一个单元格 以合并同类信息
  >* 跨行合并 保留最上单元格 添加属性 rowspan
  >* 跨列合并 保留最左单元格 添加属性 colspan

---

### [表单](html/form_表单.html)

> input标签(type属性值不同,则功能不同)

>input标签占位文本(提示信息) placeholder=""

| type属性值  | 说明           |
|----------|--------------|
| text     | 文本框 用于输入单行文本 |
| password | 密码框          |
| radio    | 单选框          |
| checkbox | 多选框          |
| file     | 上传文件         |

#### 单选框(radio)
常用属性

| 属性名     | 作用   | 特殊说明                |
|---------|------|---------------------|
| name    | 控件名称 | 控件分组,同组只能选中一个(单选功能) |
| checked | 默认选中 | 属性名和属性值相同,简写为一个单词   |

#### 上传文件-file
> multiple 属性实现文件多选

#### 多选框
>默认选中: checked

---

#### [下拉菜单(select 嵌套 option)](html/下拉菜单.html)
>select是下拉菜单整体 option 每一项

---

#### [文本域](html/文本域.html)
>标签 textarea

---

#### [label标签](html/label标签.html)
> 增大点击范围--1
  1. label标签只包裹内容,不包裹表单控件
  2. 设置label标签的for属性值和表单控件的id属性值相同
> 增大点击范围--2
  1. 使用label标签包裹文字和表单空间,不需要属性
###### 支持label标签增大点击范围的表单控件: 文本框,密码框,上传文件,单选框,多选框,下拉菜单,文本域等...

---

#### [按钮(button)](html/button.html)
type属性值

| type属性值 | 说明                 |
|---------|--------------------|
| submit  | 提交按钮(默认功能)         |
| reset   | 重置按钮               |
| button  | 普通按钮,默认没有功能,一般配合js |

---

##### [无语义的布局标签](html/布局标签.html)
>作用: 布局网页(div(大盒子):独占一行 | span(小盒子):不换行)

---

##### 字符实体(在网页中显示预留字符)

| 显示结果 | 描述  | 实体名称      |
|------|-----|-----------|
|      | 空格  | '& nbsp;' |
| '<'  | 小于号 | '& lt;'   |
| '>'  | 大于号 | '& gt;'   |

---

#### 标签选择器
>作用: 查找标签 设置样式

基础选择器
* 标签选择器
>使用标签名作为选择器 -> 选中同名标签设置相同的样式
* 类选择器
>查找标签 差异化设置标签的显示效果
>  * 定义选择器 -> .类名
>  * 使用选择器 -> 标签添加 class='类名'
* id选择器
>查找标签 差异化设置标签的显示效果 一般配合JS
>  * 定义id选择器 -> #id名
>  * 使用id选择器 -> 标签添加 class='id名'
###### 同一个id选择器在一个页面只能使用一次
* 通配符选择器
>查找页面所有标签 设置相同样式
> 通配符选择器 * 不需要调用

---

#### 文字控制属性

| 描述     | 属性              |
|--------|-----------------|
| 字体大小   | font-size       |
| 字体粗细   | font-weight     |
| 字体倾斜   | font-style      |
| 行高     | line-height     |
| 字体族    | font-family     |
| 字体复合属性 | font            |
| 文本缩进   | text-indent     |
| 文本对齐   | text-align      |
| 修饰线    | text-decoration |
| 颜色     | color           |

#### font复合属性
>复合属性: 属性的简写方式 一个属性对应多个值的写法 各个属性值之间用空格隔开

> font: 是否倾斜 是否加粗 字号/行高 字体 (必须按顺序书写)[字号和字体必须书写 否则不生效]

---

文本修饰线

| 属性值          | 效果  |
|--------------|-----|
| none         | 无   |
| underline    | 下划线 |
| line-through | 删除线 |
| overline     | 上划线 |

---

colo文字颜色

| 表示方式    | 属性值           | 说明                    |
|---------|---------------|-----------------------|
| rgb表示法  | rgb(r,g,b)    | r,g,b表示红绿蓝三原色 取值0-255 |
| rgba表示法 | rgba(r,g,b,a) | a表示透明度 取值0-1          |
| 十六进制表示法 | #RRGGBB       | #000000...            |
| 颜色关键字   | 颜色英文单词        | red,greed             |

---

#### 复合选择器
>定义: 有两个或多个基础选择器 通过不同的方式组合而成

> 作用: 更准确 更高效的选择目标元素(标签)

后代选择器:  选中某个元素的后代元素(所有后代)
>写法:  父选择器 子选择器 {css属性}, 父子选择器之间用空格隔开

子代选择器[>]:  选中某个元素的子代元素(最近的子级)
>写法:  父选择器 > 子选择器 {css属性} 父子之间用>隔开

并集选择器[,]:  选中多组标签设置相同的样式
>写法:  选择器1,选择器,选择器n {css属性} 选择器之间用,隔开

交集选择器:  选中同时满足多个条件的元素
>写法:  选择器1选择器2 {css属性} 选择器之间连写 没有任何符号
#### 注意: 如果交集选择器中有标签选择器,标签选择器必须写在最前面

伪类选择器[:]:  伪类表示元素状态,选中元素的某个状态设置样式
>写法:  选择器:hover {css属性}

伪类-超链接

| 选择器      | 作用      |
|----------|---------|
| :link    | 访问前     |
| :visited | 访问后     |
| :hover   | 鼠标悬停    |
| :active  | 点击时(激活) |
>如果给超链接设置以上四个状态,需要按LVHA的顺序书写

---

## CSS特性
* 继承性:  子级默认继承父级的文字控制属性
>如果标签自己有样式则生效自己的样式,不继承
* 层叠性:  
>相同的属性会覆盖 后面的css属性覆盖前面的css属性 \
不同的属性会叠加 不同的css属性的生i下
* 优先级:  
>权重 当一个标签使用了多种选择器时,基于不同种类的选择器匹配规则 \
>规则:  选择器优先级高的样式生效 \
> 通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important
(选中标签的范围越大,优先级越低) 

优先级-叠加计算规则
>叠加计算:  如果是复合选择器,则需要权重叠加计算

---

### 背景属性

| 描述      | 属性                    |
|---------|-----------------------|
| 背景色     | background-color      |
| 背景图     | background-image      |
| 背景平铺方式  | background-repeat     |
| 背景图位置   | background-position   |
| 背景图缩放   | background-size       |
| 背景图固定   | background-attachment |
| 背景图复合属性 | background            |

背景图平铺方式(background-repeat)

| 属性值       | 效果       |
|-----------|----------|
| no-repeat | 不平铺      |
| repeat    | 平铺(默认效果) |
| repeat-x  | 水平方向平铺   |
| repeat-y  | 垂直方向平铺   |

背景图位置(background-position)

| 关键字    | 位置 |
|--------|----|
| left   | 左侧 |
| right  | 右侧 |
| center | 居中 |
| top    | 顶部 |
| bottom | 底部 |

背景图缩放(background-size)
>关键字: cover 等比例缩放背景图片以完全覆盖背景区,可能背景图片部分看不见 \
contain 等比例缩放背景图片以完全装入背景区,可能背景区部分空白


背景图固定(background-attachment)
>属性值: fixed

复合属性(background)
>属性值: 背景色 背景图 背景平铺方式 背景图位置/背景图缩放 背景图固定 (空格隔开各个属性值,不区分顺序)

---

转换显示模式(display)

| 属性值          | 效果  |
|--------------|-----|
| block        | 块级  |
| inline-block | 行内块 |
| inline       | 行内  |

---

## 结构伪类选择器

| 选择器            | 说明                  |
|----------------|---------------------|
| E:first-child  | 查找第一个E元素            |
| E:last-child   | 查找最后一个E元素           |
| E:nth-child(N) | 查找第N个E元素(第一个元素N值为1) |

nth-child(公式)
>作用:  根据元素的结构关系查找多个元素

| 功能         | 公式         |
|------------|------------|
| 偶数标签       | 2n         |
| 奇数标签       | 2n+1, 2n-1 |
| 找到5的倍数标签   | 5n         |
| 找到第五个以后的标签 | n+5        |
| 找到第五个以前的标签 | -n+5       |

---

## 伪元素选择器
>作用:  创建虚拟元素(伪元素),用来摆放装饰性的内容

| 选择器       | 说明               |
|-----------|------------------|
| E::before | 在E元素里面最前面添加一个伪元素 |
| E::after  | 在E元素里面最后添加一个伪元素  |
>必须设置content:""属性, 用来设置伪元素的内容 如果没有内容,则引号留空即可 \
伪元素默认是行内显示模式 \
权重和标签选择器相同

---

## 盒子模型
* 内容区域-width&height
* 内边距-padding(出现在内容于盒子边缘之间)[默认会撑大盒子]
* 边框线-border
* 外边距-margin(出现在盒子外边)

### 盒子模型-边框线(border)
>属性值: 边框线粗细 线条样式 颜色(不区分顺序)

单方向边框线
>border-方位名词 \
属性值: 边框线粗细 线条样式 颜色(不区分顺序)

| 属性值    | 线条样式 |
|--------|------|
| solid  | 实线   |
| dashed | 虚线   |
| dotted | 点线   |

### 盒子模型-内边距(padding)
>作用:  设置内容于盒子边缘之间的距离 \
属性名:  padding / padding-方位名词
* 多值写法

| 取值个数 | 示例                           | 含义                      |
|------|------------------------------|-------------------------|
| 一个值  | padding: 10px                | 四个方向内边距均为10             |
| 四个值  | padding: 10px 20px 40px 80px | 上10px 右20px 下40px 左80px |
| 三个值  | padding: 10px 40px 80px      | 上10px 左右40px 下80px      |
| 两个值  | padding: 10px 80px           | 上下10px 左右80px           |

### 盒子模型-尺寸计算
>默认情况:  盒子尺寸 = 内容尺寸 + border尺寸 + 内边距尺 \
给盒子加border / padding 会撑大盒子 \

解决
* 手动做减法, 减掉border/padding的尺寸
* 内减模式: box-sizing:border-box

### 盒子模型-外边距(margin)
>作用: 拉开两个盒子之间的距离

### 清除默认样式
> *{} | 选择器{}

### 盒子模型-元素溢出(overflow)
>作用: 控制溢出元素的内容的显示方式

属性值

| 属性值    | 效果                    |
|--------|-----------------------|
| hidden | 溢出隐藏                  |
| scroll | 溢出滚动(无论是否溢出,都显示滚动条位置) |
| auto   | 溢出滚动(溢出才显示滚动条位置)      |

盒子模型-阴影(box-shadow)
>属性值: x轴偏移量 y轴偏移量 模糊半径 扩散半径 颜色 内外(inset)阴影

### 浮动(float)

属性值:
>left:  左对齐 \
right:  右对齐

特点:
1. 浮动后的盒子顶端对齐
2. 浮动后的盒子具备行内块特点
3. 父级宽度不够,浮动的子级会换行
4. 浮动后的盒子脱标

### 清除浮动
1. 方法1:
>clear: both
2. 方法2:
>单伪元素法
3. 方法3:
>双伪元素法
4. 方法4:
>父元素加 overflow:hidden

---

Flex-组成
* 设置方式: 给'父'元素设置 'display:flex' 子元素可以'自动挤压或拉伸'
* 组成部分:
  * 弹性容器
  * 弹性盒子
  * 主轴: 默认在水平方向
  * 侧轴/交叉轴: 默认在垂直方向

### Flex 布局

| 描述           | 属性               |
|--------------|------------------|
| 创建flex容器     | display: flex    | 
| 主轴对齐方式       | justify-content  |
| 侧轴对齐方式       | align-items      |
| 某个弹性盒子侧轴对齐方式 | align-self       |
| 修改主轴方向       | flex-direction   |
| 弹性伸缩比        | flex             |
| 弹性盒子换行       | flex-wrap        |
| 行对齐方式        | align-content    |

### 主轴对齐方式(justify-content)

| 属性值             | 效果                        |
|-----------------|---------------------------|
| flex-start      | 默认值,弹性盒子从起点开始依次排列         |
| flex-end        | 弹性盒子从终点开始依次排列             |
| 'center'        | 弹性盒子沿主轴居中排列               |
| 'space-between' | 弹性盒子沿主轴均匀排列,空白间距分布在弹性盒子之间 |
| 'space-around'  | 弹性盒子沿主轴均匀排列,空白间距分布在弹性盒子两侧 |
| 'space-evenly'  | 弹性盒子沿主轴均匀排列,弹性盒子与容器之间距离相等 |

### 侧轴对齐方式(align-items)
>align-items 当前弹性容器内所有弹性盒子的侧轴对齐方式(给弹性容器设置)
>align-self 单独控制某个弹性盒子的侧轴对齐方式(给弹性盒子设置)

| 属性值        | 效果                                     |
|------------|----------------------------------------|
| stretch    | 弹性盒子沿着侧轴线被拉伸至铺满容器(弹性盒子没有设置侧轴方向尺寸则默认拉伸) |
| center     | 弹性盒子沿侧轴居中排列                            |
| flex-start | 弹性盒子从起点开始依次排列                          |
| flex-end   | 弹性盒子从终点开始依次排列                          |

### 修改主轴方向(flex-direction)
>主轴默认在水平方向,默认侧轴在垂直方向

| 属性值             | 效果            |
|-----------------|---------------|
| row             | 水平方向,从左向右(默认) |
| 'column'        | 垂直方向,从上向下     |
| row-reverse     | 水平方向,从右向左     |
| column-sreverse | 垂直方向,从下向上     |

### 弹性伸缩比(flex)
>作用:  控制弹性盒子的主轴方向的尺寸 \
属性值: 整数数字 表示占用父级剩余尺寸的份数

### 弹性盒子换行(flex-wrap)
>弹性盒子可以自动挤压或拉伸,默认情况下,所有弹性盒子都在一行显示 

属性值
* warp: 换行
* nowarp: 不换行(默认)

### 行对齐方式(align-content)

| 属性值             | 效果                        |
|-----------------|---------------------------|
| flex-start      | 默认值,弹性盒子从起点开始依次排列         |
| flex-end        | 弹性盒子从终点开始依次排列             |
| 'center'        | 弹性盒子沿主轴居中排列               |
| 'space-between' | 弹性盒子沿主轴均匀排列,空白间距分布在弹性盒子之间 |
| 'space-around'  | 弹性盒子沿主轴均匀排列,空白间距分布在弹性盒子两侧 |
| 'space-evenly'  | 弹性盒子沿主轴均匀排列,弹性盒子与容器之间距离相等 |

---

### 定位
>作用:  灵活的改变盒子在网页中的位置
#### 实现
1. 定位模式: position
2. 边偏移: 设置盒子的位置






































































  