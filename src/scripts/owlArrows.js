$(document).ready(function () {


  const owl = $('.owlArrows').owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: false,
    dots: false,
    navContainerClass: 'slider-btns',
    navClass: 'slider-btn'

  });

  $('.slider-btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
  })

  $('.slider-btn--next').click(function () {
    owl.trigger('next.owl.carousel');
  })



});