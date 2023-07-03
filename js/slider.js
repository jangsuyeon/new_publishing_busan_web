$(document).ready(function(){

  $("#law-slider").slick({
    prevArrow: false,
    nextArrow: false,
    dots: true
  });
  // $("#law-slider .slick-dots").append("<li><div class='slick-pause'></div></li>")
  // $("#law-slider .slick-dots").append("<li><div class='slick-play'></div></li>")
  // $(".slick-pause").click(function(){ $("#law-slider").slick("slickPause")});
  // $(".slick-play").click(function(){ $("#law-slider").slick("slickPlay")});

  $("#blog-link-slider").slick({
    prevArrow: "<button type='button' class='slick-prev'><img src='img/prev-arrow.svg' /></button>",
    nextArrow: "<button type='button' class='slick-next'><img src='img/next-arrow.svg' /></button>",
    // autoplay: 3000,
    dots: false
  });
  // $("#blog-link-slider .slick-dots").append("<li><div class='slick-pause'></div></li>")
  // $("#blog-link-slider .slick-dots").append("<li><div class='slick-play'></div></li>")
  // $(".slick-pause").click(function(){ $("#blog-link-slider").slick("slickPause")});
  // $(".slick-play").click(function(){ $("#blog-link-slider").slick("slickPlay")});

  $("#load-slider").slick({
    prevArrow: "<button type='button' class='slick-prev'><img src='img/prev-arrow.svg' /></button>",
    nextArrow: "<button type='button' class='slick-next'><img src='img/next-arrow.svg' /></button>",
    dots: false
  });
  // $("#load-slider .slick-dots").append("<li><div class='slick-pause'></div></li>")
  // $("#load-slider .slick-dots").append("<li><div class='slick-play'></div></li>")
  // $(".slick-pause").click(function(){ $("load-slider").slick("slickPause")});
  // $(".slick-play").click(function(){ $("#load-slider").slick("slickPlay")});


  var slider = $('#questions > .tab > .title');  	
  var slickOptions = { 		
      variableWidth: true,
      infinite: false,
      prevArrow: false,
      nextArrow: false	
    };  	
  $(window).on('load resize', function() { 		
      if($(window).width() > 1180) { 			
          slider.slick('unslick'); 		
      }else{ 			
          slider.not('.slick-initialized').slick(slickOptions); 		
      } 
  });
  
});
