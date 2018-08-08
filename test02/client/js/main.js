$(document).ready(function(){

	$('.nav-opener').click(function() {
    $(".nav").toggleClass("nav--opening");         
    $(this).toggleClass("active");
    $('.search-form-opener').removeClass("search-form-opener--opening").addClass("search-form-opener--closing");
    $(".search-form").removeClass("search-form--opening");
  });

  $('.has-drop > a').click(function() {
    $(this).closest('.has-drop').toggleClass("has-drop--open");
    $('.search-form-opener').removeClass("search-form-opener--opening").addClass("search-form-opener--closing");
    $(".search-form").removeClass("search-form--opening");
    event.preventDefault();
  });

  $('.search-form-opener').click(function() {
    $(this).toggleClass("search-form-opener--closing search-form-opener--opening");
    $(".search-form").toggleClass("search-form--opening");
    $(".nav").removeClass("nav--opening");
    $('.nav-opener').removeClass("active");
    $('.has-drop').removeClass("has-drop--open");
  });

  $('.slider__list').bxSlider({
  	adaptiveHeight: true,
    nextSelector: '.slider__control--next',
  	prevSelector: '.slider__control--prev',
  	nextText: '<span class="btn btn--alt btn--icon" data-icon-left="icon-arrow-double-right"></span>',
  	prevText: '<span class="btn btn--alt btn--icon" data-icon-left="icon-arrow-double-left"></span>'
  });

  $(".progress").each(function(){
    var $bar = $(this).find(".progress-bar__fill");
    var $val = $(this).find(".progress__value");
    var perc = parseInt( $val.text(), 10);

    $({p:0}).animate({p:perc}, {
      duration: 10,
      step: function(p) {$bar.css({transform: "rotate("+ (45+(p*1.8)) +"deg)"});}
    });
  });

  $('.gallery').mCustomScrollbar({
    axis:"x",
    scrollbarPosition: "outside",
    scrollButtons: { enable: true }
  });

});
