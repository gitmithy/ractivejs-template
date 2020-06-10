$(function() {
    $.get("./template/template_01.html", function(template) {
        var ractive = new Ractive({
            //el实质上是一个选择器，可以是#id,.class等等，同jQuery
            //其实就是替换了el选择器对应元素的innerHTML
            el : '#module',
            //template是模板对象，可以是ajax回调中的模板对象
            //也可以是一段html代码，也可是定义在当前页上某个模板的id
            template : template,
            //data就是要放到模板中的数据，是一个json对象，value可以是方法
            data : {
                list : [],
				// color : "#23b574"
            },
            //模板渲染时执行的回调函数
            onrender : function() {
                //this表示当前ractive对象，list就是data中的list
                //把getJson()方法的返回值复制给list
                //类似AngularJs中的$scope.list=getJson();
                this.set("list", getJson());
            },
            //模板渲染完毕执行的回调函数
            //如果要动态给模板中的DOM绑定一些动态jQuery事件
            //建议写在这里
            oncomplete:function(){
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
