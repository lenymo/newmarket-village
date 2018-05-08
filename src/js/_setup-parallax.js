

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
  //  PARALLAX
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupParallax() {

    // Get viewport width.
    var w = Helpers.getViewportWidth();

    // If viewport is wide enough.
    if ( w >= config.onlyRunAbove ) {

      // Initialise Rellax.
      var rellax = new Rellax('.-has-parallax');
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
