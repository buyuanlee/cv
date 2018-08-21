var bar = document.getElementById('portfolioBar');
portfolioAll.onclick = function () {
    bar.className = 'scrollBar state-1'
}
portfolioFrame.onclick = function () {
    bar.className = 'scrollBar state-2'
}
portfolioNative.onclick = function () {
    bar.className = 'scrollBar state-3'
}
window.onscroll = function (navScroll) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
}
let liTags = document.querySelectorAll('nav.meanu>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')

    }
}