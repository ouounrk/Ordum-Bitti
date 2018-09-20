$(document).ready(function() {

    /*Sticky navigation*/

    $('.js--ozellikler').waypoint(function(direction) {
        if(direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
      });

    /*Buttons*/

    $('.js--scroll-to-photos').click(function () {
        $('html,body').animate({scrollTop: $('.js--photos').offset().top}, 1000)
    });

    $('.js--scroll-to-form').click(function () {
        $('html,body').animate({scrollTop: $('.js--form').offset().top}, 1000)
    });

    /*Navigation Scroll*/

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); 
        };
      });
    }
  }
});

    /*Scroll Animations*/
  
    $('.js--animation').waypoint(function(direction) {
        $('.js--animation').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

/*Mobile Nav*/

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('js--nav-icon i')
        nav.slideToggle(200);
    });

});

 