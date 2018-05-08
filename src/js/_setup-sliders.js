

//
//  SLIDERS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Uses smooth scroll.
// https://github.com/ganlanyuan/tiny-slider

var SetupSliders = (function() {


  //
  //  CONFIG
  //––––––––––––––––––––––––––––––––––––––––––––––––––
  
  var config = {
    slider: {
      container: '.tiny-slider',
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      edgePadding: 30,
      nav: false
    }
  };


  //
  //  SMOOTH SCROLL
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupSliders() {

    // Smoothly scroll to all anchors.
    var slider = tns( config.slider );
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
