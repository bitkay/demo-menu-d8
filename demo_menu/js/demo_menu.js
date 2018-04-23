jQuery( document ).ready(function($) {
  $('html').addClass('js');

  // Bartik-specific #page-wrapper call. Should be changed to match a real installation's elements.
  $('#page-wrapper').click(function(e) {
    // If we're clicking outside of the menu while it's open,
    // close the menu and its open submenu(s)
    if($('html').hasClass('menu-open')) {
      $('html, #demo-menu').removeClass('menu-open');
      $('#demo-menu').find('.submenu-open').removeClass('submenu-open');
    }
  });

  // When the "Menu" open/close link is clicked,
  // open/close the menu and its open submenu(s)
  $('#demo-menu #demo-menu-button-oc').click(function(e) {
    e.preventDefault();
    $('html, #demo-menu').toggleClass('menu-open');
    $('#demo-menu #demo-menu-nav .menu li.menu-item--expanded').removeClass('submenu-open');
  });

  // For JS users only, clone the first-level link and add the Back link for submenus
  $.each($('#demo-menu #demo-menu-nav .menu li.menu-item--expanded'), function() {
    $(this).find('.menu').prepend($(this).find('> a').clone());
    $(this).find('.menu > a').wrap('<li class="menu-item"></li>')
  });
  $('#demo-menu #demo-menu-nav .menu li.menu-item--expanded .menu').prepend('<a href="#" class="submenu-close">Back</a>');

  // When a top-level link is clicked, open its submenu
  $('#demo-menu #demo-menu-nav .menu li.menu-item--expanded > a').click(function(e) {
    if ($(window).width() < 1024) {
      e.preventDefault();
      $('#demo-menu #demo-menu-nav').toggleClass('submenu-open');
      $(this).parent().toggleClass('submenu-open');
      setTimeout(function() {
        $(this).parent().find('.submenu-close').focus();
      }, 300);
    }
  });

  // When the submenu link is closed... close the submenu.
  $('.submenu-close').click(function(e) {
    $('#demo-menu #demo-menu-nav').toggleClass('submenu-open');
    $('#demo-menu').find('.submenu-open').removeClass('submenu-open');
  });

  // Adding a focus state to the menu open/close link for accessibility
  $('#demo-menu #demo-menu-button-oc, .submenu-close').focus(function() {
    $(this).css('border-style','solid');
  }).blur(function() {
    $(this).css('border-style','none');
  });
});
