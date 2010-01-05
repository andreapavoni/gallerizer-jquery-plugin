/*
  jQuery.Gallerizer 0.3
  Written by Andrea (apeacox) Pavoni, http://d-bricks.com
  For more information, please visit http://github.com/apeacox/gallerizer-jquery-plugin
  Released under a MIT License
  Date: 2010/01/05
*/

jQuery.fn.gallerize = function(photos, options) {
  settings = jQuery.extend({
    fade_speed: 1500, // fading in/out speed
    start_at: 1, // position in photos array from which to start the slideshow
    delay: 2900, // delay from each fade, don't go below 2500 because has *unpredictable* image order
    autostart: true // should it auto-start on page load?
  }, options);

  var started = settings.autostart;
  var counter = settings.start_at;
  var obj = $(this);

  
  $('#gz_start_stop').click(function() { started = (started) ? false : true ; });

  $('#gz_next').click(function() {
    counter++;
    if (counter == photos.length) { counter = 0; }
    obj.show_next(counter);  
  });

  $('#gz_prev').click(function() {
    counter--;
    if (counter < 0) { counter = (photos.length-1); }
    obj.show_next(counter);
  });
  
  jQuery.fn.show_next = function(index) {
    return $(this).fadeOut(settings.fade_speed, function () {
      $(this).attr('src', photos[index]);
      $(this).fadeIn(settings.fade_speed);
    });
  };

  jQuery.repeat = function(callback,delay) {
    return window.setInterval(callback, delay);
  }

  jQuery.main_loop = function(obj) {
    if (photos.length > 1) {
      jQuery.repeat(function() {
        if (started) {
          if (++counter == photos.length) { counter = 0 };
          obj.show_next(counter);
        }
      },settings.delay);
    }
  }

  //this should be the last line to manage the infinite loop
  jQuery.main_loop($(this));
};

