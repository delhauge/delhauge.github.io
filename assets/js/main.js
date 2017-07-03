/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function() {
	"use strict";
	/* global google: false */

    /* ==============================================
        Full height home-section
    =============================================== */

        var windowHeight = $(window).height(),
              topSection = $('#hero-section'),
              headerHeight = $(".navbar").outerHeight(),
              calculatedHeight = windowHeight - headerHeight;
        topSection.css('height', calculatedHeight);

        $(window).resize(function(){
            var windowHeight = $(window).height(),
          headerHeight = $(".navbar").outerHeight(),
          calculatedHeight = windowHeight - headerHeight;
          topSection.css('height', calculatedHeight);
        });

    /* ==============================================
        Hero slider
    =============================================== */

        $('#slides').superslides({
            play: 10000,
            animation_speed: 800,
            pagination: true,
            navigation: false,
            animation: 'fade'
        });

        // BACKGROUND VIDEOS
        // On page load or slide change STOP/PAUSE all videos and START playing video on current slide
        /*$(this).on('animated.slides', function() {
                console.log('Slide swtich');
                 // get current slide using superslides API current
                 var currentSlideIndex = $('#slides').superslides('current');
                 console.log("Current slide index: " + currentSlideIndex);
                 //var currentSlide = $('.slides-container > li')[currentSlideIndex];
                // pause all videos
                //$("video").each(function () { this.load(); });
                // if there is a video on current slide, play it
                //$("video")[currentSlideIndex].load();
                $("video")[currentSlideIndex].currentTime = 0;
                $("video")[currentSlideIndex].play();
        });*/

        $(window).load(function() {
            $("video").each(function () { this.play(); });
        });

        /*$(window).load(function() {
                 // get current slide using superslides API current
                 var currentSlideIndex = $('#slides').superslides('current');
                 //var currentSlide = $('.slides-container > li')[currentSlideIndex];
                var currentSlide = $('.slides-container')[currentSlideIndex];
                // pause all videos
                $("video").each(function () { this.pause(); });
                // if there is a video on current slide, play it
                var currentVid = $(currentSlide).find("video")[0];
                if ($(currentVid).length) {
                    $(currentVid)[0].oncanplaythrough = $(currentVid)[0].play();
                }
        }); */

    /* ==============================================
    superslider swipe on mobile devices
    =============================================== */

        $('#slides').swipe( {
            swipeLeft:function() {
                $(this).superslides('animate', 'next');
            },

            swiperight:function() {
                $(this).superslides('animate', 'prev');
            }
        });

    /* ==============================================
        Smooth Scroll on anchors
    =============================================== */


        $('.one-page-nav').find('a').addClass('section-scroll');

        $('.section-scroll').on('click', function(e) {
            var anchor = $(this),
                anchorAttr = anchor.attr('href');

            $('html, body').animate({
                scrollTop: $(anchorAttr).offset().top -62
            }, 1000);

            e.preventDefault();
        });


    /* ==============================================
        Collapse menu on click
    =============================================== */

        $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
            if($(window).width() < 768 )
                $('.navbar-collapse').collapse('hide');
        });

    /* ==============================================
        Scrollspy
    =============================================== */

        $('body').scrollspy({
           target: '#navigation-nav',
           offset: 140      //px/
        });

    /* ==============================================
        Parallax
    =============================================== */

        $.stellar({
            responsive: true,
            horizontalScrolling: false,
            verticalOffset: 0
        });

    /* ==============================================
        BxSlider Testimonial
    =============================================== */

        $(".testimonials-slider").bxSlider({
            auto: true,          // Boolean:  (true/false)
            pause: 5000,         // Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
            adaptiveHeight: true,
            controls: false,
            useCSS: false        // Boolean:  (true/false)
        });

    /* ==============================================
        Counter increment
    =============================================== */

        function countUp() {
            var dataperc;
            $('.statistic-percent').each(function(){
                dataperc = $(this).attr('data-perc'),
                $(this).find('.percentfactor').delay(6000).countTo({
                    from: 0,                 // number to begin counting
                    to: dataperc,
                    speed: 1000,             // ms
                    refreshInterval: 10,
                });
            });
        }

        $('.statistic-percent').waypoint(function() {
            countUp();
        },
        {
            offset: '95%',
            triggerOnce: true
        });

    /* ==============================================
        Skills bar
    =============================================== */

        $('.progress-bar').each(function() {
            $(this).appear(function() {
                var percent = $(this).attr('aria-valuenow');
                $(this).animate({'width' : percent + '%'});
            });
        });

        // Example with multiple objects
        $('.zoom-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },

            image: {
              // options for image content type
              titleSrc: 'title'
            },
             mainClass: 'mfp-with-zoom', // this class is for CSS animation below
               zoom: {
                 enabled: true, // By default it's false, so don't forget to enable it
                 duration: 300, // duration of the effect, in milliseconds
                 easing: 'ease-in-out', // CSS transition easing function
                 opener: function(openerElement) {
                   return openerElement.is('img') ? openerElement : openerElement.find('img');
                 }
               }
        });

    /* ==============================================
        Google Map
    =============================================== */

        var mapLocation = new google.maps.LatLng(34.031428,-118.2071542,17);
        var $mapis = $('#map');
        if ($mapis.length > 0) {
            var map;
            map = new GMaps({
                streetViewControl : true,
                overviewMapControl: true,
                mapTypeControl: true,
                zoomControl : true,
                panControl : true,
                scrollwheel: false,
                center: mapLocation,
                el: '#map',
                zoom: 16,
                styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
            });
            var image = new google.maps.MarkerImage('assets/images/map-icon.png');
            map.addMarker({
                position: mapLocation,
                icon: image,
                title: 'Vortex',
            });
        }

    /* ==============================================
        Contact Form
    =============================================== */

    $('#contactform').submit(function(){

        var action = $(this).attr('action');

        $("#alert").slideUp(750,function() {
            $('#alert').hide();

        $('#submit')
            .after('<img src="assets/images/ajax-loader.GIF" class="contactloader" />')
            .attr('disabled','disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
            function(data){
                document.getElementById('alert').innerHTML = data;
                $('#alert').slideDown('slow');
                $('#contactform img.contactloader').fadeOut('slow',function(){$(this).remove();});
                $('#submit').removeAttr('disabled');
                if(data.match('success') !== null) {
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                }
            }
        );

        });

        return false;

    });


    $(window).scroll(function() {

    	if (

    		$(this).scrollTop() > 500

    		)
    	{

           $('.back-to-top').fadeIn();
    	}

        else {

        	$('.back-to-top').fadeOut();
        }
    });

        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */

            $('html, body').animate({
                scrollTop: 0,
                easing: 'swing'
            }, 750)
        });


});

 $(window).load(function(){
    "use strict";

    /* ==============================================
    Preloader
    =============================================== */

    // will fade out the whole DIV that covers the website.
    $("#preloader").fadeOut("slow");

    // will first fade out the loading animation
    $("#loading-animation").fadeOut();

    /* ==============================================
    Isotope
    =============================================== */

        // FIlter
        if( $("#filter").length>0 ) {
            var container = $('#filter');
            container.isotope({
                itemSelector: '.gallery-item',
                transitionDuration: '0.8s'
            });

            $(".filter").click(function(){
                $(".filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                container.isotope({
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    container.isotope();
                },1000);
            }).trigger('resize');
        }

});