

//
//  TOGGLE SEARCH
//––––––––––––––––––––––––––––––––––––––––––––––––––

var ToggleHeaderSearch = (function() {


  //
  //  CONFIG
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  var config = {
    searchToggleClass: '-search-is-open'
  };


  //
  //  TOGGLE SEARCH
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function toggleHeaderSearch() {

    // Code goes here.
    var headerSearchInput = document.querySelector('.header-search__input');

    // If the search input exists.
    if ( headerSearchInput ) {

      // Listen for the focus event.
      headerSearchInput.addEventListener('focus', showSearch, false);

      // Listen for the blue event.
      headerSearchInput.addEventListener('blur', hideSearch, false);
    }
  }


  //
  //  SHOW SEARCH
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function showSearch( e ) {
    
    // Get the body elem.    
    var bodyElem = document.querySelector('body');

    bodyElem.classList.add( config.searchToggleClass );
  }


  //
  //  HIDE SEARCH
  //––––––––––––––––––––––––––––––––––––––––––––––––––
  
  function hideSearch( e ) {

    // Get the body elem.
    var bodyElem = document.querySelector('body');

    bodyElem.classList.remove( config.searchToggleClass );
  }


  //
  //  INIT
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  function init() {
    toggleHeaderSearch();
  }


  //
  //  RETURN
  //––––––––––––––––––––––––––––––––––––––––––––––––––

  return {
    init: init
  };

})();
