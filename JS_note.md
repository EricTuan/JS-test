* 不要使用`==`比较，**始终坚持使用`===`比较**。
* 通过var申明变量
* 要判断一个属性是否是`xiaoming`自身拥有的，而不是继承得到的，可以用`hasOwnProperty()`方法
* 不建议直接修改Array的大小，访问索引时要确保索引不会越界
* `for ... in`对`Array`的循环得到的是`String`而不是`Number`
* 用`do { ... } while()`循环要小心，**循环体会至少执行1次**，而`for`和`while`循环则可能一次都不执行
* for (var key in o) {  // 这里还需要声明变量key，不然就变成全局变量
* 减少命名冲突的一个方法是**把自己的所有变量和函数全部绑定到一个全局变量中**
* **用let替代var可以申明一个块级作用域的变量**
* **从一个对象中取出若干属性，也可以使用解构赋值**
* 有些时候，如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误：**用小括号将整个表达式括起来**