/*!
* ChickenDinner 1.0
* Copyright 2014, Stephen Scaff - http://sosweetcreative.com 
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/

(function() {
  const chickenDinner = {
      defaults: {
          altTag: ['preview'],
          fadeInTime: 180,
          TheImages: ['1.png', '2.png', '3.png', '4.png']
      },
      init: function(element, options) {
          const settings = { ...this.defaults, ...options };
          const TheImages = settings.TheImages;
          const RandomMath = Math.floor(Math.random() * TheImages.length);
          const SelectedImage = TheImages[RandomMath];
          const imgPath = settings.path + SelectedImage;
          const altTag = settings.altTag;

          // Fade in animation - hide first
          element.style.opacity = 0;
          element.style.display = 'block';

          if (settings.cssBG === 'true') {
              element.style.backgroundImage = `url(${imgPath})`;
          } else {
              element.src = imgPath;
              element.alt = altTag;
          }

          // Fade in effect
          let opacity = 0;
          const fadeInInterval = setInterval(() => {
              opacity += 0.05;
              if (opacity >= 1) {
                  clearInterval(fadeInInterval);
                  opacity = 1;
              }
              element.style.opacity = opacity;
          }, settings.fadeInTime / 20);
      }
  };

  // Helper function to select elements and apply chickenDinner
  function applyChickenDinner(selector, options) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => chickenDinner.init(element, options));
  }

  // Example usage
  applyChickenDinner('.somic', {
      path: 'assets/img/',
      altTag: 'NT Somic Preview',
      TheImages: ['somic1.svg', 'somic2.svg', 'somic3.svg', 'somic4.svg']
  });

  applyChickenDinner('.sakharov', {
      path: 'assets/img/',
      altTag: 'NT Sakharov Preview',
      TheImages: ['sakharov1.svg', 'sakharov2.svg', 'sakharov3.svg', 'sakharov4.svg']
  });

  applyChickenDinner('.vela', {
      path: 'assets/img/',
      altTag: 'NT Vela Preview',
      TheImages: ['vela1.svg', 'vela2.svg', 'vela3.svg', 'vela4.svg']
  });

  applyChickenDinner('.lucent', {
      path: 'assets/img/',
      altTag: 'NT Lucent Preview',
      TheImages: ['lucent1.svg', 'lucent2.svg', 'lucent3.svg', 'lucent4.svg']
  });

  applyChickenDinner('.monyl', {
      path: 'assets/img/',
      altTag: 'NT Monyl Preview',
      TheImages: ['monyl1.svg', 'monyl2.svg', 'monyl3.svg', 'monyl4.svg']
  });

  applyChickenDinner('.nurture', {
      path: 'assets/img/',
      altTag: 'NT Nurture Preview',
      TheImages: ['nurture1.svg', 'nurture2.svg', 'nurture3.svg', 'nurture4.svg']
  });

  applyChickenDinner('.signs', {
      path: 'assets/img/',
      altTag: 'NT Signs Preview',
      TheImages: ['signs1.svg', 'signs2.svg', 'signs3.svg', 'signs4.svg']
  });

  applyChickenDinner('.mechanic', {
      path: 'assets/img/',
      altTag: 'NT Mechanic Preview',
      TheImages: ['mechanic1.svg', 'mechanic2.svg', 'mechanic3.svg', 'mechanic4.svg']
  });

  applyChickenDinner('.eucomis', {
      path: 'assets/img/',
      altTag: 'NT Eucomis Preview',
      TheImages: ['eucomis1.svg', 'eucomis2.svg', 'eucomis3.svg', 'eucomis4.svg']
  });

  applyChickenDinner('.temno', {
      path: 'assets/img/',
      altTag: 'NT Temno Preview',
      TheImages: ['temno1.svg', 'temno2.svg', 'temno3.svg', 'temno4.svg']
  });
})();