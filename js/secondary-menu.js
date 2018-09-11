!function () {
    var view = document.querySelector("nav.meanu")
    var controller = {
        view: null,
        liTags: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            let liTags = this.view.querySelectorAll('ul>li')
            for (let i = 0; i < liTags.length; i++) {
                liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active')
                }
                liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active')
                }
            }
        },
    }
    controller.init(view)
}.call()