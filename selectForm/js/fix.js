var arr = JSON.parse(localStorage.HeroData);
var obj = arr[localStorage.tem];

var HeroID = document.querySelector('input[name="HeroID"]');
var HeroName = document.querySelector('input[name="HeroName"]');
var HeroImage = document.querySelector('input[name="HeroImage"]');
var SkillQ = document.querySelector('input[name="SkillQ"]');
var SkillW = document.querySelector('input[name="SkillW"]');
var SkillE = document.querySelector('input[name="SkillE"]');
var SkillR = document.querySelector('input[name="SkillR"]');
var PostionA = document.querySelector('#Position');

console.log(obj);
HeroID.value = obj.HeroID;
HeroName.value  = obj.HeroName;
HeroImage.value  = obj.HeroImage;
SkillQ.value  = obj.SkillQ;
SkillE.value  = obj.SkillE;
SkillR.value  = obj.SkillR;
SkillW.value  = obj.SkillW;
PostionA.value  = obj.Postion;

function dosubmit(e) {

    if (HeroName == "") {
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
    if (PostionA.value == 0) {
        alert('请选择一个postion为空');
        // 禁用表单的提交行为
        event.preventDefault();
        return;
    }
    obj.HeroID = HeroID.value;
    obj.HeroName = HeroName.value;
    obj.HeroImage = HeroImage.value;
    obj.SkillQ = SkillQ.value;
    obj.SkillW = SkillW.value;
    obj.SkillE = SkillE.value;
    obj.SkillR = SkillR.value;
    obj.Postion = PostionA.value;
    arr.splice(localStorage.tem,1,obj);
    localStorage.HeroData = JSON.stringify(arr);
}
