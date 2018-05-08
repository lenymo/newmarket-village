

//
//  SLIDERS
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Uses smooth scroll.
// https://github.com/ganlanyuan/tiny-slider

var SetupSliders = (function() {  


  //
  //  SMOOTH SCROLL
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupSliders() {

    // Smoothly scroll to all anchors.
    var slider = tns({
      container: '.tiny-slider',
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      edgePadding: 30,
    });
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
