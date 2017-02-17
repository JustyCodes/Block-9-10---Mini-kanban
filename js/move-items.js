var currentToggle = document.querySelector('#to-do');
currentToggle.addEventListener('click', itemClickEventHandler, false);

function itemClickEventHandler(e) {
  if (e.target !== e.currentTarget) {
    $('.item').removeClass('current');
    $(e.target).toggleClass('current');
  }
}



var main = function () {
    $(document).keypress(function (event) {
      var currentItem = $('.current');
      var previousItem = currentItem.prev();
      if (previousItem.length === 0) {
          previousItem = $('.item').last();
      }
      
      var nextItem = currentItem.next();
      if (nextItem.length === 0) {
         nextItem = $('.item').first();
      }
      
      if (event.which === 60) {
        
        currentItem.removeClass('current');
        previousItem.addClass('current');
        
      } else if (event.which === 62) {
        
        currentItem.removeClass('current');
        nextItem.addClass('current');
        
      } else if (event.which === 42) {
        
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