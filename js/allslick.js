$(function(){
  "use strick"


  $('.home_testi_slider').slick({
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<i class="fa-solid fa-right-long tms_next"></i>',
    prevArrow:'<i class="fa-solid fa-left-long tms_prev"></i>',
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  });



// accesories deal slider


$('.deal_main_slider').slick({
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});


// feedback slider

$('.feed_main_slider').slick({
  arrows:false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1700,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});






// categry 1st slider

$('.cat_slider_main').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1700,
  nextArrow:'<i class="fa-solid fa-arrow-right cas_n"></i>',
  prevArrow:'<i class="fa-solid fa-arrow-left cas_p"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


































})