$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.main').fadeIn();
    } else {
        $('.main').fadeOut();
    }

});

$(window).scroll(function() {
  if ($(this).scrollTop()> 1000) {
$('.welcome').fadeIn();
} else {
$('.welcome').fadeOut();
}
});


$(function() {
    $(window).scroll( function(){


        $('.fadeInBlock').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 0;

            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }
        });

    });
});


// header
// $(function(){
//   $('header').data('size','big');
// });
//
// $(window).scroll(function(){
//   if($(document).scrollTop() > 0)
// {
//     if($('header').data('size') == 'big')
//     {
//         $('header').data('size','small');
//         $('header').stop().animate({
//             height:'72px'
//         },600);
//     }
// }
//
// else
//   {
//     if($('header').data('size') == 'small')
//       {
//         $('header').data('size','big');
//         $('header').stop().animate({
//             height:'40px'
//         },300);
//       }
//   }
// });

// $(function(){
//   $('header').data('size','big');
// });
//
// $(window).scroll(function(){
//   if($(document).scrollTop() > 0)
// {
//     if($('header').data('size') == 'big')
//     {
//         $('header').data('size','small');
//         $('header').stop().animate({
//             height:'40px'
//         },1800);
//     }
// }
//
// else
//   {
//     if($('header').data('size') == 'small')
//       {
//         $('header').data('size','big');
//         $('header').stop().animate({
//             height:'72px'
//         },300);
//       }
//   }
// });


$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    autoplay: true,
    autospeed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    speed: 1000,
    slidesToShow: 1
  });
});

$(function(){
  $('#menu').slicknav();
});

$('#menu').slicknav({
		prependTo:'#demo1'
});
