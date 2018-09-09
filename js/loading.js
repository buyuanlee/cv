!function () {
    var view = document.querySelector('#site_load')
    var controller = function (view) {
        //loading动画
        setTimeout(function () {
            view.classList.remove('active')
        }, 500)
    }
    controller(view)
}.call()

