function readFile() {
    var elem = $('.project', '.pageProject');
    $(elem).each(function(){
        var thisDiv = $('.hidenDesc', this);
        jQuery.get($(thisDiv).attr('name'), function(data){
            data = data.replace(/\n/g, '<br/>');
            $(thisDiv).append(`<p >${data}</p>`);
        });
    });
}


function toggleDesc(elem) {
    $(elem).parent().toggleClass('show');
    $(elem).next().next().toggleClass('showDesc');
   if ($('.show').length){
       $(elem).html('hiding description');
   }
   else
   $(elem).html('show description');
}













$(document).ready(function () {
    $('.pageHome').load('src/Home.html');
    $('.pageContact').load('src/Contact.html');
    $('.pagePoject').load('src/Projects.html');
    $('#intro').scroll(function(){
        if (($('.navBar').offset().top * -1) >= $('.navBar').height()){
           $('.navBar').addClass('ScrollBar');
        }
        else{ 
            $('.navBar').removeClass('ScrollBar');
        }
    });

    jQuery.get("discription/info.txt", function (data) {
        var line = data.split("\n");
        for (var i = 0; i < line.length - 1; i++) {
            var sp_space = line[i].split(" ")
            var _file_name = sp_space[0].split(".")
            var _new = `<div class=\"project\"><h2 class=\"name\">${_file_name[0]}</h2>
        <span onclick=\"toggleDesc(this)\">show description</span>
        <a class=\"link_repo\" href=\"${sp_space[1]}\" target=\"_blank\"  >source code</a>
        <div class=\"hidenDesc\" name=\"discription/${sp_space[0]}\"></div>
        </div>`;
            $(".pageProject").append(_new);
        }
        readFile();
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


