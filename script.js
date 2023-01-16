//index sayfası dışında script dosyası ile istenilen fonksiyonu aldığım alan.
let Etiket = document.querySelectorAll('.imgBx');
window.onload = function () {
    Etiket.classList.remove('imgBx');
    Etiket.classList.add('imgBx active');
}
