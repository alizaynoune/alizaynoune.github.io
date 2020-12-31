$(document).ready(function () {
    $('.pageContent').load('src/Home.html');
    $(window).scroll(function() {

        
            console.log("done");
       
    
    });

});


function openPage() {
    // $(".pageContent").load($(elem).attr("value"));
    // $(".currPage").each(function () {
    //     $(this).removeClass("currPage");
    // });
    // $(elem).addClass("currPage");


        var head = document.createElement('h1')
        head.innerHTML = 'this is contact page'
        content = $('.pageContent');
        content.innerHTML = ''
        console.log(content);
        content.append(head);
        isempty = 0;


}


document.onscroll = function () {
    console.log('scroll')
}


