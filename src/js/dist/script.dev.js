"use strict";

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></button>',
    responsive: [{
      breakpoint: 991,
      settings: {
        dots: false
      }
    }, {
      breakpoint: 767,
      settings: {
        dots: true,
        arrows: false
      }
    }]
  });
});