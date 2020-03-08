$(function() {
  // $('#preloader').fadeOut('slow', function() {
  //   $(this).remove();
  // });

  // popup();
  // slick();
    burger();
    // search();
    $( window ).resize(function() {
        const menuBtn = document.querySelector('.nav__btn');
        menuBtn.remove();
        if ( $(window).width() < 993) {
            document.querySelector('.nav__menu').appendChild(menuBtn);
        }else {
            document.querySelector('.nav').appendChild(menuBtn);
        }
    })
});
