
$(function() {
  let mySwiper  = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    slidesPerView: 'auto',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });
  
});


$(function() {
  $(".qa-question-toggle").on("click", function(e){
    $(this).closest(".qa-item").toggleClass("open").toggleClass("close");
  });
});

$(function() {
  $(".header-bars, .modal-cancel, .modal-menu>li>a").on("click", function(e){
    $(".modal").toggleClass("open").toggleClass("close");
  });
});

$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('.header-menu>li>a, .modal-menu>li>a, .to-top').click(function(){
    var adjust = -80;
    
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);

    var position = Math.max(target.offset().top + adjust, 0);
    $('body,html').animate({scrollTop:position}, 400, 'swing');
    return false;
  });
});

$(function(){
  $(".to-top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".to-top").fadeIn();
    } else {
      $(".to-top").fadeOut();
    }
  });
})


$(function () {

  $('#contact-form').submit(function (event) {
    var formData = $('#contact-form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfRYV9ppO7d7KlkRJaxOx_eKjvP-g1N6OoriIu0pSFCH_MOZQ/formResponse", 
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact-form").fadeOut();
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});

$(function(){
  $(".input-mandatory, .input-checkbox").change(function(){
      let active = true;
      $(".input-mandatory").each((i, elem) => {
          if(!$(elem).val()){
            active = false;
          } 
      })
      if(!$(".input-checkbox").prop('checked')) active = false;
      if(active) $(".button-submit").prop('disabled', false);
      else $(".button-submit").prop('disabled', true);
  })
})