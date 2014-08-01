$('.carousel').carousel();

$('.counter').each(function() {
  var total = $(this).parents('.project').find('.carousel-inner .item').length;
  $(this).text('1 / ' + total);
});

$('.carousel').on('slid.bs.carousel', function() {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  var total = carouselData.$items.length;

  var txt = (currentIndex + 1) + ' / ' + total;

  $(this).parents('.project').find('.counter').text(txt);
});

$(window).load(function() {
  $('#loading').delay(2000).fadeOut("slow");
  $('#wrapper').delay(2000).fadeIn("slow");
});