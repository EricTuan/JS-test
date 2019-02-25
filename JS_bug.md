[[_TOC_]]

## 奇葩bug
JavaScript引擎有一个在行末自动添加分号的机制，这可能让你栽到return语句的一个大坑

## undefined
```
s[13]; // 超出范围的索引不会报错，但一律返回undefined
```
* 访问一个不存在的属性

* 直接给Array的length赋一个新的值,如果长度变大，增加的位置值为undefined
* 通过索引赋值时，索引超过了范围，新增位置值为undefined
* 空数组继续pop或者shift

* 函数如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined
* 未输入参数时，函数参数x将收到undefined，计算结果为NaN

* 使用解构赋值对对象属性进行赋值时，如果对应的属性不存在，变量将被赋值为undefined，这和引用一个不存在的属性获得undefined是一致的

## false
JavaScript把`null`、`undefined`、`0`、`NaN`和空字符串`''`视为`false`，其他值一概视为`true`

## `===`比较
`==`比较，它会自动转换数据类型再比较，**始终坚持使用`===`比较**

## NaN
`NaN`这个特殊的Number与所有其他值都不相等，包括它自己
唯一能判断`NaN`的方法是通过`isNaN()`函数

# 浮点数的相等比较
要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值

# strict模式
**如果一个变量没有通过var申明就被使用**，那么该变量就自动被申明为全局变量

for 循环的控制变量i也要声明为var

启用strict模式的方法是在JavaScript代码的第一行写上：
```
'use strict';
```

## 操作字符串
**字符串是不可变的**，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果

调用字符串方法本身不会改变原有字符串的内容，而是**返回一个新字符串**

## 对象
JavaScript**对象的所有属性都是字符串**

## 数组
**直接给Array的length赋一个新的值会导致Array大小的变化**
**通过索引赋值时，索引超过了范围，同样会引起Array大小的变化**

大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界。

## slice
**注意到slice()的起止参数包括开始索引，不包括结束索引**。

**如果不给slice()传递任何参数，它就会从头到尾截取所有元素**。利用这一点，我们可以很容易地复制一个Array

## sort
sort()可以对当前Array进行排序，**它会直接修改当前Array的元素位置**

## concat
concat()方法把当前的Array和另一个Array连接起来，并**返回一个新的Array**

可以接收任意个元素和Array，**自动把Array拆开，然后全部添加到新的Array里**

## 定义函数
```
var abs = function (x){
    // ??
};
```
**需要在函数体末尾加一个**;，表示赋值语句结束

## rest
如果传入的参数连正常定义的参数都没填满，也不要紧，`rest`参数会接收一个**空数组**(注意不是`undefined`)

## JavaScript的函数内部如果调用了this，那么这个this到底指向谁？

视情况而定！

```
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25, 正常结果
getAge(); // NaN
```

我们用一个`that`变量首先捕获`this`：

```
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25
```

用`var that = this`;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。

或者**用`apply`修复`getAge()`调用**