
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
  $(".qa-item-draw").on("click", function(e){
    $(this).closest(".qa-item").children(".qa-item-answer").toggle(300);
  });
});