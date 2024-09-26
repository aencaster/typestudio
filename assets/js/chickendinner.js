/*!
* ChickenDinner 1.0
* Copyright 2014, Stephen Scaff - http://sosweetcreative.com 
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* USEAGE 
* For img tags
 =====================

*
* For Background Images
* =======================
* $('.js-chickendinner-bg').chickenDinner({
*    path: 'images/',
*    fadeInTime:2000,
*    cssBG: 'true',
*    TheImages: ['banner2.png', 'banner3.png','banner4.png','banner5.png','banner1.png']
* });
*/

(function($){
  $.chickenDinner = {
    defaults: {
      altTag: ['preview'],
      fadeInTime:180,
      TheImages: ['1.png', '2.png', '3.png', '4.png']
    }
  };
  
  $.fn.extend({
    chickenDinner:function(options) {
      $.extend({}, $.chickenDinner.defaults, options);
      return this.each(function() {
        var TheImages = options.TheImages;
        var RandomMath = Math.floor(Math.random()*TheImages.length);
        var SelectedImage = TheImages[RandomMath];
        var imgPath = options.path + SelectedImage;
        var altTag = options.altTag;
        // Fade in Times
        var fadeInTime = options.fadeInTime;
        //Fade In animation - hide first
        $(this).css('display', 'none').fadeIn(fadeInTime);
        if(options.cssBG == 'true'){
          $(this).css('background-image', 'url(' + imgPath + ')');
        } else{
          $(this).attr( {
            src: imgPath,
            alt: altTag
          });
        }
      });
    }
  });

  $('.somic').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Somic Preview',
    TheImages: ['somic1.svg','somic2.svg','somic3.svg','somic4.svg']
  });

  $('.sakharov').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Sakharov Preview',
    TheImages: ['sakharov1.svg','sakharov2.svg','sakharov3.svg','sakharov4.svg']
  });

  $('.vela').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Vela Preview',
    TheImages: ['vela1.svg','vela2.svg','vela3.svg','vela4.svg']
  });

  $('.lucent').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Lucent Preview',
    TheImages: ['lucent1.svg','lucent2.svg','lucent3.svg','lucent4.svg']
  });

  $('.monyl').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Monyl Preview',
    TheImages: ['monyl1.svg','monyl2.svg','monyl3.svg','monyl4.svg']
  });

  $('.nurture').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Nurture Preview',
    TheImages: ['nurture1.svg','nurture2.svg','nurture3.svg','nurture4.svg']
  });

  $('.signs').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Signs Preview',
    TheImages: ['signs1.svg','signs2.svg','signs3.svg','signs4.svg']
  });

  $('.mechanic').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Mechanic Preview',
    TheImages: ['mechanic1.svg','mechanic2.svg','mechanic3.svg','mechanic4.svg']
  });

  $('.eucomis').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Eucomis Preview',
    TheImages: ['eucomis1.svg','eucomis2.svg','eucomis3.svg','eucomis4.svg']
  });

  $('.temno').chickenDinner({
    path: 'assets/img/',
    altTag: 'NT Temno Preview',
    TheImages: ['temno1.svg','temno2.svg','temno3.svg','temno4.svg']
  });

})(jQuery);
