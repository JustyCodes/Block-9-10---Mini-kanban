var main = function () {
    $(document).keypress(function (event) {
      if (event.which === 80) {
        var currentItem = $('.current');
        var previousItem = currentItem.prev();
        currentItem.removeClass('current');
        previousItem.addClass('current');
      } else if (event.which === 78) {
        var currentItem = $('.current');
        var nextItem = currentItem.next();
        currentItem.removeClass('current');
        nextItem.addClass('current');
      }
    });
  };
$(document).ready(main);
