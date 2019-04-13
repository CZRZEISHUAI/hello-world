"use strict";

jQuery(function ($) {
    $(".rank").find("li:first").find(".box").css("display", "block");
    $(".rank").on("mouseover", "li", function () {
        $(this).height(130).find(".box").css("display", "block");
        $(this).siblings("li").stop().height(37).find(".box").css("display", "none");
    }).on("mouseout", "li", function () {
        $(this).siblings("li").stop().height(37);
    });
    // $(".rank").on("mouseover","li",function(){
    //     $(this).stop().animate({height:107});
    //     $(this).siblings("li").stop().animate({height:36});
    // }).on("mouseout",function(){
    //     $(this).siblings("li").stop().animate({height:36});
    // })
});