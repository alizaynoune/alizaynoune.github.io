$(document).ready(function () {
    // $('.pageHome').load('src/Home.html');
    // $('.pageContact').load('src/Contact.html');
    $('.pagePoject').load('src/Projects.html');
    $('#intro').scroll(function(){
        if (($('.navBar').offset().top * -1) >= $('.navBar').height()){
           $('.navBar').addClass('ScrollBar');
        }
        else{ 
            $('.navBar').removeClass('ScrollBar');
        }
    });
    
});


function openPage(elem) {
    $(".pageContent").load($(elem).attr("value"));
    $(".currPage").each(function () {
        $(this).removeClass("currPage");
    });
    $(elem).addClass("currPage");
    // $('.namePage').html($(elem).html());
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


