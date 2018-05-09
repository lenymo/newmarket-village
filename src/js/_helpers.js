

//
//  HELPERS
//––––––––––––––––––––––––––––––––––––––––––––––––––

var Helpers = (function() {


  //
  //  GET VIEWPORT WIDTH
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function getViewportWidth() {

    // Get viewport width.
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    return w;

  } // getViewportWidth()


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    getViewportWidth: getViewportWidth,
  };

})();
