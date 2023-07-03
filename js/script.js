$(document).ready(function(){
    // 메뉴
  $(".main").mouseenter(function(){
    $(".sub").css({
      display: "none"
    })
    const idx = $(this).index();
    const sub = $(".sub").eq(idx)
    sub.css({
      display: "block"
    })
    $(".main").mouseleave(function(){
      $(".sub").css({
        display: "none"
      })
    });
  });
 
  // 모바일 메뉴
  // var stat = false;
  //   $("#ham").click(function(){
  //     if(stat == false){
  //         $("#menuback2").stop().fadeIn();
  //         $("#mlnb").css("right", "0px");
  //         stat = true;
  //         $(this).addClass("ex");
  //         $("html,body").css("overflow", "hidden");
  //     }else{
  //       $("#X").click(function(){
  //         $("#menuback2").stop().fadeOut();
  //         $("#mlnb").css("right", "-100%");
  //         stat = false;
  //         $(this).removeClass("ex");
  //         $("html,body").css("overflow", "auto");

  //       });
  //     }
  //   });
  $(".ham").click(function(){
    $(".mlnb").stop().animate({right:0}, 10);
    $(".menuback2").stop().fadeIn();
    $("html").css("overflow","hidden");
  });

  $(".mclose").click(function(){
      $(".mlnb").stop().animate({right:"-100%"}, 10);
      $(".menuback2").stop().fadeOut();
      $("html").css("overflow","auto");
  });
  $(".mmain > a").click(function(){
    $(".msub").css({
      display: "none"
    })
    const idx = $(this).parent(".mmain").index();
    const msub = $(".msub").eq(idx)
    msub.css({
      display: "block"
    })
    $(this).parent(".mmain").siblings(".mmain").children("a").removeClass("on");
    $(this).addClass("on");
  });
    
  // $(".msub_list_title").click(function(e){
  //   const idx = $(this).index();
  //   $(this).eq(idx).children(".msub_list_cont").slideDown();
  //   $(this).children(".msub_list_cont").slideToggle();
  // });

  $(".msub_list_title").click(function(e){
    event.preventDefault();
    $(this).parent("li").siblings().children(".msub_list_title").next(".msub_list_cont").stop().slideUp();
    $(this).parent().siblings().find(".accbtn-p").not($(this).parent().find(".accbtn-p")).removeClass("rot");
    if($(this).parent().find(".msub_list_cont").is(":visible")){
        $(this).find(".accbtn-p").removeClass("rot")
    }else{
        $(this).find(".accbtn-p").addClass("rot")
    }
    // if($(".accbtn-p").parent("a").parent(".msub_list_title").next(".msub_list_cont").is(":visible")){
    //     $(".accbtn-p").removeClass("rot")
    // }else{
    //     $(".accbtn-p").addClass("rot")
    // }
    $(this).next(".msub_list_cont").stop().slideToggle();
  });

    
    // $(window).resize(function(){
    //     $("#menuback2").hide();
    //     $("#mlnb").css("right","-360px");
    //     $("#ham").removeClass("ex");
    //     stat = false;
    //     $("html,body").css("overflow", "auto");
    // });
  
  // var currentPosition = parseInt($(".quickmenu").css("top"));
  // $(window).scroll(function() {
  //   var position = $(window).scrollTop(); 
  //   $(".quickmenu").stop().animate({
  //     "top":position + currentPosition + "px"
  //   }, 500
  //   );
  // });

  // 스크롤 이동
  // $(".scroll-move").on("click",function(event){
  //   var offset = $(".scroll-top").offset();
  //   $("html, body").animate({scrollTop: offset.top},400);
  // });
  
});


$(".scroll-top").click(function(){
  $('html, body').animate({
    scrollTop:0
  }, 400);
	return false;
});
$(".scroll-bottom").click(function(){
  $('html, body').animate({
    scrollTop : ($('footer').offset().top)
  }, 400);
	return false;
});


$(".orange").mouseenter(function(){
  // $("#main-visual").css({
  //   background: "#F57D20"
  // });
  $("#main-visual").css({
    background: "linear-gradient(to right, #F57D20, #F56920, #F4B322)"
  });
  $(".switchbtn").css({
    color: "#ffffff"
  });
  $(".ing-b").css({
    display: "none"
  });
  $(".start-b").css({
    display: "block"
  });
});
$(".gray").mouseenter(function(){
  $("#main-visual").css({
    background: "#D2D2D2"
  });
  $(".switchbtn").css({
    color: "#999999",
  });
  $(".ing-b").css({
    display: "none"
  });
  $(".end-b").css({
    display: "block"
  });
});
$(".orange, .gray").mouseenter(function(){
  $(".receipt").css({
    background: "#333333",
  });
  $("#switch").css({
    background: "#ffffff60",
  });
  $(".switchbtn-on").css({
    color: "#222222",
  });
  $(".receipt-btn").css({
    color: "#999999",
  });
  $(".receipt-btn:hover").css({
    color: "#ffffff",
  });
  $(".switchbtn").removeClass("tactive");
});
$(".orange, .gray").mouseleave(function(){
  // $("#main-visual").css({
  //   background: "#0075bf"
  // });
  $("#main-visual").css({
    background: "linear-gradient(to right, #0075bf, #0064B3, #46cbd8)"
  });
  $(".receipt").css({
    background: "#00000015",
    color: "#96CCF1"
  });
  $("#switch").css({
    background: "#1E395B90",
    color: "#ffffff"
  });
  $(".switchbtn").css({
    color: "#96CCF1",
  });
  $(".switchbtn-on").addClass("tactive")
  $(".receipt-btn").css({
    color: "#ffffff",
  });
  $(".ing-b").css({
    display: "block"
  });
  $(".start-b").css({
    display: "none"
  });
  $(".end-b").css({
    display: "none"
  });
});
$(".gradient-blue1").click(function(){
  $("#main-visual").css({
    background: "linear-gradient(to right, #0075bf, #0064B3, #46cbd8)",
  });
  $(".receipt").css({
    background: "#00000015",
    color: "#ffffff"
  });
});
$(".blue1").click(function(){
  $("#main-visual").css({
    background: "#00598D"
  });
  $(".receipt").css({
    background: "#00000015",
    color: "#ffffff"
  });
});

$(".switchbtn, .white-tab-btn").click(function(){
  const idx = $(this).index()
  $(".switchbtn").eq(idx).addClass("switchbtn-on")
  $(".switchbtn").eq(idx).siblings().removeClass("switchbtn-on");  

  $(".white-tab-btn").eq(idx).addClass("white-tab-btn-on")
  $(".white-tab-btn").eq(idx).siblings().removeClass("white-tab-btn-on");
  
  $(".tabcont").eq(idx).css({display: "block"})
  $(".tabcont").eq(idx).siblings().css({display: "none"})
});

$(".tabbtn").click(function(){
  var idx = $(this).index();
  console.log(idx)
  $(".white-tab-cont").hide();
  $(".white-tab-cont").eq(idx).show();
  $(".tabbtn").removeClass("tactive");
  $(this).addClass("tactive");
  $(".switchbtn-on").addClass("tactive")

  if(idx){
    $("#toggle").animate({
      left:"105px"
    },200)
  }else{
    $("#toggle").animate({
      left:"0px"
    })
  }
  if(idx){
    $("#toggle1").animate({
      left:"85px"
    },200)
  }else{
    $("#toggle1").animate({
      left:"0px"
    })
  }

});

 /*탭메뉴*/
 $('.tab').each(function(i) {
  var oTab = $(this);
  var tabIndex = $(this).find('.show').attr('id').match(/\d+$/);

  $(this).find('.panel').find('#content-' + tabIndex[0]).show();

  $(this).find('.title li a').click(function() {
    /*선택색인*/

    var tabIndex = $(this).attr('id').match(/\d+$/);
    /*타이틀*/
    oTab.find('.title li a').removeClass('show');
    $(this).addClass('show');

    /*패널*/
    oTab.find('.panel .tab-content').hide();
    oTab.find('.panel').find('#content-' + tabIndex[0]).show();

    return false;
  });

});


// sub left-menu
$(".left-main > a").mouseenter(function(event){
  event.preventDefault();
  $(this).parent(".left-main").siblings(".left-main").children(".left-sub").css({display: "none"});
  $(this).next(".left-sub").stop().toggle();
  // $(this).parent(".left-main").siblings(".left-main").children("a").removeClass("on");
  // $(this).toggleClass("on");
});
$(".left-main > a").mouseleave(function(event){
  event.preventDefault();
  $(this).parent(".left-main").siblings(".left-main").children(".left-sub").css({display: "none"});
  $(this).next(".left-sub").stop().toggle();
  // $(this).parent(".left-main").siblings(".left-main").children("a").removeClass("on");
  // $(this).removeClass("on");
});


// select
function CustomSelectBox(selector){
  this.$selectBox = null,
      this.$select = null,
      this.$list = null,
      this.$listLi = null;
  CustomSelectBox.prototype.init = function(selector){
      this.$selectBox = $(selector);
      this.$select = this.$selectBox.find('.box .select');
      this.$list = this.$selectBox.find('.box .list');
      this.$listLi = this.$list.children('li');
  }
  CustomSelectBox.prototype.initEvent = function(e){
      var that = this;
      this.$select.on('click', function(e){
          that.listOn();
      });
      this.$listLi.on('click', function(e){
          that.listSelect($(this));
          $(".list > li").data("value");
      });
      $(document).on('click', function(e){
          that.listOff($(e.target));
      });
  }
  CustomSelectBox.prototype.listOn = function(){
      this.$selectBox.toggleClass('on');
      if(this.$selectBox.hasClass('on')){
          this.$list.css('display', 'block');
      }else{
          this.$list.css('display', 'none');
      };
  }
  CustomSelectBox.prototype.listSelect = function($target){
      $target.addClass('selected').siblings('li').removeClass('selected');
      this.$selectBox.removeClass('on');
      this.$select.text($target.text());
      this.$list.css('display', 'none');
  }
  CustomSelectBox.prototype.listOff = function($target){
      if(!$target.is(this.$select) && this.$selectBox.hasClass('on')){
          this.$selectBox.removeClass('on');
          this.$list.css('display', 'none');
      };
  }
  this.init(selector);
  this.initEvent();
}

// select connect
$(function(){
  var selectType01 = new CustomSelectBox('.select_box.type01');
  var selectType02 = new CustomSelectBox('.select_box.type02');
  var selectType03 = new CustomSelectBox('.select_box.type03');
  var selectType04 = new CustomSelectBox('.select_box.type04');
  var selectType05 = new CustomSelectBox('.select_box.type05');
  var selectType06 = new CustomSelectBox('.select_box.type06');
  var selectType07 = new CustomSelectBox('.select_box.type07');
  var selectType08 = new CustomSelectBox('.select_box.type08');
});


// 파일 명 가져오기
// var fileTarget = $('.filewrap .uploadBtn');
var fileTarget = $('.uploadBtn');
fileTarget.on('change', function(){ // 값이 변경되면
    if(window.FileReader){ // modern browser
        var filename = $(this)[0].files[0].name;
    } else { // old IE
        var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
    }  // 추출한 파일명 삽입
    $(this).siblings('.fileName').val(filename);
});


// 자주하는 질문 tab
$("#questions .accbtn").click(function(){
  $(this).next("#questions .acccont").slideToggle();
  $(this).toggleClass("aactive");
  if($(this).hasClass("aactive")){
      $(this).children("span").addClass("accrot");
  }else{
      $(this).children("span").removeClass("accrot");
  }
  // if($(this).hasClass("aactive")){
  //     $(this).children("span").text("-");
  // }else{
  //     $(this).children("span").text("+");
  // }
});

// index 사업소개
$("#acc-s .accbtn").click(function(){
  $(this).parent().siblings().children("#acc-s .acccont").slideUp();
  $(this).next("#acc-s .acccont").slideToggle();
  $(this).toggleClass("aactive");
});


$(".outline-gray-btn").on('click', function(e){
  $(e.target).css({'background': '#1A72C9', 'border': '1px solid #0064B3', 'color': '#ffffff'});
});


$(".card-big").mouseenter(function(){
  const idx = $(this).index();
  $(".card").eq(idx).css({
    'transform' : 'rotateY(180deg)'
  });
});
$(".card-big").mouseleave(function(){
  const idx = $(this).index();
  $(".card").eq(idx).css({
    'transform' : 'rotateY(0)'
  });
});
$(".small-card").mouseenter(function(){
  const idx = $(this).index();
  $(".small-card").eq(idx).css({
    'transform' : 'rotateY(180deg)'
  });
});
$(".small-card").mouseleave(function(){
  const idx = $(this).index();
  $(".small-card").eq(idx).css({
    'transform' : 'rotateY(0)'
  });
});

// modal
var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("modalbtn");
var spanes = document.getElementsByClassName("close");
var funcs = [];
 
function Modal(num) {
  return function() {
    btns[num].onclick =  function() {
        modals[num].style.display = "block";
        console.log(num);
    };
 
    spanes[num].onclick = function() {
        modals[num].style.display = "none";
    };
  };
}
 
for(var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}
 
for(var j = 0; j < btns.length; j++) {
  funcs[j]();
}
 
window.onclick = function(event) {
  if (event.target.className == "modal") {
      event.target.style.display = "none";
  }
};


var familySite = document.querySelector('.family-site');

  if (familySite) {
    var button = familySite.querySelector('button');
    var srOnly = button.querySelector('.sr-only');

    var callBack = function callBack() {
      EventHandler.trigger(button, 'click');
    };

    var bodyClick = function bodyClick(e) {
      if (!SelectorEngine.parents(e.target, '.family-site')[0]) {
        // callBack();
        familySite.classList.remove('is-active');
        srOnly.textContent = '열기';
      }
    };

    button.addEventListener('click', function () {
      if (familySite.classList.contains('is-active')) {
        familySite.classList.remove('is-active');
        srOnly.textContent = '열기';
      } else {
        familySite.classList.add('is-active');
        srOnly.textContent = '닫기';
        familySite.addEventListener('keydown', function (e) {
          moveFocus(e, familySite, callBack);
        });
        document.addEventListener('click', bodyClick);
      }
    });
  } 

  // 스크롤 이동
  $(".p-scroll-move").click(function(event){
    event.preventDefault();
    var x= $(this).attr("href");
    $("html, body").stop().animate({scrollTop: $(x).offset().top},400);
  });

  // $('.printbtn').on('click', function(){
  //   window.print();  
  // });