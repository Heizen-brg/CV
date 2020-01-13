showModal = function () {
  var bg_img = $('.portfolio-item').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
console.log(bg_img);

  $('#myModal').show();
  $('#img').attr('src' , bg_img)
}

$('.close').click(function () {
  $('#myModal').removeAttr("style").hide()
});