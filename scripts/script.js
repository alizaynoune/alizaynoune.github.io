$( document ).ready(function() {
    $('#page').load('src/Home.html');
});

function    _loop_elem(){
    var active = $("#topnav").children();
    for (var i = 0; i < active.length; i++){
        $(active[i]).removeClass('active');
    }
}

function _onclick(elem){
    _loop_elem();
    $(elem).addClass('active');
    var page = $('#page').children();
    _load_page(elem);
}

function        _load_page(elem){
    $('#page').load($(elem).attr("value"));
}