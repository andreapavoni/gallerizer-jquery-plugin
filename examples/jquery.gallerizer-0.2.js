/*
  jQuery.Gallerizer 0.2
  Written by Andrea (apeacox) Pavoni, http://d-bricks.com
  For more information, please visit http://github.com/apeacox/gallerizer-jquery-plugin
  Released under a MIT License
  Date: 2009/12/21
*/

jQuery.fn.gallerize = function(photos, options) {
  settings = jQuery.extend({
    fade_speed: 1500, // fading in/out speed
    start_at: 1, // position in photos array from which to start the slideshow
    delay: 5000 // delay from each fade
  }, options);

  jQuery.fn.show_next = function(index) {
    return $(this).fadeOut(settings.fade_speed, function () {
      $(this).attr('src', photos[index]);
      $(this).fadeIn(settings.fade_speed);
    });
  };

  jQuery.repeat = function(callback) {
    return window.setInterval(callback,settings.delay);
  }

  counter = settings.start_at;
  
  if (photos.length > 1) {
    var obj = $(this);
    jQuery.repeat(function() {
      index = ((counter == photos.length) ? counter = 0 : counter++);
      obj.show_next(index);
    });
  }
};

