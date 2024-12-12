$(document).ready(function(){
    // scroll-up button show/hide script
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Fitness and Nutrition is not about being better than someone else, it's about being better than you used to be."],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Fitness and Nutrition"],
        typeSpeed: 80,
        backSpeed: 100,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Smooth scrolling when clicking on navbar links
        $(document).ready(function () {
            $('.menu a').on('click', function (e) {
                e.preventDefault(); // Prevent default anchor behavior
                const target = $(this).attr('href'); // Get the target section's ID
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 50 // Adjust for any fixed navbar height
                }, 800); // Smooth scroll duration (800ms)
            });

            // Scroll-up button functionality
            $('.scroll-up-btn').click(function () {
                $('html').animate({ scrollTop: 0 }, 600); // Scroll to the top
            });

            // Toggle navbar menu on smaller screens
            $('.menu-btn').click(function () {
                $('.navbar .menu').toggleClass("active");
                $('.menu-btn i').toggleClass("active");
            });
        });
