

//
//  PARALLAX
//––––––––––––––––––––––––––––––––––––––––––––––––––

// Uses rellax.js
// https://github.com/dixonandmoe/rellax

var SetupParallax = (function() {  


  //
  //  SMOOTH SCROLL
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupParallax() {

    // Smoothly scroll to all anchors.
    var rellax = new Rellax('.-has-parallax');
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
