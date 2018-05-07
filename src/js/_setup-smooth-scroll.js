

//
//  SMOOTH SCROLL
//––––––––––––––––––––––––––––––––––––––––––––––––––

var SetupSmoothScroll = (function() {  


  //
  //  SMOOTH SCROLL
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function setupSmoothScroll() {

    // Smoothly scroll to all anchors.
    var scroll = new SmoothScroll('a[href*="#"]');
  }  


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    setupSmoothScroll();
  }


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    init: init
  };

})();
