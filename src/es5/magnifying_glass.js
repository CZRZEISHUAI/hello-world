"use strict";

jQuery.prototype.fangda = function ($ele, opt) {
    defaults = {
        width: 400,
        height: 400,
        imgsrc: [],
        idx: 0
    };
    var newOpt = Object.assign({}, defaults, opt);
    // console.log(newOpt);
    var len = newOpt.imgsrc.length;
    var init = function init() {
        $ele.css("position", "relative");
        //构造原型盒
        $dv1 = $('<div class="box_original"></div>');
        $dv1.css("width", newOpt.width).css("height", newOpt.height).css("position", "relative");
        $dv1.append($('<img src="' + newOpt.imgsrc[0] + '">'));
        //构造移动块
        $span = $("<span/>");
        $span.css("width", newOpt.width / 2).css("height", newOpt.height / 2).css("position", "absolute").css("display", "none");
        $dv1.append($span);
        //原型盒内图片
        $img1 = $dv1.children().first();
        $img1.css("width", newOpt.width).css("height", newOpt.height);
        //构造放大盒
        $dv2 = $('<div class="box_magnify"></div>');
        $dv2.css("width", newOpt.width).css("height", newOpt.height).css("position", "absolute").css("left", newOpt.width).css("top", 0).css("overflow", "hidden").css("display", "none").css("z-index", 2);
        //构造放大盒内图片
        $dv2.append($('<img src="' + newOpt.imgsrc[0] + '">'));
        $img2 = $dv2.children().first();
        $img2.css("width", newOpt.width * 2).css("height", newOpt.height * 2).css("position", "absolute").css("left", 0).css("top", 0);;
        $ele.append($dv1);
        $ele.append($dv2);
        //构造小图
        var size = newOpt.width / len;
        $dv3 = $('<div class="box_list"></div>');
        $dv3.css("width", newOpt.width).css("height", size);
        for (i = 0; i < len; i++) {
            $dv3.append($('<img src="' + newOpt.imgsrc[i] + '">'));
        }
        $img3 = $dv3.children();
        $img3.css("width", size).css("height", size);
        $ele.append($dv3);

        move($dv1, $dv2, $img1, $img2, $span, $dv3, $img3);
    };
    var move = function move($dv1, $dv2, $img1, $img2, $span, $dv3, $img3) {
        $dv1.on("mouseenter", function () {
            $dv2.css("display", "block");
            $span.css("display", "block");
            $dv1.on("mousemove", function (e) {
                var xx = e.pageX - $dv1.offset().left - $span.width() / 2;
                var yy = e.pageY - $dv1.offset().top - $span.height() / 2;
                if (xx + $span.width() >= $dv1.width()) {
                    xx = $dv1.width() - $span.width();
                }
                if (xx <= 0) {
                    xx = 0;
                }
                if (yy + $span.height() >= $dv1.height()) {
                    yy = $dv1.height() - $span.height();
                }
                if (yy <= 0) {
                    yy = 0;
                }
                // console.log(xx,yy);
                $img2.css("left", -2 * xx).css("top", -2 * yy);
                $span.css("left", xx).css("top", yy);
            });
        });
        $dv1.on("mouseleave", function () {
            $dv2.css("display", "none");
            $span.css("display", "none");
        });
        $dv3.on("click", "img", function () {
            $img1.attr("src", $(this).attr("src"));
            $img2.attr("src", $(this).attr("src"));
        });
    };
    init();
};