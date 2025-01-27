


window.onload = function() {

    checkOS();
    initializeSwipers();

}

function checkOS() {

    const userAgent = navigator.userAgent || window.opera;
    if( /android/i.test( userAgent ) ) { document.body.classList.add( "android" ); }

}

function initializeSwipers() {

    const
        s1 = new Swiper( ".mySwiper1", {
            // centeredSlide: true,
            slidesPerView: 1,

            // Optional parameters
            direction: "horizontal",
            loop: true,
            breakpoints: {
                1699.98: {
                    slidesPerView: 4
                },
                1269.98: {
                    slidesPerView: 3
                },
                499.98: {
                    slidesPerView: 2
                }
            },

            // Pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // Scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        } ),
        s2 = new Swiper( ".mySwiper2", {
            // centeredSlide: true,
            slidesPerView: 1,

            // Optional parameters
            direction: "horizontal",
            loop: true,
            breakpoints: {
                // 1749.98: {
                //     slidesPerView: 3
                // },
                1269.98: {
                    slidesPerView: 3
                },
                499.98: {
                    slidesPerView: 2
                }
            },

            // Pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // Scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        } ),
        s3 = new Swiper( ".mySwiper3", {
            // centeredSlide: true,
            slidesPerView: 1,

            // Optional parameters
            direction: "horizontal",
            loop: true,
            breakpoints: {
                // 1749.98: {
                //     slidesPerView: 3
                // },
                1269.98: {
                    slidesPerView: 3
                },
                499.98: {
                    slidesPerView: 2
                }
            },

            // Pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // Scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        } ),
        s4 = new Swiper( ".mySwiper4", {
            // centeredSlide: true,
            slidesPerView: 1,

            // Optional parameters
            direction: "horizontal",
            loop: true,
            breakpoints: {
                1699.98: {
                    slidesPerView: 4
                },
                1199.98: {
                    slidesPerView: 3
                },
                499.98: {
                    slidesPerView: 2
                }
            },

            // Pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // Scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        } );

}


