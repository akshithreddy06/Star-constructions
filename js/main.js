//Client Logo Slider
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

//Client Logo Slider
$(document).ready(function(){
    $('.testimonial-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});




//Quotation Function
$(document).ready(function(){
    $("#OpenForm").click(function(){
        $(".quotation_form_area").animate({
            width: "toggle"
        });
    });
});
//show enquiry tab
$(document).ready(function(){
    $("#interested-btn").click(function(){
        $(".container-enquiry").css("display", "block");      
    });
});
//scroll to enquiry tab
$(document).ready(function(){
    $("#interested-btn").click(function(){
        $("html, body").animate({
            scrollTop: $(".container-enquiry").offset().top
        }, 'slow');
    });
});
//scroll back up and alert user with response
$(document).ready(function(){
    $('#submit').click(function(){
        $("html, body").animate({
            scrollTop: $(".main-container").offset().top
        });
        alert("Your Response was accepted. We will contact you soon");
    });
});
