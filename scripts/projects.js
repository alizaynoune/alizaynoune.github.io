
$(document).ready(function(){
    jQuery.get("discription/info.txt", function(data){
        var line = data.split("\n");
        for (var i = 0; i < line.length - 1; i++){
            var sp_space = line[i].split(" ")
            var _file_name = sp_space[0].split(".")
            var _new = "<div class=\"project\">"+"<h2 class=\"name\">"+
            _file_name[0]+"</h2>"+"<button onclick=\"toggle_desc(this)\" "+
            
            "class=\"_desactive\">descrition &#9662;</button>"+
            "<a class=\"link_repo\" href=\""+sp_space[1]+"\">source code</a>"+
            "<div class=\"hidden\" file_name=\""+"discription/"
            +sp_space[0]+"\"></div></div>";
            $(".all_project").append(_new);
        }
    });
});

function        break_line(line){
    //alert($(line).html().length +"  "+ $(window).width());
    return(line);
}

function        toggle_desc(elem){
    if ($(".closebtn").attr("value") === "close")
        closeNav($(".closebtn"));
    var parent = $(elem).parent();
    if ($(elem).attr("class") === "_desactive"){
        _closse_all();
        $(elem).attr("class", "_active");
        $(elem).html("description &#9652;");
        $(parent).children().each(function(){
            if ($(this).attr("class") === "hidden"){
                $(this).attr("class", "show");
            }
            else if ($(this).attr("class") === "name"){
                $(this).css("color", "greenyellow");
            }
        });
    }
    else {
        $(elem).attr("class", "_desactive");
        $(elem).html("description &#9662;");
        $(parent).children().each(function(){
            if ($(this).attr("class") === "show"){
                $(this).attr("class", "hidden");
            }
        else if ($(this).attr("class") === "name"){
                $(this).css("color", "black");
            }
        });
    }
    var list = $(elem).next().next();
    if ($(list).children().length == 0)
        _read_file(list);
}

function            _read_file(elem){
    jQuery.get($(elem).attr("file_name"), function(data){
        var lines = data.split("\n");
        for (var i = 0; i < lines.length - 1; i++){
            var new_elem = "<p class=\"line\">"+lines[i]+"</p>";
            new_elem = break_line(new_elem);///
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
    });
    $(".name").each(function(){
        $($(this)).css("color", "black");
    });
}