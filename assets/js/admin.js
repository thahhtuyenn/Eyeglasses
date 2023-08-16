var menuElement = document.getElementsByClassName('menu');
var sliderBarElement = document.getElementsByClassName('left-sidebar');
menuElement[0].onclick = function() {
    sliderBarElement[0].classList.toggle('sidebar__open');
}

var closeElement = document.getElementsByClassName('close');
closeElement[0].onclick = function() {
    sliderBarElement[0].classList.toggle('sidebar__open');
}