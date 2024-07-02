$(document).ready(() => {
  function makeFirstLettersBold(className) {
    const paragraphs = document.getElementsByClassName(className);

    for (let i = 0; i < paragraphs.length; i++) {
      const words = paragraphs[i].innerHTML.split(/(<br>|\s)/);

      for (let j = 0; j < words.length; j++) {
        if (words[j] !== '<br>' && words[j] !== ' ') {
          const firstLetter = words[j].charAt(0);
          words[j] = '<strong>' + firstLetter + '</strong>' + words[j].substring(1);
        }
      }

      paragraphs[i].innerHTML = words.join('');
    }
  }

  new WOW({
    animateClass: 'animate__animated'
  }).init();

  let menu = $('.menu-slide');
  let menuCloseBtn = $('#menu-close');

  $('.header-burger').click(function () {
    menu.css('display', 'flex');
    menuCloseBtn.show();
  });

  menuCloseBtn.click(function () {
    menu.hide();
    menuCloseBtn.hide();
  });

  $('.head-name-btn').click(function () {
    $('.head-popup').show();
  });

  $('#head-menu-close').click(function () {
    $('.head-popup').hide();
  });

  $('.programs:not(.qualification)').hide();

  let filterTitle = $('.filter-title');

  filterTitle.click(function () {
    filterTitle.removeClass('active');
    $(this).addClass('active');

    $('.programs').hide();
    $('.' + this.id).show();
  });

  let btnCourses = $('.btn-all-courses');
  btnCourses.click(() => {
    $('.program-more').css('display', 'flex');
    btnCourses.hide();
  });
});