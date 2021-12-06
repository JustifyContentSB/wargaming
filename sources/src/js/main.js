"use strict";

$(document).ready(function(){
  if($(window).width() < 820) {
    var missionSwiper = new Swiper(".mission__list", {
      slidesPerView: 'auto',
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".mission-next",
      },
    });
  }

  var hqSwiper = new Swiper(".hq__swiper", {
      slidesPerView: 3,
      spaceBetween: 60,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 'auto',
          spaceBetween: 50,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
      },
      navigation: {
        nextEl: ".hq-next",
        prevEl: ".hq-prev",
      },
    });
    
    $('.header__burger').on('click', function(e) {
      e.preventDefault();
      $('.header').toggleClass('header--active');
      $('.header__nav').toggleClass('header__nav--active');
      $('.header__burger-icon').toggleClass('header__burger-hidden');
      $('body').toggleClass('no-scroll');
    })

    $(".question__footer-up").on("touchend, click", function (e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $('.header').offset().top
      }, 400);
    });
});

// Your functions here

