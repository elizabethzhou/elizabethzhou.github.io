$(document).ready(function(){

/*scrollTop function*/
$("#scrollup").click(function(){
  $("body").animate({scrollTop: 0}, "slow");
});

/*header button function */
$("#down-button").click(function(){
  $("body").animate({scrollTop: $("#main-section").offset().top}, "slow");
  return false;
});

/*parallax functions*/
$("#about-link").click(function(){
  $("body").animate({scrollTop: $("#about-section").offset().top}, "slow");
  return false;
});

$("#blog-link").click(function(){
  $("body").animate({scrollTop: $("#main-section").offset().top}, "slow");
  return false;
});

$("#contact-link").click(function(){
  $("body").animate({scrollTop: $("#contact-section").offset().top}, "slow");
  return false;
});

$("#home-link").click(function(){
  $("body").animate({scrollTop: $("#header-section").offset().top}, "slow");
  return false;
});

$("#message-link").click(function(){
  $("body").animate({scrollTop: $("#contact-section").offset().top}, "slow");
  return false;
});

$("#link-home").click(function(){
  $("body").animate({scrollTop: $("#header-section").offset().top}, "slow");
  return false;
});

$("#link-message").click(function(){
  $("body").animate({scrollTop: $("#contact-section").offset().top}, "slow");
  return false;
});

/*darken image function*/
$(".item").hover(function(){
  $(".item").addClass("item-hover");
});

/*hover show description links*/
$("#blog-description").hover(function(){
  $("#description-links").show();
});

$("#submit").hover(function(){
  $("#submit").addClass("submit-hover");
});

});
