(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed>nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// $(document).scroll(function() {
//   var y = $(this).scrollTop();
//   if (y > 400) {
//     $('#icon1').addClass('appear');
//   } else {
//     $('#icon1').removeClass('appear');;
//   }
// });

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            let bottom_of_object = $(this).position().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
				$(this).addClass(`animated fadeInUp`)
                    
            }
            
        }); 
    
    });
    
});

