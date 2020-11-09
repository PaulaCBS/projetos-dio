$(document).ready(function(){
  $(".slider").not('.slick-initialized').slick({
    centerMode: true,
    centerPadding: '41px',
    slidesToShow: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          centerPadding: '41px',
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '41px',
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });
});