## 条件判断
```
var age = 3;
if (age >= 18) {
    alert('adult');
} else if (age >= 6) {
    alert('teenager');
} else {
    alert('kid');
}
```

JavaScript把`null`、`undefined`、`0`、`NaN`和空字符串`''`视为`false`，其他值一概视为`true`

## for循环
```
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}
```
`for`循环的3个条件都是可以省略的，如果没有退出循环的判断条件，就必须使用`break`语句退出循环，否则就是死循环

### for ... in
```
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {  // 这里还需要声明变量key，不然就变成全局变量了
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}
```

请注意，`for ... in`对`Array`的循环得到的是`String`而不是`Number`:
```
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2', 得到的是String
    console.log(a[i]); // 'A', 'B', 'C'
}
```

## while
```
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500
```

## do ... while
它和while循环的唯一区别在于，不是在每次循环开始的时候判断条件，而是在每次循环完成的时候判断条件：
```
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100
```
用`do { ... } while()`循环要小心，**循环体会至少执行1次**，而`for`和`while`循环则可能一次都不执行。