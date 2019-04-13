$(document).ready(function(){
    var $books = $(".books");
    var $rank = $(".rank");
    var $booklist = $(".booklist");
    var $tuangou = $(".tuangou");
    var $hot_content_Inner= $(".hot_content_Inner");
        $.get("./api/php/goods.php",function(data){
            var str = '';
            var str2 = '';
            var str3 = '';
            var str4 = '';
            var str5 = '';
            var a = data.data1;
            var b = (data.data2)[0];
            var c = (data.data3);
            var d = (data.data4);
            var e = (data.data5);
            // console.log(a);
            
            //热书列表的头部
            str2 += '<div class="imgBox"><a href="html/details.html?booksId='+b.id+'"><img src='+b.imgurl+'></a><div class="icon"><img src="http://image31.bookschina.com/pro-images/190403dsy/tubiao48.png"></div></div><div class="neirong"><h2><a href="#">'+b.name+'</a></h2><div class="priceWrap"><span class="sellPrice">¥'+b.price+'</span><span class="price">¥'+b.oldprice+'</span></div><div class="mainFont"><p>'+b.jieshao+'</p></div></div>';
            $hot_content_Inner.append(str2);
            // 热书列表的主体
            $.each(a,function(i,item){
                str += '<li><div class="Img"><a href="html/details.html?booksId='+item.id+'"><img src='+item.imgurl+'></a></div><div class="name"><a href="#">'+item.name+'</a></div><div class="priceWrap"><span class="sellPrice">¥'+item.price+'</span><span class="price">¥'+item.oldprice+'</span></div><div class="icon"><img src="http://image31.bookschina.com/pro-images/newtejia/tubiao47.png"></div></li>';                 
            },'json')
            $books.append(str);
            // 排行榜
            $.each(c,function(i,item){
                str3 += '<li><i>'+item.rank+'</i><p>'+item.name+'</p><div class="box"><a href="html/details.html?booksId='+item.id+'"><img src="'+item.imgurl+'"></a><span class="sellPrice">¥'+item.price+'</span><span class="price">¥'+item.oldprice+'</span></div></li>';
            },'json');
            $rank.append(str3);
            //包邮专区
            $.each(d,function(i,item){
                str4 += '<li><div class="listWrap"><p><a href="#">'+item.name+'</a></p><del>¥'+item.oldprice+'</del><span class="price"><i>¥</i>'+item.price+'</span><div class="book_cover"><a href="html/details.html?booksId='+item.id+'"><img src="'+item.imgurl+'"> </a></div></div></li>';
            },'json');
            $booklist.append(str4);
            // 团购专区
            $.each(e,function(i,item){
                str5 += '<li><div class="bookCover"><a href="html/details.html?booksId='+item.id+'"> <img src="'+item.imgurl+'"></a></div><p class="bookName"><a href="#">'+item.jieshao+'</a></p><div class="priceWrap"><span class="salePrice"><b>团购价:</b><i>¥</i>'+item.price+'</span><del class="price">¥'+item.oldprice+'</del><span class="discount">1.4折</span></div></li>';
            },'json');
            $tuangou.append(str5);

            
        },'json')
});
