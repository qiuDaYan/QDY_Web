var shengsel = document.querySelector('#selProvince');
var shisel = document.querySelector('#selCity');
var qusel = document.querySelector('#selDistrict');

arrsheng=province;
arrshi=city;
arrqu=District;

initSheng(arrsheng);
function initSheng(array) {
    var strHrml = '<option value="0">--请选择省份--</option>';
    array.forEach(function(item) {
        strHrml += '<option value="'+ item.ProID + '">' +item.ProName +'</option>';
    });
    shengsel.innerHTML = strHrml;
}

// 省级选择
function shenChange() {

    var shengresult = arrshi.filter(function(item) {
        if (item.ProID == shengsel.value) {
            return item;
        }
    });
    initShi(shengresult);
    shiChange();
}

// 市的定义
function initShi(array) {
    var strHtml = '<option value="0">--请选择城市--</option>';
    array.forEach(function(item) {
        strHtml += '<option value="' + item.CityID + '">' +
            item.CityName +
            '</option>';
    });
    shisel.innerHTML = strHtml;
}

// 市级的选择
function shiChange() {

  var shiresult = arrqu.filter(function(item) {
      if (item.CityID == shisel.value) {
          return item;
      }
  });
  console.log(shiresult);
  initqu(shiresult);
}
// 区
function initqu(array) {
    var strHtml = '<option value="0">--请选择区/县--</option>';
    array.forEach(function(item) {
        strHtml += '<option value="' + item.Id + '">' +
            item.DisName +
            '</option>';
    });
    qusel.innerHTML = strHtml;
}
