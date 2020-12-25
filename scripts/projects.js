function        toggle_desc(elem){
    if ($(elem).attr("class") === "_desactive"){
        _closse_all();
        $(elem).attr("class", "_active");
        $(elem).html("description &#9652;");
        if ($(elem).next().html() === ""){
            jQuery.get(elem.value, function(data){
               // $(elem).next().html(data);
                _loop_lines(data);
            });
        }
        
        $(elem).next().attr("class", "show");
    }
    else {
        $(elem).attr("class", "_desactive");
        $(elem).html("description &#9662;");
        $(elem).next().attr("class", "hidden");
    }
}

function           _loop_lines(data){
    var lines = data.split("\n");
    for (var i = 0; i < lines.length; i++){
        //alert(lines[i]);
    }
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