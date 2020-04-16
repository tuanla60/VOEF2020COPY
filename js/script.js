
$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();   

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();
    });
    $('#goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });


    $('a.scrollDiv').on('click', function(e){
        e.preventDefault();

        var id = $(this).attr('href');

        if($('.box-nav-top')) {
            $('html,body').animate({
                scrollTop: $(id).offset().top
            });
        }
    });


    $(".show_frmSearch").click(function(e){
        e.preventDefault();
        $("#timke").toggle();
    });
    $(".show_frmSearch2").click(function(e){
        e.preventDefault();
        $("#timke2").toggle();
    });




    var delay = ( function() {
      var timer = 0;
      return function(callback, ms) {
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
      };
    })();

    $('a.parent').on("click", function(e){
        $(this).next('ul').toggle();
        $(this).children('span:first').toggleClass("icon-down-arrow icon-right-arrow");
        e.stopPropagation();
        e.preventDefault();
    });

    if($('.header.header-scroll')[0]){
		$('.header-scroll').before('<div class="space-header-fixed"></div>');
    };

	checkScroll();
	$(window).scroll(checkScroll);

});

$(window).resize(function () {
	checkScroll();
});

function checkScroll(){
    if($('.header.header-scroll')[0]){
        var menu_a = $('.menu-top').outerHeight();
        var menu_b = $('.space-header-fixed');
        var menu_c = $('.header.header-scroll');
        var h_menu_c = $('.header.header-scroll').outerHeight();
        var header_fixed = ($(this).scrollTop() >= 0);
        var btn_hide = $('#btn_click_hidden');
        if (header_fixed === true) {
            menu_b.height(h_menu_c);
            menu_c.addClass('header-fixed');
            btn_hide.show();
        } else {
            menu_b.height(0);
            menu_c.removeClass('header-fixed');
            btn_hide.hide();
        }
    };


    var total_scroll_height = document.body.scrollHeight;
    var inside_header = ($(this).scrollTop() <= 200);
    var passed_header = ($(this).scrollTop() >= 0);
    var passed_header2 = ($(this).scrollTop() >= 150);
    var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() + 300)));
    if (inside_header === true) {
        $('.store-product-button-fixed').removeClass('show-store-product-button');
        $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
    } else if (passed_header === true) {
        $('.store-product-button-fixed').addClass('show-store-product-button');
        $('.back-to-top-badge').addClass('back-to-top-badge-visible');
    }
    if (footer_reached == true) {
        $('.store-product-button-fixed').removeClass('show-store-product-button');
        $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
    }
}


jQuery(function($) {

    $('#btn_click_hidden').on("click", function(z) {
        z.preventDefault();
        $('.header').removeClass('header-scroll');
        $('.header').removeClass('header-fixed');
        $('.space-header-fixed').css('display','none');
        $(this).hide();
    });

    $('.back-to-top-badge').on("click", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.btn-collapse').on("click", function(e) {
        e.preventDefault();
        $('#box-collapse').toggle(300);
    });


    var swiper0 = new Swiper('#slide_home', {
        slidesPerView: 1,
        //direction: 'vertical',
        //lazy: true,
        //loop: true,
        //centeredSlides: true,
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination-slide-home-v',
            clickable: true,
            //dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-slide-home',
            prevEl: '.swiper-button-prev-slide-home',
        },
    });

    var swiper1 = new Swiper('#slide_sermina', {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 1,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
            el: '.swiper-pagination-sermina',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-sermina',
            prevEl: '.swiper-button-prev-sermina',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 1,
            },
            415: {
                slidesPerView: 1.4,
                spaceBetween: 1,
            },
            380: {
                slidesPerView: 1.1,
                spaceBetween: 1,
            }
        }

    });

    // var swiper2 = new Swiper('#slide_university', {
    //     slidesPerView: 1,
    //     slidesPerColumn: 1,
    //     spaceBetween: 28,
    //     slidesPerGroup: 3,
    //     loop: true,
    //     loopFillGroupWithBlank: false,
    //     pagination: {
    //         el: '.swiper-pagination-university',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next-university',
    //         prevEl: '.swiper-button-prev-university',
    //     },
    //     breakpoints: {
    //     	992: {
    //     		slidesPerView: 3,
    //     	},
    //     	580: {
    //     		slidesPerView: 2,
    //     		spaceBetween: 10,
    //     	},
    //     	355: {
    //     		slidesPerView: 1,
    //     		spaceBetween: 5,
    //     	}
    //     }

    // });

    var swiper3 = new Swiper('#slide_tab_university', {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        loop: false,
        pagination: {
            el: '.swiper-pagination-university-tab',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next-university-tab',
            prevEl: '.swiper-button-prev-university-tab',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            355: {
                slidesPerView: 1,
                spaceBetween: 5,
            }
        }

    });


	var swiper6 = new Swiper('#slide_products_viewed', {
		slidesPerView: 5,
		slidesPerColumn: 1,
		spaceBetween: 10,
		slidesPerGroup: 2,
		lazy: true,
		//loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: '.swiper-pagination-products-viewed',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next-products-viewed',
			prevEl: '.swiper-button-prev-products-viewed',
		},
		breakpoints: {
			1100: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			580: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			355: {
				slidesPerView: 2,
				spaceBetween: 5,
			}
		}

	});

    // var swiper3 = new Swiper('#slide_list_cate_folder', {
    //     slidesPerView: 6,
    //     slidesPerColumn: 1,
    //     spaceBetween: 5,
    //     slidesPerGroup: 2,
    //     lazy: true,
    //     //loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //         el: '.swiper-pagination-list-sub-cate',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '.swiper-button-next-list-sub-cate',
    //         prevEl: '.swiper-button-prev-list-sub-cate',
    //     },
    //     breakpoints: {
    //         1400: {
    //             slidesPerView: 5,
    //         },
    //         1200: {
    //             slidesPerView: 4,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //         },
    //         580: {
    //             slidesPerView: 3,
    //             spaceBetween: 8,
    //         },
    //         355: {
    //             slidesPerView: 2,
    //             spaceBetween: 5,
    //         }
    //     }

    // });


});

