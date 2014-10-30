$(document).ready(function () {

  if($('.collapse').length){
    $('.collapse').collapse();
  }
  if($('select').length){
    $('select, .select').selectric();
  }

  $('.choose-list').find('li').find('label').on("click", function(event){
    if(!$(this).parent().hasClass("is-open")) {
      $('.choose-list').find('li').removeClass('is-open');
      $(this).parent().addClass('is-open');
    }
  });
  $('.enter-code-box').find('input').on('change', function(){
    if ($(this).is(':checked')) {
      $('.enter-code-box').addClass('is-active');
    }
    else {
      $('.enter-code-box').removeClass('is-active');
    }
  })
});

$(window).resize(function () {

});

$(window).load(function () {


});


