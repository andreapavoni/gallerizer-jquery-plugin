/*
	jQuery.Gallerizer 0.1
  Written by Andrea (apeacox) Pavoni, http://d-bricks.com
  For more information, please visit http://github.com/apeacox/gallerizer-jquery-plugin
  Released under a MIT License
  Date: 2009/12/14
*/

jQuery.fn.gallerize = function(photos, options) {
  settings = jQuery.extend({
    fade_speed: 1500, // fading in/out speed
    start_at: 1, // position in photos array from which to start the slideshow
    delay: 5000 // delay from each fade
  }, options);

  jQuery.fn.show_next = function(index) {
    $(this).fadeOut(settings.fade_speed, function () {
      $(this).attr('src', photos[index]);
      $(this).fadeIn(settings.fade_speed);
    });
  };

  counter = settings.start_at;

  return $(this).everyTime(settings.delay, function() {
    index = ((counter == photos.length) ? counter = 0 : counter++);
    $(this).show_next(index);
  }, 0);
};
