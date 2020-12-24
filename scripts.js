function    _loop_elem(){
    var active = $("#navlist").children();
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
    //alert($(elem).attr("value"));
    $('#frame').attr("src", $(elem).attr("value"));
}