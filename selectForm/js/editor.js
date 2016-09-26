
if(localStorage.HeroData ==""){
  var arr =[];
}else{
  var arr = JSON.parse(localStorage.HeroData);
}
var obj = {};
var arrid = arr.length;
function dosubmit(e) {

    var heroName = document.querySelector('input[name="HeroName"]').value;
    var HeroImage = document.querySelector('input[name="HeroImage"]').value.trim();
    var SkillQ = document.querySelector('input[name="SkillQ"]').value.trim();
    var SkillW = document.querySelector('input[name="SkillW"]').value.trim();
    var SkillE = document.querySelector('input[name="SkillE"]').value.trim();
    var SkillR = document.querySelector('input[name="SkillR"]').value.trim();
    var PostionA = document.querySelector('#Position');

    if (heroName == "") {
        alert('HeroName为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
    if (HeroImage == "") {
        alert('HeroImage为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
    if (SkillQ == "") {
        alert('SkillQ为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
    if (SkillW == "") {
        alert('SkillW为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
    if (SkillE == "") {
        alert('SkillE为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
    if (SkillR == "") {
        alert('SkillR为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
     if (PostionA.value == 0){
       alert('请选择一个postion为空');
       // 禁用表单的提交行为
       event.preventDefault();
       return;
     }
    arrid++;
    obj.HeroID = arrid;
    obj.HeroName = heroName;
    obj.HeroImage = HeroImage;
    obj.SkillQ = SkillQ;
    obj.SkillW = SkillW;
    obj.SkillE = SkillE;
    obj.SkillR = SkillR;
    obj.Postion = PostionA.value;
    console.log(obj);
    arr.push(obj);
    localStorage.HeroData = JSON.stringify(arr);
}
