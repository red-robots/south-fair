/**
 *	Custom jQuery Scripts
 *	Developed by: Lisa DeBona
 *  Date Modified: 04.18.2024
 */

jQuery(document).ready(function ($) {

  $(document).on('click','#menu-toggle', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('#site-navigation').toggleClass('active');
    $('.navOverlay').toggleClass('show');
    $('body').toggleClass('mobile-nav-active');
  });
  $(document).on('click','body.mobile-nav-active .navOverlay', function(e){
    e.preventDefault();
    $('#menu-toggle').trigger('click');
  });

}); 



