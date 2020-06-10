$(function() {
    $.get("./template/template_09.html", function(template) {
        var　ractive=new Ractive({
            el : '#two-way-binding',
            template : template,
            data : {
                colors : [ "red", "green", "blue" ]
            }
        });
    });
 });
//获取表格数据，第7个demo用到了这个方法
function getTable() {
        var result = [];
        for (var i = 0; i < 20; i++) {
            var tr = {
                td1 : "data" + i,
                td2 : "data" + i,
                td3 : "data" + i,
                td4 : "data" + i,
                td5 : "data" + i,
                td6 : "data" + i,
                td7 : "data" + i,
                td8 : "data" + i,
                td9 : "data" + i
            };
            result.push(tr);
        }
        return result;
    }