$( document ).ready(function() {
    $('.page').load('src/Home.html');
    $(document).click(function(e){
        var targ = e.target.className;
        if (targ !== "closebtn" && targ !== "menu" && targ !== "currpage"){
            closeNav($(".closebtn"));
        }
    });
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
    _load_page(elem);
}

function        _load_page(elem){
    $(".page").load($(elem).attr("value"));
    $(".page_open").html($(elem).html());
}

function        openClose(elem){
    if ($(elem).attr("value") === "open")
        openNav(elem);
    else
        closeNav(elem);

}

function openNav(elem) {
    if ($(window).width() < 800){
        $(".menu").css("width","40%");
    }
    else
        $(".menu").css("width","40%");
    $(".menu").css("height", "100%");
    $(elem).attr("value", "close");
    $(elem).html("&#10005;")
    $(".menu").find('button').css("display", "block");
  }
  
  function closeNav(elem) {
    $(".menu").css("width", "0%");
    $(".menu").css("height", "0%");
    $(elem).attr("value", "open");
    $(elem).html("&#9776;");
    $(".menu").find('button').css("display", "none");
  }