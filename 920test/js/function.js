/*
在js中定义一个方法使用关键字 function
 */
function first(name) {
    var str = "这是一个function中内部的str 参数为:" + name;
    return str;
}
// var str1 = first('tc');
// console.log(str1);
var txtInput = document.querySelector('#txtName');
// onchange是监听输入框是否改变
// 在js中如果不写名字的函数叫做匿名函数
// onkeyup是指可以随着输出显示
var divs = document.querySelectorAll('.col');
// txtInput.onkeyup = function(e) {
//     console.log(txtInput.value);
//     for (var i = 0; i < divs.length; i++) {
//         var div = divs[i];
//         div.innerHTML = txtInput.value;
//     }
// };
//定义一个function作为参数
//e是一个形参
function keyUp(e) {
    for (var i = 0; i < divs.length; i++)
    {
        var div = divs[i];
        div.innerHTML = txtInput.value;
    }
}
  txtInput.onkeyup = keyUp;
