showModal = function () {
  var bg_img = $('.portfolio-item').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
console.log(bg_img);

  $('#myModal').show();
  $('#img').attr('src' , bg_img)
}

$('.close').click(function () {
  $('#myModal').removeAttr("style").hide()
});


// scroll 
$(document).ready(function () {
  $('.about-nav ' ).click(function() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 1000)
}),
$('.portfolio-nav').click(function() {
  $('html, body').animate({
    scrollTop: $("#portfolio").offset().top
  }, 1000)
}),
$('.education-nav').click(function() {
  $('html, body').animate({
    scrollTop: $("#education").offset().top
  }, 1000)
}),
$('.contact-nav').click(function() {
  $('html, body').animate({
    scrollTop: $("#contact").offset().top
  }, 1000)
})
})



  AOS.init();


  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }