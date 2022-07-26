$(function(){
    $('.header-menu>a, .modal-menu>a').click(function(){
        const href = $(this).attr("href");
        let position = $(href).offset().top - 70;
        $("body,html").animate({scrollTop:position}, 400, "swing");
        return false;
    })
    $(".to-top").click(function(){
        let position = $("html").offset().top;
        $("body,html").animate({scrollTop:position}, 400, "swing");
        return false;
    })
})

$(function(){
    $("#toggle-modal").click(function(){
        $("#modal").toggleClass("visible");
    })
})

$(function(){
    $(".contact-form input").click(function(){
        let active = true;
        console.log($(".input-mandatory"))
        $(".input-mandatory").each((i, elem) => {
            if(!$(elem).val()) active = false;
        })
        if(active) $(".contact-form-submit-button").prop('disabled', false);
        else $(".contact-form-submit-button").prop('disabled', true);
    })
})