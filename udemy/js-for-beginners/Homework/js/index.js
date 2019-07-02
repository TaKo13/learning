$(window).on('load', function() {
  $('.main_btn').on('click', function() {
    $('.overlay').fadeToggle('slow');
    $('.modal').slideDown('slow');
  });

  $('.close').on('click', function() {
    $('.overlay').fadeToggle('hide');
    $('.modal').slideUp('slow');
  });
});
