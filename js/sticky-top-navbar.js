!function () {
    var view = document.querySelector('#topNavBar')
// 导航条动效
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            view.classList.add('sticky')
        } else {
            view.classList.remove('sticky')
        }
    })
}.call()