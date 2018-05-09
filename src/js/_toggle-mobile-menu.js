

//
//  TOGGLE MOBILE MENU
//––––––––––––––––––––––––––––––––––––––––––––––––––

var ToggleMobileMenu = (function() {


  //
  //  CONFIG
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  var config = {
    siteNavOpenClass: '-menu-is-toggled'
  };
  


  //
  //  TOGGLE MOBILE MENU
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function toggleMobileMenu() {

    var siteNavToggle = document.querySelector('.site-nav-toggle');

    // If the site nav toggle exists.
    if ( siteNavToggle ) {

      // Listen for clicks on the menu toggle.
      siteNavToggle.addEventListener('click', toggleSiteNav, false);
    }


    //
    //  TOGGLE SITE NAV
    //––––––––––––––––––––––––––––––––––––––––––––––––––

    function toggleSiteNav() {

      var siteNavOpenClass = config.siteNavOpenClass;
      var siteNavOpenFlag = false;

      // Get body element and its classes.
      var bodyElem = document.querySelector('body');
      var bodyElemClasses = bodyElem.classList;

      // Loop though all classes on the body element.
      for (var i = 0; i < bodyElemClasses.length; i++) {
        
        // If the menu open class is on the body.
        if ( bodyElemClasses[i] == siteNavOpenClass ) {
          
          // Set nav flag to open.
          siteNavOpenFlag = true;

          // Break out of the loop.
          break;
        }
      }

      // If the menu is open.
      if ( siteNavOpenFlag ) {

        // Close the menu.
        bodyElem.classList.remove(siteNavOpenClass);

      // If the menu is closed.
      } else {

        // Open the menu.
        bodyElem.className += ' ' + siteNavOpenClass;
      }
    }
  }


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    toggleMobileMenu();
  }


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    init: init
  };

})();
