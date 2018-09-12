!function () {
    var view = View('.works')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            pagination: {el: '.swiper-pagination'},
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            var view = this.view
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'),
                this.swiperOptions)
        },
    }
    controller.init(view)
}.call()




