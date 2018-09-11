!function () {
    var view = document.querySelector('#site_load')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.welcome()
        },
        welcome: function () {
            setTimeout(() => {
                this.view.classList.remove('active')
            }, 500)
        },
    }
    controller.init(view)
}.call()

