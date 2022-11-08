$(function(){
  "use strick"

  
  $(".backtotop i").on('click' , function(){
    $("html,body").animate({
      scrollTop:0
    },1200)
  })

  $(window).on('scroll' , function(){
    let scrolling = $(this).scrollTop()

    if(scrolling > 20){
      $(".backtotop i").fadeIn(500)
    }else{
      $(".backtotop i").fadeOut(500)
    }

    if(scrolling > 50){
      $(".menu").addClass("menu_ex")
    }else{
      $(".menu").removeClass("menu_ex")
    }
  })
  



  // all counter js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// all light box js
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})



$(document).ready(function() {
  const minus = $('.quantity__minus');
  const plus = $('.quantity__plus');
  const input = $('.quantity__input');
  minus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    if (value > 1) {
      value--;
    }
    input.val(value);
  });
  
  plus.click(function(e) {
    e.preventDefault();
    var value = input.val();
    value++;
    input.val(value);
  })
});





const tilt = $('.shop_item').tilt({
  perspective:1000,
})
tilt.on('change', function(e, transforms){});









})