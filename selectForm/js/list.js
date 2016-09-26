// 加载页面
var arr1 = JSON.parse(localStorage.HeroData);
var html = template('table', {
    list: arr1
});
if(localStorage.HeroDelete ==""){
  var beiDeleteArray =[];
}else{
  var beiDeleteArray = JSON.parse(localStorage.HeroDelete);
}
document.getElementById('content').innerHTML = html;

// 修改
var chexiaosel = document.querySelector('#chexiao');
initfix(arr1);
function initfix(array) {
    var strHtml = '<option value="0">请选择要修改的项目</option>';
    array.forEach(function(item) {
        // console.log(item);
  var xianshisel =
        strHtml += '<option value="' + item.HeroID + '">' + item.HeroID +"-"+item.HeroName+"-"+item.Postion+ '</option>';
    });
    chexiaosel.innerHTML = strHtml;
}
// 修改操作
function chexiao(){
localStorage.tem = chexiaosel.value-1;
}
// 删除操作
var deleteSel = document.querySelector('#delete');
initDelete(arr1);
function initDelete(array) {
    var strHtml = '<option value="0">请选择要删除的项目</option>';
    array.forEach(function(item) {
        // console.log(item);
  var xianshisel =
        strHtml += '<option value="' + item.HeroID + '">' + item.HeroID +"-"+item.HeroName+"-"+item.Postion+ '</option>';
    });
    deleteSel.innerHTML = strHtml;
}
// 点击删除按钮
function deleteLine(e) {

    var objdelet=arr1[deleteSel.value - 1];
    beiDeleteArray.push(objdelet);
    arr1.splice((deleteSel.value - 1), 1);
    for (var i = 0; i < arr1.length; i++) {
        var obj1 = arr1[i];
        obj1.HeroID = i + 1;
    }
    for (var b = 0; b < beiDeleteArray.length; b++) {
        var obj2 = beiDeleteArray[b];
        obj2.HeroID = b + 1;
    }
    localStorage.HeroDelete = JSON.stringify(beiDeleteArray);
    localStorage.HeroData = JSON.stringify(arr1);
}

// 撤销操作
var fixSel = document.querySelector('#fix');

console.log(beiDeleteArray);

initFIX(beiDeleteArray);
function initFIX(array) {
    var strHtml = '<option value="0">请选择撤销的项目</option>';
    array.forEach(function(item) {
        // console.log(item);
  var xianshisel =
        strHtml += '<option value="' + item.HeroID + '">' + item.HeroID +"-"+item.HeroName+"-"+item.Postion+ '</option>';
    });
    fixSel.innerHTML = strHtml;
}
// 点击撤销按钮
function fixLine(){

  var objdelet=beiDeleteArray[fixSel.value - 1];
  arr1.push(objdelet);
  beiDeleteArray.splice((fixSel.value - 1), 1);

  for (var i = 0; i < beiDeleteArray.length; i++) {
      var obj1 = beiDeleteArray[i];
      obj1.HeroID = i + 1;
  }
  for (var b = 0; b < arr1.length; b++) {
      var obj2 = arr1[b];
      obj2.HeroID = b + 1;
  }
  localStorage.HeroData = JSON.stringify(arr1);
  localStorage.HeroDelete = JSON.stringify(beiDeleteArray);
}




//  查询操作
//  var pinyin = codefans_net_CC2PY("你好吗");
var trbody = document.querySelector('.tbody');
// console.log(trbody.innerText);
var pinyin = codefans_net_CC2PY(trbody.innerText);

var input = document.querySelector('#search');
input.onkeyup = function(e) {
    var str = input.value;
    var result=arr1.filter(function(item) {
      var stritem =item.HeroID+item.HeroName+item.SkillQ+item.SkillW+item.SkillE+item.SkillR+item.Position;
      var stritemPY = codefans_net_CC2PY(stritem);
      console.log(stritem);
        if (stritem.toLowerCase().indexOf(str.toLowerCase()) > -1 || stritemPY.toLowerCase().indexOf(str.toLowerCase()) > -1) {
          return item;
        }
    });
    if(result.length==0){
result=[{"HeroID":"","HeroName":"","HeroImage":"没有相对的","SkillQ":"结果","SkillW":"","SkillE":"","SkillR":"","Postion":""}];

    }
    var html = template('table', {list:result});
    console.log(html);
    document.getElementById('content').innerHTML = html;
};
