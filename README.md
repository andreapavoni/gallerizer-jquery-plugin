Gallerizer jQuery Plugin v0.1.1
-------------------------------
Copyright (c) 2009 Andrea Pavoni. Licensed under the MIT license.
 

Overview
--------

A jQuery plugin that generates a simple crossfade slideshow.

Requires:
  - jQuery 1.3.2 (http://www.jquery.com)
	- jQuery.timers 1.2 (http://plugins.jquery.com/project/timers)

Usage
-----
// Step 1 - Include above requirements in your document

// Step 2 - Create an array of image filenames

`var photos = new Array('photo1.png','another_photo.png','photo_etc.png');`

// Step 3 - Start gallerize on a img element (selected by CSS class or id)
`$(document).ready(function() {
  $('#gallerize-item').gallerize($photos);
});`

// Step 3b - You can even set some options:
`$('#gallerize-item').gallerize($photos,{
  fade_speed: 1500, // fading in/out speed
  start_at: 1, // position in the array of photos from which to start
  delay: 5000 // delay beetween each image
});`

Changelog:
  - 2009/12/15 v0.1.1:   fix: if you have only one image, don't start gallerize()
  - 2009/12/14 v0.1: first initial release

