'use strict';
// 如果浏览器支持strict模式，
// 下面的代码将报ReferenceError错误:

// abc = 'Hello, world';
// console.log(abc); 

var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}

window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function () {}

alert('无法用alert()显示了!');  // JS可以接收多个参数

// 恢复alert:
window.alert = old_alert;
alert('又可以用alert()了!');