$(function() {
    $.get("./template/template_04.html", function(template) {
        var ractive = new Ractive({
            el : '#expressions',
            template : template,
            data : {
                date : "2015-09-01",
                title : "title1",
                rate : 1,
                month : 1,
                amount : 1,
                guaranteeMethod : "guarantee method1",
                payMethod : "pay method1",
                comment : "comment1",
                format : function(date) {
                    return date.replace(/-/g, "/");
                }
            }
        });
    });
 });
     function getJson() {
         var result = [];
         for (var i = 0; i < 5; i++) {
             var invest = {};
             invest.date = "2015090" + i;
             invest.title = "title" + i;
             invest.rate = i;
             invest.month = i;
             invest.amount = i * 1000;
             invest.guaranteeMethod = "guarantee method" + i;
             invest.payMethod = "pay method" + i;
             invest.comment = "comment" + i;
             result.push(invest);
         }
         return result;
     }
