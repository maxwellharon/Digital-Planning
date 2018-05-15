$(document).ready(function(){

	$('.menutoggle').on('click', function() {
		$(this).parent().toggleClass('active');
		$(this).parent().find('.menu').stop(1,1).fadeToggle();
	});

	$('.homeslider').flexslider({
	    animation: "fade",
	    directionNav: false,
	    controlNav: false,
	    slideshowSpeed: 5000,
	    animationSpeed: 3000
	});

	$('.blogslider').flexslider({
	    slideshowSpeed: 5000,
	    animationSpeed: 500
	});

	$('.supplierpics').flexslider({
	    slideshowSpeed: 5000,
	    animationSpeed: 500
	});

	$('.blog-home .column').hover(
		function() {
			$(this).find('.excerpt').stop(1,1).slideDown();
		},
		function() {
			$(this).find('.excerpt').stop(1,1).slideUp();
		}
	);

	$('.blog .column').hover(
		function() {
			$(this).find('.excerpt').stop(1,1).slideDown();
		},
		function() {
			$(this).find('.excerpt').stop(1,1).slideUp();
		}
	);

	$(".close-popup").on("click", function(){
		$(this).parent().slideUp();
		$(".overlay").delay(500).fadeOut();
	});


	$('#accordion').find('.accordion-toggle').click(function(){

		//Expand or collapse this panel
		$(this).next().slideToggle('fast');
		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp('fast');

	});

	$(".icon").on('click', function(){
		$(".login-menu").slideToggle("fast");
	});
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("header").addClass("small");
    } else {
        $("header").removeClass("small");
    }

    //fade blog header
    pxlCount = $(document).scrollTop()/20;
    $(".blog-article .picture img").css({
    	"-webkit-filter": "blur("+pxlCount+"px)",
    	"-moz-filter": "blur("+pxlCount+"px)",
    	"filter": "blur("+pxlCount+"px)" 
    })
});

function showSignup(){
	$(".overlay").fadeIn("fast");
	$("#login").slideUp("fast");
	$("#sign-up").delay(200).slideDown("fast");
} 

function hideSignup(){
	$("#sign-up").slideUp("fast");
	$(".overlay").delay(200).fadeOut("fast");
}
function showLogin(){
	$(".overlay").fadeIn("fast");
	$("#sign-up").slideUp("fast");
	$("#login").delay(200).slideDown("fast");
} 
function hideLogin(){
	$("#login").slideUp("fast");
	$(".overlay").delay(200).fadeOut("fast");
} 
function showCreateEvent(){
	$(".overlay").fadeIn("fast");
	$("#create-event").delay(200).slideDown("fast");
} 

function hideCreateEvent(){
	$("#create-event").slideUp("fast");
	$(".overlay").delay(200).fadeOut("fast");
} 