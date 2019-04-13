$(function () {
    var status = [200, 304];
    var goods = document.querySelector("#goods");
    var xhr = new XMLHttpRequest();
    var price = document.querySelector(".price");
    var oldprice = document.querySelector(".oldprice");
    var time = document.querySelector(".time");
    var cheap = document.querySelector(".cheap");
    var saleNum = document.querySelector(".saleNum");
    var page = document.querySelector(".page");
    var yema = 1;
    var num = 15;
    var res = $.cookie('uname');

    $.get("../api/php/buycar.php", {
        "user": res
    }, function (data) {
        $(".qty").html(data.length);

    },'json')

    //默认为id排序
    request("row_time");

    // 售价排序
    price.onclick = function () {
        request("row_price");
    }
    // 定价排序
    oldprice.onclick = function () {
        request("row_oldprice");
    }
    // 折扣排序
    cheap.onclick = function () {
        request("row_zhekou");
    }

    // 时间排序
    time.onclick = function () {
        request("row_time");
    }
    //销量排序
    saleNum.onclick = function () {
        request("row_saleNum");
    }
    page.onclick = function (e) {
        var spanyema = e.target.innerHTML;
        xhr.open("get", "../api/php/list.php?yema=" + spanyema + "&num=" + num);
        xhr.send(null);
    }
    
    //封装获取数据库数据并进行页面渲染的函数
    function request(idx) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && status.indexOf(xhr.status) != -1) {
                var res = JSON.parse(xhr.responseText);
                var content = res[idx];
                goods.innerHTML = content.map(function (item) {
                    return `<li><div class="cover"><a href="details.html?booksId=${item.id}"><img src="../${item.imgurl}"></a></div><div class="infor"><div class="priceWrap"><span class="sellPrice">¥${item.price}</span><span class="discount">(${item.zhekou}折)</span><del class="price">¥${item.oldprice}</del></div><h2 class="name"><a href="#">${item.name}</a></h2><div class="otherInfor"><b>${item.writer}</b><i>/</i><b>${item.chubanshe}</b></div><div class="oparateButton"><span class="buyButton"  data-bookid="${item.id}">加入购物车</span><a href="#" class="collectBtn">收藏</a></div></div></li>`
                }).join("");
                page.innerHTML = "";
                var spanNum = Math.ceil(res.len / res.num);
                for (var i = 1; i <= spanNum; i++) {
                    var span = document.createElement("span");
                    span.innerHTML = i;
                    page.appendChild(span);
                }
                page.children[res.yema - 1].classList.add("active");
                var loginArea = document.querySelector(".loginArea")
                var tuichu = document.createElement("a");
                if ($.cookie("uname")) {
                    var res = $.cookie('uname');
                    loginArea.innerHTML = "欢迎光临中国图书网&nbsp;" + res;
                    tuichu.innerHTML = "&nbsp;[安全退出]";
                    tuichu.style.cssFloat = "right";
                    var $uname = $.cookie("uname");
                    loginArea.appendChild(tuichu);
                    tuichu.onclick = function () {
                        $.removeCookie("uname", {
                            path: '/'
                        });
                        $.removeCookie("upwd", {
                            path: '/'
                        });
                        location.href = "login.html";
                    };
                    $(".buyCar").on("click", function () {
                        location.href = "car.html";
                    })

                    $.get("../api/php/buycar.php", {
                        "user": res
                    }, function (data) {
                        $(".qty").html(data.length);

                    },'json')
                    // 添加购物车功能
                    $(".buyButton").on("click", function () {
                        var $bid = $(this).data("bookid");
                        // console.log($bid);
                        // console.log($uname);
                        $.get("../api/php/car.php?uname=" + $uname + "&bid=" + $bid + "&list= 1",function(data){
                            
                            // alert("商品已加入购物车！")
                            $.get("../api/php/buycar.php", {
                                "user": res
                            }, function (data) {
                                $(".qty").html(data.length);
                        
                            },'json')
                        });
                        
                    })
                } else {
                    loginArea.innerHTML = '<b>欢迎光临中国图书网&nbsp;请</b><a href="login.html" class="login">登录</a><span>|</span><a href="register.html" class="regist">注册</a>';
                    $(".buyCar").off("click");
                    $(".buyCar").on("click", function () {
                        alert("请先登录");
                        location.href = "login.html";
                    })
                    $(".buyButton").on("click",function(){
                        alert("请先登录");
                        location.href="login.html";
                    })
                }
            }
        }
        xhr.open("get", "../api/php/list.php?yema=" + yema + "&num=" + num);
        xhr.send(null);
    }


})