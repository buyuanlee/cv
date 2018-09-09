!function () {
    var view = document.querySelector('.works')
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
        // 轮播方向和无缝
        //direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
}.call()
