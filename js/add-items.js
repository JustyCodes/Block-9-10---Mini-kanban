var main = function() {
  $('.btn').click(function () {
    var post = $('.status-box').val();
    $('li').removeClass('current');
    $('<li>').text(post).prependTo('#to-do').addClass('item').addClass('current');
    $('.status-box').val('');
    $('.btn').addClass('disabled');
  });
  
  $('.status-box').keyup(function () {
    var postLength = $(this).val().length;
  
    if (postLength === 0) {
      $('.btn').addClass('disabled');
    } else {
      $('.btn').removeClass('disabled');
    }
  });
  
  $('.btn').addClass('disabled');
};

$(document).ready(main);