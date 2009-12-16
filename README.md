Gallerizer jQuery Plugin v0.1.1
-------------------------------
Copyright (c) 2009 Andrea Pavoni. Licensed under the MIT license.
 

Overview
--------

A jQuery plugin that generates a simple crossfade slideshow.

__Requires:__

   * jQuery 1.3.2 (http://www.jquery.com)
   * jQuery.timers 1.2 (http://plugins.jquery.com/project/timers)

Usage
-----
__Step 1__ - Include above requirements in your document

__Step 2__ - Create an array of image filenames

`var photos = new Array('photo1.png','another_photo.png','photo_etc.png');`

__Step 3__ - Start gallerize on a img element (selected by CSS class or id)

`$(document).ready(function() {
  $('#gallerize-item').gallerize($photos);
});`

__Step 3b__ - You can even set some options:

`$('#gallerize-item').gallerize($photos,{  
     fade_speed: 1500, // fading in/out speed  
     start_at: 1, // position in the array of photos from which to start  
     delay: 5000 // delay beetween each image  
});`

Changelog:
---------

*   __2009/12/15 v0.1.1:__
   *   fix: if you have only one image, don't start gallerize()
*   __2009/12/14 v0.1:__
   *   first initial release
