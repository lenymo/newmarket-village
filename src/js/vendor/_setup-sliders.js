

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
      container: '.slider',
      items: 3,
      slideBy: 'page',
      autoplay: true
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
