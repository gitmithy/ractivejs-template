$(function() {
    $.get("./template/template_10.html", function(template) {
        var item = "{{#if ok}}ok{{/if}}";
        var ractive = new Ractive({
            el : '#partials',
            template : template,
            partials : {
                item : item
            },
            data : {
                date : "20150901",
                title : "title1",
                rate : 1,
                month : 1,
                amount : 1,
                guaranteeMethod : "guarantee method1",
                payMethod : "pay method1",
                comment : "comment1",
                ok : true
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