var currentToggle = $('.to-do');
function itemClickEventHandler(e) {
  if (e.target !== e.currentTarget) {
    $('.item').removeClass('current');
    $(e.currentTarget).toggleClass('current');
  }
}
function registerEventHandlers() {
  currentToggle.on('click', itemClickEventHandler);
}



var main = function () {
    registerEventHandlers();
    $(document).keypress(function (event) {
      if (event.which === 60) {
        var currentItem = $('.current');
        var previousItem = currentItem.prev();
        if (previousItem.length === 0) {
          previousItem = $('.item').last();
        }
        currentItem.removeClass('current');
        previousItem.addClass('current');
        
      } else if (event.which === 62) {
        var currentItem = $('.current');
        var nextItem = currentItem.next();
        if (nextItem.length === 0) {
          nextItem = $('.item').first();
        }
        currentItem.removeClass('current');
        nextItem.addClass('current');
        
      } else if (event.which === 42) {
        var currentItem = $('.current');
        var nextItem = currentItem.next();
        if (nextItem.length === 0) {
          nextItem = $('.item').first();
        }
        currentItem.addClass('done');
        currentItem.removeClass('current');
        nextItem.addClass('current');
        $('.done').remove();
      } else if (event.which === 94) {
        $('.current').addClass('progress');
      }
    });
  };
  
$(document).ready(main);
