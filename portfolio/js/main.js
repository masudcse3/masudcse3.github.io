$(document).ready(function(){
    $("#all").click(function(){
        $(".all").show(1000);
        
    });
	$("#wordpress").click(function(){
        $(".psd-img").hide(1000);
        $(".wordpress-img").show(1000);
        
    });
    $("#psd").click(function(){
        $(".wordpress-img").hide(1000);
        $(".psd-img").show(1000);
        
    });
    
    
    $(".main-menu").slicknav({
        label: '',
        
        
    });
    
    
	$(".container").fitVids();
    $(".tesimonial-carousel").owlCarousel({
        items: 2,
        itemsDesktop:	[1199,2],
        itemsMobile:	[479,1],
        autoPlay: true,
        stopOnHove: true,
        slideSpeed: 1000
        
        
    });
    $("#slider").owlCarousel({
        pagination: false,
        singleItem:true,
        navigation: true,
        navigationText:	["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        autoPlay: true,
        slideSpeed: 1000,
    });
    $("#test-carousel").owlCarousel({
       
        singleItem:true,
        autoPlay: true,
        pagination: false,
		navigation: false,
    });
    $(function(){
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '500', // Distance from top before showing element (px)
            topSpeed: 800, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 500, // Animation in speed (ms)
            animationOutSpeed: 500, // Animation out speed (ms)
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'  
        });
        });
    $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
   
   
});