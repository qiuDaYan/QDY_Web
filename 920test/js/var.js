//   var中建议多使用单引号
var str = '';
// 在js中
var setHTML = 'a< href="http://www.baidu.com" target="_blank">百度一次</a>';
/*
  字符串类型,
  substr(a,b);  截取字符串中的字符
  a是位置: 可以通过+-号来控制方向,
  b是长度: 可选,如果未填则表示到结束.

  substring(a,b);
  //  截取字符串,参数a开始的位置,无正负之分;
  //   b和substr一样

  split  //字符串分割为数组
  通过字符将一个字符串分割

 replace(a,b)   //字符串替换
 a是需要被替换的字符(原始)
 b是替换的字符串(新的)

trim()  //把左右两边的空格去掉
trimleft() //把左边的空格去掉
trimRight() //把右边的空格去掉
如果要去掉所有的,可以通过正则表达来写
 */

var strurl = 'http://localhost:3001?id=1&name=tom&age=19&color=yellow&class=105&team=two&skill=ios';

function getinfo(strurl) {
    var urlarr = strurl.split('?');
    var objstr = urlarr[1];
    var objarr = objstr.split('&');
    var obj = {};
    for (var i = 0; i < objarr.length; i++) {
        var strstr = objarr[i];
        var strarr = strstr.split('=');
        obj[strarr[0]] = strarr[1];
    }
    return obj;
}
var abc = getinfo(strurl);
console.log(abc);
/*
number
主要讲得是Math;
1.random() //取0-1之间的随机数;
2.ceil()   // 向上取整
3.floor() // 向下取整
4.round() // 四舍五入
5.abs()   // 绝对值
6.pow(a,b) //  a的b次方
7.sqrt(c)  //对c开平方根
8.toFixed(d)  //保留d位小数,并且四舍五入
9.PI //圆周率
// 字符串+数字=字符串;
字符串转换为数字:
1.字符串*1
2.+字符串
3.Number(字符串)
 */
