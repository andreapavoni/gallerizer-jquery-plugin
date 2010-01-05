Gallerizer jQuery Plugin v0.3
-------------------------------
Copyright (c) 2009-2010 Andrea Pavoni. Licensed under the MIT license.
 

Overview
--------

A jQuery plugin that generates a simple crossfade slideshow.

__Requires:__

   * jQuery 1.3.2 (http://www.jquery.com)

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

     $('#gallerize-item').gallerize($photos,{  
     fade_speed: 1500, // fading in/out speed  
     start_at: 1, // position in the array of photos from which to start  
     delay: 5000, // delay from each fade, don't go below 2500 because has *unpredictable* image order
     autostart: true
     });

Changelog:
---------
*   __2010/01/05 v0.3:__
    *   new: added support for control-buttons (prev,next,start_stop). see examples/demo.html
*   __2009/12/21 v0.2:__
    *   new: internal timer, no more jquery.timers dependency
*   __2009/12/15 v0.1.1:__
    *   fix: if you have only one image, don't start gallerize()
*   __2009/12/14 v0.1:__
    *   first initial release
