"use strict";

(function () {
  tinymce.PluginManager.add('checklistbutton', function (editor, url) {
    //console.log(url);
    var parts = url.split('assets');
    var themeURL = parts[0]; // Add Button to Visual Editor Toolbar

    editor.addButton('custom_class', {
      title: 'Checklist',
      cmd: 'custom_class',
      image: themeURL + 'assets/img/checklist.png'
    }); // Add Command when Button Clicked

    editor.addCommand('custom_class', function () {
      //alert('Button clicked!');
      // var selected_text = editor.selection.getContent({
      //   'format': 'html'
      // });
      var selected_text = editor.selection.getContent();

      if (selected_text.length === 0) {
        alert('Please select some text.');
        return;
      }

      var open_column = '<div class="ChecklistWrap">';
      var close_column = '</div>';
      var return_text = '';
      return_text = open_column + selected_text + close_column;
      editor.execCommand('mceReplaceContent', false, return_text);
      return; //var selected_text = editor.selection.getContent();
      // var selected_text = editor.selection.getContent({
      //   'format': 'html'
      // });
      // var return_text = '';
      // return_text = '<span class="dropcap">' + selected_text + '</span>';
      // editor.execCommand('mceInsertContent', 0, return_text);
    });
  });
})();
"use strict";

/**
 *	Custom jQuery Scripts
 *	Developed by: Lisa DeBona
 *  Date Modified: 04.18.2024
 */
jQuery(document).ready(function ($) {
  $(document).on('click', '#menu-toggle', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('#site-navigation').toggleClass('active');
    $('.navOverlay').toggleClass('show');
    $('body').toggleClass('mobile-nav-active');
  });
  $(document).on('click', 'body.mobile-nav-active .navOverlay', function (e) {
    e.preventDefault();
    $('#menu-toggle').trigger('click');
  }); //About > Team section

  $(document).on('click', '.popupinfo', function (e) {
    e.preventDefault();
    var d = new Date();
    var pagelink = $(this).attr('data-link');
    $('body').addClass('modal-open');
    $('#loaderContainer').addClass('show');
    $('#popupContent').load(pagelink + '?t=' + d.getTime() + ' #main .team-info', function () {
      setTimeout(function () {
        $('.popupContainer').addClass('show');
        $('#loaderContainer').removeClass('show');
      }, 600);
    });
  });
  $(document).on('click', '.close-popup', function (e) {
    hidePopUp();
  });
  $(document).on('keydown', function (e) {
    //Escape key
    if (e.keyCode == 27) {
      if ($('.popupContainer.show').length) {
        hidePopUp();
      }
    }
  });

  function hidePopUp() {
    $('.popupContainer .popupInner').removeClass('fadeInDown').addClass('zoomOut');
    setTimeout(function () {
      $('.popupContainer').removeClass('show');
      $('.popupContainer .popupInner').removeClass('zoomOut').addClass('fadeInDown');
    }, 600);
  }
});