var bar = document.getElementById('portfolioBar');
portfolioAll.onclick = function() {
  bar.className = 'scrollBar state-1'
}
portfolioFrame.onclick = function() {
  bar.className = 'scrollBar state-2'
}
portfolioNative.onclick = function() {
  bar.className = 'scrollBar state-3'
}
window.onscroll = function(navScroll){
if (window.scrollY>0){
    topNavBar.classList.add('sticky')
} else{
    topNavBar.classList.remove('sticky')
}
}
