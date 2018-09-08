//loading动画
setTimeout(function () {
    site_load.classList.remove('active')
}, 500)


// 延时上升效果
setTimeout(function () {
    findNearly()
}, 1000)


// 导航条二级菜单
let liTags = document.querySelectorAll('nav.meanu>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('nav.meanu>ul>li>a')


// 导航条动效
window.onscroll = function (navScroll) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findNearly()
}


// 模块添加offset属性
let specialTags = document.querySelectorAll('[distance]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}


// 寻找最近模块
function findNearly() {
    let specialTags = document.querySelectorAll('[distance]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }

//最近模块移除offser属性
    specialTags[minIndex].classList.remove('offset')

// 模块对应导航条高亮效果
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let bros = li.parentNode.children
    for (let i = 0; i < bros.length; i++) {
        bros[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}


/********** 设置缓动 **********/
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}

requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()                                       //阻止默认动作
        let a = x.currentTarget
        let href = a.getAttribute('href')                     //'#siteAbout'
        let element = document.querySelector(href)          //获取id为变量href内容的元素
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 80
        let distance = targetTop - currentTop
        let t = Math.abs((distance / 100) * 300)
        if (t > 1000) {
            t = 1000
        }                                                         //如果过渡事件大于1s，让时间等于1s
        var coords = {y: currentTop};                           // 开始位置
        var tween = new TWEEN.Tween(coords)                   // 创建新tween
            .to({y: targetTop}, t)                          // 在t秒内移动到指定位置
            .easing(TWEEN.Easing.Quadratic.InOut)         // 使用的效果名称
            .onUpdate(function () {                     // Called after tween.js updates 'coords'.
                window.scrollTo(0, coords.y)
            })
            .start();                               // 立即开始tween
    }
}