

//
//  SLIDERS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Uses smooth scroll.
// https://github.com/ganlanyuan/tiny-slider

var SetupSliders = (function() {


  //
  //  SETUP SLIDERS
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupSliders() {

    // Instantiate variables.
    var sliders = document.querySelectorAll('.tiny-slider');
    var slidersArr = [];
    var sliderConfig = {};
    var slider;
    var sliderName;
    var sliderContainerClassName;
    var sliderControlsClassName;

    // If there are sliders.
    if ( sliders.length > 0 ) {

      // Loop through all sliders.
      for ( var i = 0; i < sliders.length; i++ ) {

        // Get this slider.
        slider = sliders[i];

        // Get the slider name.
        sliderName = slider.dataset.sliderName;

        // Build class names for container and controls.
        sliderContainerClassName = '.tiny-slider--' + sliderName;
        sliderControlsClassName = '.tiny-slider__controls--' + sliderName;

        // Build the slider config.
        sliderConfig = {
          container: sliderContainerClassName,
          controlsContainer: sliderControlsClassName,
          items: 1,
          slideBy: 'page',
          mouseDrag: true,
          edgePadding: 30,
          nav: false,
          speed: 600,
          responsive: {
            992: {
              edgePadding: 60
            },
            1200: {
              edgePadding: 120
            }
          }
        };

        slidersArr[i] = tns( sliderConfig );
      }
    }
  }


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    setupSliders();
  }


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    init: init
  };

})();
