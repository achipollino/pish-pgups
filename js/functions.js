function makeFirstLettersBold(className) {
  var paragraphs = document.getElementsByClassName(className);

  for (var i = 0; i < paragraphs.length; i++) {
    var words = paragraphs[i].innerHTML.split(/(<br>|\s)/);

    for (var j = 0; j < words.length; j++) {
      if (words[j] !== '<br>' && words[j] !== ' ') {
        var firstLetter = words[j].charAt(0);
        words[j] = '<strong>' + firstLetter + '</strong>' + words[j].substring(1);
      }
    }

    paragraphs[i].innerHTML = words.join('');
  }
}

new WOW({
  animateClass: 'animate__animated'
}).init();