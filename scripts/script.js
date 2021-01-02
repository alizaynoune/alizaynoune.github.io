$(document).ready(function () {
    $('.pageContent').load('src/Home.html');
    $('#intro').scroll(function(){
        if ($('.navBar').scrollTop() < $('.navLinks').position().top){
            $('.navLinks').addClass('ScrollNavLinks');

        }
        else {
            $('.ScrollNavLiks').removeClass('ScrollNavLiks');
            $('.ScrollNavLinks').css('width', $('#intro').css('width'));
        }
        console.log('scroll');
    });
});


function openPage(elem) {
    $(".pageContent").load($(elem).attr("value"));
    $(".currPage").each(function () {
        $(this).removeClass("currPage");
    });
    $(elem).addClass("currPage");

}



