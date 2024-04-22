/**
 *	Custom jQuery Scripts
 *	Developed by: Lisa DeBona
 *  Date Modified: 04.18.2024
 */

jQuery(document).ready(function ($) {
 

  Fancybox.bind("[data-fancybox]", {
    // Custom options
  });

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


  //About > Team section
  $(document).on('click','.popupinfo', function(e){
    e.preventDefault();
    var d = new Date();
    var pagelink = $(this).attr('data-link');
    $('body').addClass('modal-open');
    $('#loaderContainer').addClass('show');
    $('#popupContent').load(pagelink+'?t='+d.getTime()+' #main .team-info', function(){
      setTimeout(function(){
        $('.popupContainer').addClass('show');
        $('#loaderContainer').removeClass('show');
      },600);
    });
  });

  $(document).on('click','.close-popup', function(e){
    hidePopUp();
  });

  $(document).on('keydown', function(e){
    //Escape key
    if(e.keyCode==27) {
      if( $('.popupContainer.show').length ) {
        hidePopUp();
      }
    }
  });

  function hidePopUp() {
    $('.popupContainer .popupInner').removeClass('fadeInDown').addClass('zoomOut');
    setTimeout(function(){
      $('.popupContainer').removeClass('show');
      $('.popupContainer .popupInner').removeClass('zoomOut').addClass('fadeInDown');
    },600);
  }

}); 



