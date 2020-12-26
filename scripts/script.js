$( document ).ready(function() {
    $('.page').load('src/Home.html');
});

function    _loop_elem(){
    var active = $(".menu").children();
    for (var i = 0; i < active.length; i++){
        $(active[i]).removeClass('currpage');
    }
}

function _onclick(elem){
    _loop_elem();
    $(elem).addClass('currpage');
    var page = $('.page').children();
    _load_page(elem);
}

function        _load_page(elem){
    $('.page').load($(elem).attr("value"));
}

function        openClose(elem){
    if ($(elem).attr("value") === "open"){
        $(elem).attr("value", "close");
        $(elem).html("&#10005;")
        openNav();
    } 
    else{
        $(elem).attr("value", "open");
        $(elem).html("&#9776;");
        closeNav();
    }
}

function openNav() {
    $(".menu").css("width","40%");
    $(".menu").css("margin-left", "60%");
  }
  
  function closeNav() {
    $(".menu").css("width","0%");
    $(".menu").css("margin-left", "100%");
  }