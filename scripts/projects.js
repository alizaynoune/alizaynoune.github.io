
function readFile() {
    var elem = $('.project > .discription');
    for (var i = 0; i < elem.length; i++) {
        
    }
}

$(document).ready(function () {
        jQuery.get("discription/info.txt", function (data) {
            var line = data.split("\n");
            for (var i = 0; i < line.length - 1; i++) {
                var sp_space = line[i].split(" ")
                var _file_name = sp_space[0].split(".")
                var _new = `<div class=\"project\"><h2 class=\"name\">${_file_name[0]}</h2>
            <span onclick=\"toggleDesc(this)\"class=\"_desactive\">descrition</span>
            <a class=\"link_repo\" href=\"${sp_space[1]}\">source code</a>
            <textarea class=\"discription\" placeholder=\"${sp_space[0]}\">lsjdskljlasj</textarea>
            </div>`;
                $(".all_project").append(_new);
               // console.log(length);
            }
            readFile();
    });

})

function toggleDesc(elem) {
    var classPar = $(elem).parent().attr("class");
    $(elem).parent().toggleClass('show');

}


