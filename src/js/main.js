import "./_vendor";
import vars from "./_vars";
import "./_functions";
// import "./_components";

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
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownTop = document.querySelector(".dropdown-top");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownTop.addEventListener('click', () => {
    dropdownToggle.classList.toggle('toggle-active');
    dropdownTop.classList.toggle('top-active');
    dropdownMenu.classList.toggle('dropdown-active');

    // закрытие выпадашки по щелчку вне
    if (dropdownMenu.classList.contains('dropdown-active')) {
      document.addEventListener('click', (e) => {
        if ((!e.target.parentElement.classList.contains('dropdown-menu')) && (!e.target.parentElement.classList.contains('dropdown-top')) ) {
          dropdownMenu.classList.remove('dropdown-active');
          dropdownTop.classList.remove('top-active');
          dropdownToggle.classList.remove('toggle-active');
        }
      })
    }
  })

  dropdownMenu.addEventListener("click", (event) => {
    const target = event.target;
    const selectedValue = target.getAttribute("data-value");
    const selectedText = target.textContent;

    dropdownToggle.textContent = selectedText;
    dropdownMenu.classList.remove('dropdown-active');
    dropdownTop.classList.remove('top-active');
    dropdownToggle.classList.remove('toggle-active');
  });


});
