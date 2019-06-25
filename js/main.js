$(function() {
	$(document).ready(function () {
			$(window).scroll(function (){
				if($(document).scrollTop() > 150 ) {
					$('.navbar').addClass('shrink');
				} else {
					$('.navbar').removeClass('shrink');
				}
			})
		});
	//b-navbar smotth scroll and active link
	$(document).ready(function (){
			var scrollLink = $('.scroll');
			// smooth scroll
			scrollLink.click(function (e){
				e.preventDefault();
				$('body,html').animate({
					scrollTop: $(this.hash).offset().top
				}, 1000);
			});
		});
	//
	 $(window).scroll(function(){
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });
    });
  // previos work
  //mixitup plugin
	var mixer = mixitup('.main', {
         selectors: {
            control: '[data-mixitup-control]',
          }
     });
	  /* start gallery */
     $('.view').magnificPopup({

    type: 'image',
     gallery: {
      enabled: true
    },
  });
 $(".grids li").click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    });
		//COUNTER UP
	$(".counterup").counterUp({
        delay: 1,
        time: 1000
     	});

			//start testimonial
			$(document).ready(function(){
    $("#testimonials-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:false
    });
	});

	//start testimonials blogs
	$(document).ready(function(){
		$("#blogs-slider").owlCarousel({
				items:3,
				itemsDesktop:[1000,3],
				itemsDesktopSmall:[979,2],
				itemsTablet:[768,2],
				itemsMobile:[650,1],
				pagination:true,
				autoPlay:false
		});
	});
	//buton up
	var scrollButton = $("#scroll-top");
  $(window).scroll(function()
     {
       $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });
          // click on button scroll
      scrollButton.click(function()
      {
          $("html,body").animate({scrollTop: 0}, 600);
      });
			//2-aside work
			var aside = document.getElementById('mainAside');
		var asideOn = false
		document.getElementById('icon').addEventListener('click', function (){
			if(asideOn) {
				aside.style.right = '-400px';
				asideOn = false;
			}else {
				aside.style.right = '15px';
				asideOn = true ;
			}
		});
		//
		$('#icon').click(function(){
	    	$('#icon').toggleClass('active');
	    });

});
