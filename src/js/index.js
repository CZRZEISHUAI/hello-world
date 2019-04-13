$(document).ready(function(){
    
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 2000,//2秒切换一次
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop:true
      });



    var res = $.cookie('uname');
    $.get("api/php/buycar.php", {
        "user": res
    }, function (data) {
        $(".qty").html(data.length);

    },'json');
    // 登录注册信息显示
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
            location.href = "index.html";   
        };
        $(".buyCar").on("click",function(){
            location.href="html/car.html";
        })
    }else{
        loginArea.innerHTML = '<b>欢迎光临中国图书网&nbsp;请</b><a href="html/login.html" class="login">登录</a><span>|</span><a href="html/register.html" class="regist">注册</a>';
        $(".buyCar").off("click");
        $(".buyCar").on("click",function(){
            alert("请先登录");
            location.href="html/login.html";
        })
        
    }
});
