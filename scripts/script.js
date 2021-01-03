$(document).ready(function () {
    if(screen.width < 1000 ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)) {
       $('._css').attr('href','css/default-mobile.css');
       }
    $('.pageContent').load('src/Home.html');
    $('#intro').scroll(function(){
        var bottom_navBar = $('.navBar').offset().top + $('.navBar').outerHeight(true);
        if (bottom_navBar <= $('.navLinks').height())
           $('.navLinks').addClass('ScrollNavLinks');
        else 
            $('.ScrollNavLinks').removeClass('ScrollNavLinks');

    });

    
});


function openPage(elem) {
    $(".pageContent").load($(elem).attr("value"));
    $(".currPage").each(function () {
        $(this).removeClass("currPage");
    });
    $(elem).addClass("currPage");

}

function    clickbtn(){
    $('.menuBtn').toggleClass('btnClose');
    $('.navLinks').toggleClass('toggleNavLinks');
    var allChild = $('.navLinks').children();
    if ($('.btnClose').length > 0){
        allChild.each(function(index, elem){
            $(elem).css('transition', `all ease ${index / 1.5}s`);
        });
    }
}


