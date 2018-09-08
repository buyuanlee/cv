// 模块添加offset属性
let specialTags = document.querySelectorAll('[distance]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}

// 延时上升效果
setTimeout(function () {
    findNearly()
}, 500)

//模块动效
window.addEventListener('scroll', function () {
    findNearly()
})

/*函数库*/

// 寻找最近模块并设置
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
