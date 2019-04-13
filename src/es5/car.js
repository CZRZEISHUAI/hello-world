"use strict";

$(function () {
    var loginArea = document.querySelector(".loginArea");
    var str = "";
    var total = 0;
    if ($.cookie("uname")) {
        var res = $.cookie('uname');
        loginArea.innerHTML = "欢迎光临中国图书网&nbsp;" + res;
    }
    // 向数据库发起请求获取登录用户的购物信息，渲染在购物车列表中
    $.get("../api/php/buycar.php", {
        "user": res
    }, function (data) {
        // console.log(data);
        // console.log(data.length);
        $(".qty").html(data.length);
        $.each(data, function (idx, item) {
            var idd = item.bid;
            $.get("../api/php/goods.php", {
                "bid": idd
            }, function (data1) {
                var bookXQ = data1.data6[0];
                str = '<div class="shoppingList clearfix" style="z-index: 1;"><div class="cartCheckbox fl"><input type="checkbox" style="margin-top:65px;margin-left:10px;" class="one"></div><div class="goodImg fl"><a href="#" ><img src="../' + bookXQ.imgurl + '"></a></div><div class="goodName fl"><a href="#">' + bookXQ.name + '</a></div><div class="goodPrice fl"><strong>￥' + bookXQ.oldprice + '</strong></div><div class="goodSellPrice fl">￥<strong class="danjia">' + bookXQ.price + '</strong><div class="salesPromotion">促销优惠<b></b></div></div><div class="goodQuantity fl"><div class="quantityForm"><span class="jian" data-bookid ="' + bookXQ.id + '">-</span><div class="qty">' + item.bnum + '</div><span class="jia" data-bookid ="' + bookXQ.id + '">+</span></div></div><div class="goodSum fl">￥<strong class="subtotal">' + (bookXQ.price * item.bnum).toFixed(2) + '</strong></div><div class="goodOperation fl"><span data-bookid ="' + bookXQ.id + '" class="delete">删除</span></div></div>';
                $(".listWrap").append(str);
                // 全选
                $(".allCheck").on("click", function () {
                    $(".one").prop("checked", this.checked);
                });

                total += Number(item.bnum * bookXQ.price);
                $(".money").text(total.toFixed(2));
                // 增加书籍
                $(".jia").off("click").on("click", function () {
                    var $bid = $(this).data("bookid");
                    var a = $(this).prev().html();
                    a++;
                    $(this).prev().html(a);
                    var $qty = $(this).prev().html();
                    var $danjia = $(this).offsetParent().find(".danjia").html();
                    var zongjia = ($qty * $danjia).toFixed(2);
                    // total += Number(zongjia);
                    // $(".money").text(total);
                    // console.log($qty,$danjia);
                    $(this).offsetParent().find(".subtotal").html(zongjia);
                    $.get("../api/php/car.php?uname=" + res + "&bid=" + $bid + "&qty=" + $qty, function (data) {
                        var str5 = 0;
                        $.get("../api/php/buycar.php?user=" + res, function (data) {
                            //  console.log('666');
                            $.each(data, function (idx, item) {
                                var idd = item.bid;
                                $.get("../api/php/goods.php", {
                                    "bid": idd
                                }, function (data4) {
                                    var bookXQ = data4.data6[0];
                                    // console.log(bookXQ.price,item.qty);

                                    str5 += Number(item.bnum * bookXQ.price);

                                    $(".money").text(str5.toFixed(2));
                                }, 'json');
                            });
                        }, 'json');
                    });
                });
                // 减少书籍
                $(".jian").off("click").on("click", function () {
                    var $bid = $(this).data("bookid");
                    var a = $(this).next().html();
                    a--;
                    if (a <= 0) {
                        a = 1;
                    }
                    $(this).next().html(a);
                    var $qty = $(this).next().html();
                    var $danjia = $(this).offsetParent().find(".danjia").html();
                    var zongjia = ($qty * $danjia).toFixed(2);

                    $(this).offsetParent().find(".subtotal").html(zongjia);
                    $.get("../api/php/car.php?uname=" + res + "&bid=" + $bid + "&qty=" + $qty, function (data) {
                        var str5 = 0;
                        $.get("../api/php/buycar.php?user=" + res, function (data) {
                            //  console.log('666');
                            $.each(data, function (idx, item) {
                                var idd = item.bid;
                                $.get("../api/php/goods.php", {
                                    "bid": idd
                                }, function (data4) {
                                    var bookXQ = data4.data6[0];
                                    // console.log(bookXQ.price,item.qty);

                                    str5 += Number(item.bnum * bookXQ.price);
                                    str5.toFixed(2);
                                    $(".money").text(str5.toFixed(2));
                                }, 'json');
                            });
                        }, 'json');
                    });
                });
                // 删除书籍
                $(".delete").off("click").on("click", function () {
                    var $biddelete = $(this).data("bookid");
                    $.get("../api/php/car.php?uname=" + res + "&biddelete=" + $biddelete, function (data) {
                        location.href = "car.html";
                    });
                });
                //清空购物车
                $(".f7").off("click").on("click", function () {
                    // var $biddelete = $(this).data("bookid");
                    if ($(".allCheck").prop("checked")) {
                        // console.log(res);

                        $.get("../api/php/car.php?del_uname=" + res, function (data) {
                            location.href = "car.html";
                        });
                    }
                });
            }, 'json');
        });
    }, 'json');
});