$(document).ready(function(){
    $('.promo__slider').slick({
      speed: 1200,
      dots: true,
      adaptiveHeight:true,
      prevArrow: '<button type="button" class="slick-prev"><img src= "../img/icons/left-arrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src= "../img/icons/right-arrow.svg"></button>'
    });
  });