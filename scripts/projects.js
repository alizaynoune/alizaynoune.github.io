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
    var list = $(elem).next();
    if ($(list).children().length == 0)
        _read_file(list);
}

function            _read_file(elem){
    jQuery.get($(elem).attr("file_name"), function(data){
        var lines = data.split("\n");
        for (var i = 0; i < lines.length; i++){
            var new_elem = ["<li class=\"line\">",lines[i], "</li>"];
            $($(elem).append(new_elem));
        }
    });
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