// 实例对象只能调用原型链上的方法
(function($){
    $.fn.lmCarousel = function(opt){
        //this:$("#box")
        var defaults = {
            img : [],
            width : 200,
            height : 200,
            type : "vertical",
            seamless : false,
            idx : 0
        }
        //each()
        $(this).each(function(idx,item){
            var newOpt = Object.assign({},defaults,opt);
            var len = newOpt.img.length;
            var $ul;
            var init = () => {
                $ul = $("<ul/>");
                $ul.appendTo($(item).addClass("lmCarousel"));
                for(var i=0;i<len;i++){
                    $('<img src="'+newOpt.img[i]+'"/>').width(newOpt.width).height(newOpt.height).appendTo($('<li></li>').appendTo($ul))
                    ;
                }
                $(item).width(newOpt.width).height(newOpt.height);
                if(newOpt.type == "horizontal"){
                    $ul.width(newOpt.width*len).addClass("horizontal");
                }else if(newOpt.type == "faded"){
                    $ul.width(newOpt.width).height(newOpt.height).addClass("faded");
                }
                move();
            }
            var move = () => {
                setInterval(function(){
                    newOpt.idx ++;
                    if(newOpt.idx > len-1){
                        newOpt.idx = 0;
                    }
                    if(newOpt.type == "vertical"){
                        $ul.animate({"top":-newOpt.idx * newOpt.height},1000);
                    }else if(newOpt.type == "horizontal"){
                        $ul.animate({"left":-newOpt.idx * newOpt.width},1000);
                    }else{
                        $ul.children().not(":eq("+newOpt.idx+")").fadeOut(1000);
                        $ul.children().filter(":eq("+newOpt.idx+")").fadeIn(1000);
                    }
                }, 1000)
            }
            init();
        })
        return this;
        // 移入移出、索引、点击索引、无缝滚动
    } 

    // $.fn.extend({
    //     lmCarousel : function(){},
    //     ajax : function(){}
    // })
})(jQuery)

