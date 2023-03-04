import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";

var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if (isIE()) {
  document.querySelector("html").classList.add("ie");
}
if (isMobile.any()) {
  document.querySelector("html").classList.add("_touch");
}

document.addEventListener("DOMContentLoaded", () => {
  // появление header после прохождения первого блока при скроле
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const headerHeight = header.offsetHeight;
  const heroHeight = hero.offsetHeight;

  // Функция, которая добавляет класс для плавного появления шапки
  function addScrollUpClass() {
    if (window.scrollY >= heroHeight) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    }
  }

  // Отслеживаем прокрутку страницы и вызываем функцию добавления класса
  window.addEventListener("scroll", addScrollUpClass);

  const sections =document.querySelectorAll('.section');
  const navLinks =document.querySelectorAll('.header .nav__link');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - headerHeight;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('.header .nav__list a[href*=' + id + ']')?.classList.add('active');
        })
      }
    })
  }
});
