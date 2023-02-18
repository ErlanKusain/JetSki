$(document).ready(function(){
    $('.promo__slider').slick({
      speed: 1200,
      dots: true,
      adaptiveHeight:true,
      prevArrow: '<button type="button" class="slick-prev"><img src= "../img/icons/left-arrow.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src= "../img/icons/right-arrow.svg"></button>'
    });

    $('ul.search__tabs').on('click', 'li:not(.search__tab_active)', function() {
      $(this)
        .addClass('search__tab_active').siblings().removeClass('search__tab_active')
        .closest('div.container').find('div.search__content').removeClass('search__content_active').eq($(this).index()).addClass('search__content_active');
    });

  });