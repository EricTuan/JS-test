## 定义函数
```
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

由于JavaScript的**函数也是一个对象**，上述定义的abs()函数实际上是一个函数对象，而函数名abs可以视为指向该函数的变量。

## 定义函数2
```
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
```
**需要在函数体末尾加一个**;，表示赋值语句结束。

## 调用函数
JavaScript允许传入任意个参数而不影响调用
```
abs(10, 'blablabla'); // 返回10
abs(-9, 'haha', 'hehe', null); // 返回9
abs(); // 返回NaN, 此时abs(x)函数的参数x将收到undefined，计算结果为NaN
```

### 对参数进行检查
```
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```
## arguments
JavaScript还有一个免费赠送的关键字`arguments`，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。`arguments`类似`Array`但它不是一个`Array`：
```
function foo(x) {
    console.log('x = ' + x); // 10, 传入任意参数，只使用一个参数
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
```

利用`arguments`，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值，故上例看作`abs()`只使用一个参数。
```
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9
```

### `arguments`最常用于判断传入参数的个数
```
// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}
```
通过`arguments`判断,把中间的参数`b`变为“可选”参数，然后重新调整参数并赋值。

## rest
```
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// 结果:
// a = 1
// b = undefined
// Array []
```
`rest`参数只能写在最后，前面用`...`标识，从运行结果可知，传入的参数先绑定`a`、`b`，多余的参数以数组形式交给变量`rest`，所以，不再需要`arguments`我们就获取了全部参数。

如果传入的参数连正常定义的参数都没填满，也不要紧，`rest`参数会接收一个**空数组**(注意不是`undefined`)

用`rest`参数编写一个`sum()`函数，接收任意个参数并返回它们的和：
```
function sum(...rest) {
    var x = 0;
    for(var i = 0; i<rest.length;i++){
        x += rest[i];
    }
    return x;
}
```



