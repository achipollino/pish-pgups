window.onload = function() {
    $(document).ready(() => {
        /* new WOW({
             animateClass: 'animate__animated'
         }).init();*/

        /*let menu = $('.menu-slide');
        let menuCloseBtn = $('#menu-close');

        $('.header-burger').click(function () {
            menu.css('display', 'flex');
            menuCloseBtn.show();
        });

        menuCloseBtn.click(function () {
            menu.hide();
            menuCloseBtn.hide();
        });*/

        $('.head-name-btn').click(function () {
            $('.head-popup').show();
        });

        $('#head-menu-close').click(function () {
            $('.head-popup').hide();
        });

        $('.click').click(function () {
            let classPopup = this.id;
            $(`.${classPopup}`).show();
        });

        $('.menu-close').click(function () {
            $(this).closest('.popup').hide();
        });

        $('.programs:not(.qualification)').hide();
        $('.persons__slider:not(.master)').hide();

        let filterTitle = $('.filter-title');
        let personalitiesTitle = $('.personalities-title');

        filterTitle.click(function () {
            filterTitle.removeClass('active');
            $(this).addClass('active');

            $('.programs').hide();
            $('.' + this.id).show();
        });

        personalitiesTitle.click(function () {
            personalitiesTitle.removeClass('active');
            $(this).addClass('active');

            $('.persons__slider').hide();
            $('.' + this.id).show();
        });

        let btnCourses = $('.btn-all-courses');
        btnCourses.click(() => {
            $('.program-more').css('display', 'flex');
            btnCourses.hide();
        });

        $('#accordion .ui-accordion-header').click(function () {
            $(this).next().toggle('slow');
            $(this).toggleClass('ui-accordion-header-active');
            return false;
        }).next().hide();

        $(".persons-carousel").owlCarousel({
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 50,
                    center: true,
                    margin: 20,
                },
                600: {
                    items: 2,
                    stagePadding: 50,
                    center: true,
                    margin: 20,
                },
                1000: {
                    items: 4,
                    margin: 10,
                }
            }
        });

        // Функция для выравнивания высоты элементов слайдера
        function alignSlideHeights() {
            var slides = document.querySelectorAll('.person-card');
            var maxHeight = 0;

            // Находим максимальную высоту элемента слайдера
            slides.forEach(function (slide) {
                var slideHeight = slide.clientHeight;
                if (slideHeight > maxHeight) {
                    maxHeight = slideHeight + 30;
                }
            });

            // Применяем максимальную высоту ко всем элементам слайдера
            slides.forEach(function (slide) {
                slide.style.height = maxHeight + 'px';
            });
        }

        // Выравниваем высоту при загрузке страницы
        alignSlideHeights();

        // Выравниваем высоту при изменении размера экрана
        window.addEventListener('resize', function () {
            alignSlideHeights();
        });
    });
}