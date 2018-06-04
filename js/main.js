/*
 * Auto-generated content from the Brackets New Project extension.  Enjoy!
 */
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.navbar');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background', 'rgba(0, 0, 0, 0.9)');
          $('.navbar').css('padding','5px');
       } else {
          $('.navbar').css('background-color', 'transparent');
           $('.navbar').css('padding','20px');
       }
   });
});

document.getElementById("demo").innerHTML = Date();


$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
        
    });
});


