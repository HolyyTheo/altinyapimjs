let Etiket = document.querySelectorAll('.imgBx');
let Don  = document.querySelectorAll('.imgBx1');
window.onload = function () {
    Etiket.classList.remove('imgBx');
    Etiket.classList.add('imgBx active');
    Don.classList.remove('imgBx1');
    Don.classList.add('imgBx1 active');
}