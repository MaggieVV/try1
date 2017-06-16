//
//首页title图片轮播切换

var i=100;
var tt;
function changeImg() {
    $(".img8").src="img/" + i + ".jpg";
    i++;
    if(i==105){
        i=100;
    }
    $(".img8").attr('src',"img/" + i + ".jpg");

    tt=setTimeout('changeImg()',4000);
}
$(".goleft").on("click",function () {
    if(i==100){
        i=103;
    }else if(i==101){
        i=104;
    }else{
        i=i-2;
    }
    console.log(1,i)
    window.clearTimeout(tt);
    changeImg();
})
$(".goright").on("click",function () {
    if(i>=106){
        i=100;
    }
    console.log(2,i)
    window.clearTimeout(tt);
    changeImg();
})
$(".buttons>button").on("mouseenter",function () {
    i=this.value;
    console.log(i)
    window.clearTimeout(tt);
    changeImg();
})
window.onload=changeImg;//不能document.ready执行????


//导航栏'下载app'二维码

$(".black-a-last").mouseenter(function () {
    $(".app-code").css("display","block");
    $(this).css("color","#FFFFFF")
});
$(".black-a-last").mouseleave(function () {
    $(".app-code").css("display","none");
    $(this).css("color","")
});
$(".app-code").mouseenter(function () {
    $(".black-a-last").css("color","#FFFFFF");
    $(this).css("display","block");
});
$(".app-code").mouseleave(function () {
    $(".black-a-last").css("color","#CCCCCC");
    $(this).css("display","none");
});


//搜索框

$(".input-search").focus(function () {
    $(".input-search").attr('placeholder','');
    $(".nav-search").css("display","block");


    $(".nav-search").mouseenter(function () {
        $(".nav-search").css("display","block");
    })
    $(".nav-search").mouseleave(function () {
        $(".nav-search").css("display","none");
    })
    $(".input-search").mouseleave(function () {
        $(".nav-search").css("display","none")
    })
})
$(".input-search").blur(function () {
    $(".input-search").attr('placeholder','Ralph Lauren制造商全棉四件套')
})


//切换按钮
// var len = $(".c-item-list").find("li.item-list").length;
// console.log(len);
$(document).ready(function () {
    var page=0;
    var right=$(".sliceright");
    var left=$(".sliceleft");
    var ul=$(".item-list-ul");
    var list=$("div.c-item-list");
    right.click(function () {
        left.attr("disabled",false);
        left.css("background-color","#D0C4AF");
        left.hover(function () {
            $(this).css("background-color","#B19E7A");
        },function () {
            $(this).css("background-color","#D0C4AF");
        });
        ul.animate({left:'-='+ list.width()+'px'},"800");
        page++;
        if(page==3){
            right.attr("disabled",true);
            right.css("background","#E7E2D7");
        }
    });
    left.click(function () {
        right.attr("disabled",false);
        right.css("background-color","#D0C4AF");
        right.hover(function () {
            $(this).css("background-color","#B19E7A");
        },function () {
            $(this).css("background-color","#D0C4AF");
        });
        ul.animate({left:'+='+ list.width()+'px'},"800");
        page--;
        if(page==0){
            left.attr("disabled",true);
            left.css("background","#E7E2D7");
        }
    });
});

//单个li滚动切换

var commentUl=$(".comment-item>ul");
function changeComment() {
    commentUl.animate({left:'-='+ 365 +'px'},'1000',function () {
        commentUl.css({left:'0px'}).find(".item:first").appendTo(commentUl);
    });
}
$(function(){
    var scrolling=setInterval("changeComment()",2000);
    $(".comment-item").hover(function(){
        clearInterval(scrolling);
        $(".pic").css("cursor","pointer");
    },function(){
        scrolling=setInterval("changeComment()",2000);
    });
    var scrollleft=$(".scrollleft");
    var scrollright=$(".scrollright");
    scrollright.click(function () {
        commentUl.animate({left: '-=' + 365 + 'px'}, 'fast', function () {
            commentUl.css({left: '0px'}).find(".item:first").appendTo(commentUl);
        })
    });
    scrollleft.click(function () {
        commentUl.animate({left:'+=' +365 +'px'},'fast',function () {
            commentUl.css({left:'0px'}).find('.item:last').prependTo(commentUl);
        })
    })
});
















