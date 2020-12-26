function        toggle_desc(elem){
    if ($(".closebtn").attr("value") === "close")
        closeNav($(".closebtn"));
    if ($(elem).attr("class") === "_desactive"){
        _closse_all();
        $(elem).attr("class", "_active");
        $(elem).html("description &#9652;");
        $(elem).next().attr("class", "show");
    }
    else {
        $(elem).attr("class", "_desactive");
        $(elem).html("description &#9662;");
        $(elem).next().attr("class", "hidden");
    }
    if ($(elem).next().attr("data") === "")
        _read_file($(elem).next());
}

function            _read_file(elem){
    $(elem).load($(elem).attr("file_name"));
}

function            _closse_all(){
    $(".show").each(function(){
        $($(this)).attr("class", "hidden");
    })
    $("._active").each(function(){
        $($(this)).attr("class", "_desactive");
        $($(this)).html("description &#9662;");
    })
}