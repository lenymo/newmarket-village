

//
//  HELPERS
//––––––––––––––––––––––––––––––––––––––––––––––––––

var Helpers = (function() {


  //
  //  GET VIEWPORT WIDTH
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function getViewportWidth() {

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return w;

  } // getViewportWidth()

  return {
    getViewportWidth: getViewportWidth,
  };

})();
