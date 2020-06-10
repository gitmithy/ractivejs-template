$(function() {
    $.get("./template/template_05.html", function(template) {
        var ractive = new Ractive({
            el : '#event-proxies',
            template : template
        });

        var listener = ractive.on({
            activate : function() {
                alert('activating!');
            },
            deactivate : function() {
                alert('Deactivating!');
            },
            silence : function() {
                alert('No more alerts!');
                //取消事件绑定
                listener.cancel();
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
