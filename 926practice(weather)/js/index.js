getcity('北京');

function doSearch() {

   if(document.querySelector('#city').value == ''){
     alert('请输入城市');
   }else{
     getcity(document.querySelector('#city').value);
   }
}
//
// getcity(document.querySelector('#city').onkeyup = function(e) {
//             if (e.keyCode == 13) {
//                 getcity(document.querySelector('#city').value);
//             }
//         };

function getcity(cityName) {

    $.ajax({

        url: 'https://apis.baidu.com/apistore/weatherservice/cityinfo',
        data: {
            cityname: cityName
        },
        method: 'get',
        headers: {
            apikey: "5d98670c326056283c20cb53e8b1db46"
        },
        dataType: 'json',
        success: function(res) {

            if (res.errNum == 0) {
                console.log(res);
                console.log(res.retData.cityCode);
                var cityID = res.retData.cityCode;
                getWeather(cityName, cityID);
            } else {
                alert("很抱歉您查询的城市暂时没有天气信息");
                document.querySelector('#city').value = '';
            }
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function getWeather(cityName, cityID) {

    $.ajax({

        url: 'https://apis.baidu.com/apistore/weatherservice/recentweathers',
        data: {
            cityname: cityName,
            cityid: cityID
        },
        method: 'get',
        headers: {
            apikey: "5d98670c326056283c20cb53e8b1db46"
        },
        dataType: 'json',
        success: function(res) {
            var tablecurrent = document.querySelector('#listBody');
            var thead = document.querySelector('.thead');
            var table = document.createElement('table');
            var history = res.retData.history;
            var forecast = res.retData.forecast;
            var today = res.retData.today;
            for (var i = 0; i < history.length; i++) {
                var obj = history[i];
                var tobdy = '';
                if (i == history.length - 1) {
                    tobdy = setTable(obj, '昨天', cityName);
                } else {
                    tobdy = setTable(obj, obj.date, cityName);
                }
                table.appendChild(tobdy);
            }
            var tobdyto = setTable(today, '今天', cityName);
            table.appendChild(tobdyto);
            for (var a = 0; a < forecast.length; a++) {
                var obj1 = forecast[a];
                var tobdy1 = '';
                if (a == 0) {
                    tobdy1 = setTable(obj1, '明天', cityName);
                } else {
                    tobdy1 = setTable(obj1, obj1.date, cityName);
                }
                table.appendChild(tobdy1);
            }
            tablecurrent.innerHTML = '<table class="table table-striped table-bordered">' + '<thead class="thead">' + thead.innerHTML + '</thead>' + table.innerHTML + '</table>';
        },
        error: function(err) {

            console.log(err);
        }
    });
}

function setTable(obj, dayName, cityName) {
    var tbody = document.createElement('tbody');
    tbody.innerHTML = `<tbody>
  <tr class='success'>
  <td>${cityName}</td>
  <td>${dayName}</td>
  <td>${obj.week}</td>
  <td>${obj.fengli}</td>
  <td>${obj.fengxiang}</td>
  <td>${obj.hightemp}</td>
  <td>${obj.lowtemp}</td>
  <td>${obj.type}</td>
</tr>
</tbody>
`;
    return tbody;
}
