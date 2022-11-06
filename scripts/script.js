const swiper = new Swiper('.top-nfts', {
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1360: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
    freeMode: true,
    grabCursor: true,
});

const swiper1 = new Swiper('.nft-profiles', {
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1360: {
            slidesPerView: 3,
            spaceBetween: 37,
        },
    },
    freeMode: true,
    grabCursor: true,
});


$('.burger-button').on('click', function() {
    $('.mobile-menu-hide').toggleClass('mobile-menu');
});
$('.mobile-butt').on('click', function() {
    $('.top-seller-hide').toggleClass('top-seller-show');
    if(!$('.top-seller-hide').hasClass('top-seller-show')) {
        document.getElementById('mob-butt').scrollIntoView({behavior: "smooth", block: "end"});
    }
});

$(".accordion-input").on("click", function (e) {
    e.preventDefault();
    setTimeout(
      () => $(this).prop("checked", !this.checked).trigger("change")
    );
  });