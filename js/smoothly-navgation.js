let aTags = document.querySelectorAll('nav.meanu>ul>li>a')

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