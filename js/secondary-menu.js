!function () {
// 导航条二级菜单
    var view = document.querySelector("nav.meanu")

    var controller = function (view) {
        let liTags = view.querySelectorAll('ul>li')
        for (let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function (x) {
                x.currentTarget.classList.add('active')
            }
            liTags[i].onmouseleave = function (x) {
                x.currentTarget.classList.remove('active')
            }
        }
        controller(view)
    }
}.call()