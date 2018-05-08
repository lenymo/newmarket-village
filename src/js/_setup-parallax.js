

//
//  PARALLAX
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Uses rellax.js
// https://github.com/dixonandmoe/rellax

var SetupParallax = (function() {  


  //
  //  CONFIG
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  var config = {
    onlyRunAbove: 768
  };
  

  //
  //  SMOOTH SCROLL
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupParallax() {

    // Get viewport width.
    var w = Helpers.getViewportWidth();

    // If viewport is wide enough.
    if ( w >= config.onlyRunAbove ) {

      // Smoothly scroll to all anchors.
      var rellax = new Rellax('.-has-parallax', {
        // center: true
      });
    }
  }  


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    setupParallax();
  }


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    init: init
  };

})();
