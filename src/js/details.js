$(function () {
    var str = "";
    var str2 = "";
    var str3 = "";
    var str4 = "";
    var rank = "";
    var res = $.cookie('uname');
    $(".box").jqueryzoom({
        xzoom: 400, //放大图的宽度(默认是 200)
        yzoom: 400, //放大图的高度(默认是 200)
        offset: 10, //离原图的距离(默认是 10)
        position: "right", //放大图的定位(默认是 "right")
        preload: 1
    });

   
    
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }
    //接收URL中的参数booksId
    var id = getUrlParam('booksId');
    // console.log('id:' + id);
    $.get("../api/php/goods.php", function (data) {
        var a = data.data2;
        var b = data.data1;
        var c = (data.data3);
        var d = (data.data4);
        var e = (data.data5);
        $.each(a, function (i, item) {
            if (id == item.id) {
                str += '<img src="../' + item.imgurl + '" jqimg="../' + item.mimgurl + '" class="xiaotu"/><div class="activeIcon"><img src="../img/bookdetailactiveicon.png"></div>';
                $(".box").append(str);
                str2 += '<h1>' + item.name + '</h1><div class="author"><span>作者：</span><a href="#">' + item.writer + '</a></div><div class="publisher"><span>出版社：</span><a href="#">' + item.chubanshe + '</a><span>出版时间：</span><i>' + item.time + '</i></div><div class="series">    <span>所属丛书：</span>    <a href="#">热销书籍</a></div><div class="otherInfor">    <span>开本：</span>    <em>55开</em>    <span>页数：</span>    <i>289</i></div>';
                $(".bookHead").append(str2);
                str3 += '<span class="sellPriceTit">特 价:</span><span class="sellPrice"><i>¥</i>' + item.price + '</span><span class="discount">(' + item.zhekou + '折)</span><span class="priceTit">定价:</span><del class="price">¥' + item.oldprice + ' </del>'
                $(".priceWrap").append(str3);
            }
        }, 'json');
        $.each(b, function (i, item) {
            if (id == item.id) {
                str += '<img src="../' + item.imgurl + '" jqimg="../' + item.mimgurl + '" class="xiaotu"/><div class="activeIcon"><img src="../img/bookdetailactiveicon.png"></div>';
                $(".box").append(str);
                str2 += '<h1>' + item.name + '</h1><div class="author"><span>作者：</span><a href="#">' + item.writer + '</a></div><div class="publisher"><span>出版社：</span><a href="#">' + item.chubanshe + '</a><span>出版时间：</span><i>' + item.time + '</i></div><div class="series">    <span>所属丛书：</span>    <a href="#">热销书籍</a></div><div class="otherInfor">    <span>开本：</span>    <em>55开</em>    <span>页数：</span>    <i>289</i></div>';
                $(".bookHead").append(str2);
                str3 += '<span class="sellPriceTit">特 价:</span><span class="sellPrice"><i>¥</i>' + item.price + '</span><span class="discount">(' + item.zhekou + '折)</span><span class="priceTit">定价:</span><del class="price">¥' + item.oldprice + ' </del>'
                $(".priceWrap").append(str3);
            }
        }, 'json');
        $.each(c, function (i, item) {
            if (id == item.id) {
                str += '<img src="../' + item.imgurl + '" jqimg="../' + item.mimgurl + '" class="xiaotu"/><div class="activeIcon"><img src="../img/bookdetailactiveicon.png"></div>';
                $(".box").append(str);
                str2 += '<h1>' + item.name + '</h1><div class="author"><span>作者：</span><a href="#">' + item.writer + '</a></div><div class="publisher"><span>出版社：</span><a href="#">' + item.chubanshe + '</a><span>出版时间：</span><i>' + item.time + '</i></div><div class="series">    <span>所属丛书：</span>    <a href="#">热销书籍</a></div><div class="otherInfor">    <span>开本：</span>    <em>55开</em>    <span>页数：</span>    <i>289</i></div>';
                $(".bookHead").append(str2);
                str3 += '<span class="sellPriceTit">特 价:</span><span class="sellPrice"><i>¥</i>' + item.price + '</span><span class="discount">(' + item.zhekou + '折)</span><span class="priceTit">定价:</span><del class="price">¥' + item.oldprice + ' </del>'
                $(".priceWrap").append(str3);
            }
        }, 'json');
        $.each(d, function (i, item) {
            if (id == item.id) {
                str += '<img src="../' + item.imgurl + '" jqimg="../' + item.mimgurl + '" class="xiaotu"/><div class="activeIcon"><img src="../img/bookdetailactiveicon.png"></div>';
                $(".box").append(str);
                str2 += '<h1>' + item.name + '</h1><div class="author"><span>作者：</span><a href="#">' + item.writer + '</a></div><div class="publisher"><span>出版社：</span><a href="#">' + item.chubanshe + '</a><span>出版时间：</span><i>' + item.time + '</i></div><div class="series">    <span>所属丛书：</span>    <a href="#">热销书籍</a></div><div class="otherInfor">    <span>开本：</span>    <em>55开</em>    <span>页数：</span>    <i>289</i></div>';
                $(".bookHead").append(str2);
                str3 += '<span class="sellPriceTit">特 价:</span><span class="sellPrice"><i>¥</i>' + item.price + '</span><span class="discount">(' + item.zhekou + '折)</span><span class="priceTit">定价:</span><del class="price">¥' + item.oldprice + ' </del>'
                $(".priceWrap").append(str3);
            }
        }, 'json');
        $.each(e, function (i, item) {
            if (id == item.id) {
                str += '<img src="../' + item.imgurl + '" jqimg="../' + item.mimgurl + '" class="xiaotu"/><div class="activeIcon"><img src="../img/bookdetailactiveicon.png"></div>';
                $(".box").append(str);
                str2 += '<h1>' + item.name + '</h1><div class="author"><span>作者：</span><a href="#">' + item.writer + '</a></div><div class="publisher"><span>出版社：</span><a href="#">' + item.chubanshe + '</a><span>出版时间：</span><i>' + item.time + '</i></div><div class="series"><span>所属丛书：</span><a href="#">热销书籍</a></div><div class="otherInfor">    <span>开本：</span>    <em>55开</em>    <span>页数：</span>    <i>289</i></div>';
                $(".bookHead").append(str2);
                str3 += '<span class="sellPriceTit">特 价:</span><span class="sellPrice"><i>¥</i>' + item.price + '</span><span class="discount">(' + item.zhekou + '折)</span><span class="priceTit">定价:</span><del class="price">¥' + item.oldprice + ' </del>'
                $(".priceWrap").append(str3);
            }
        }, 'json');
        $.each(c, function (i, item) {
            rank += '<li><i>' + item.rank + '</i><p>' + item.name + '</p><div class="box"><a href="details.html?booksId=' + item.id + '"><img src="../' + item.imgurl + '"></a><span class="sellPrice">¥' + item.price + '</span><span class="price">¥' + item.oldprice + '</span></div></li>';
        }, 'json');
        $(".rank").append(rank);
        //包邮专区
        $.each(d, function (i, item) {
            str4 += '<li><div class="listWrap"><p><a href="#">' + item.name + '</a></p><del>¥' + item.oldprice + '</del><span class="price"><i>¥</i>' + item.price + '</span><div class="book_cover"><a href="details.html?booksId=' + item.id + '"><img src="../' + item.imgurl + '"> </a></div></div></li>';
        }, 'json');
        $(".booklist").append(str4);
    }, 'json')
    $.get("../api/php/buycar.php", {
        "user": res
    }, function (data) {
        $(".qty").html(data.length);

    },'json');
    var loginArea = document.querySelector(".loginArea")
    var tuichu = document.createElement("a");
    if ($.cookie("uname")) {
        var res = $.cookie('uname');
        loginArea.innerHTML = "欢迎光临中国图书网&nbsp;"+ res;
        tuichu.innerHTML = "&nbsp;[安全退出]";
        tuichu.style.cssFloat = "right";
        loginArea.appendChild(tuichu);
        tuichu.onclick = function () {
            $.removeCookie("uname",{ path: '/' });
            $.removeCookie("upwd",{ path: '/' });
            location.href = "details.html";   
        };
        $(".buyButton").on("click",function(){
            $.get("../api/php/car.php?uname=" + res + "&bid=" + id + "&list= 1",function(data){
                // console.log(666);
                // alert("商品已加入购物车！");
                $.get("../api/php/buycar.php", {
                    "user": res
                }, function (data) {
                    $(".qty").html(data.length);
            
                },'json');
                // console.log(data);
            });
         })
 
        $(".buyCar").on("click",function(){
            location.href="car.html";
        })
    }else{
        loginArea.innerHTML = '<b>欢迎光临中国图书网&nbsp;请</b><a href="login.html" class="login">登录</a><span>|</span><a href="register.html" class="regist">注册</a>';
        $(".buyCar").off("click");
        $(".buyCar").on("click",function(){
            alert("请先登录");
            location.href="login.html";
        })
        $(".buyButton").on("click",function(){
            alert("请先登录");
            location.href="login.html";
        })
    }
});