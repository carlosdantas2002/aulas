$(document).ready(function(){
    $("#botao").click(function(){
        $("#texto3").css("color","blue");
        $("#texto1").css("color","red");
        $("#texto2").css("color","violet");
        $("#texto1").css("text-decoration","underline");
        $("#texto2").css("text-decoration","underline");
        $("#texto3").css("text-decoration","underline");
        $("texto1").css("padding","50px");
        $("texto2").css("padding","50px");
        $("texto3").css("padding","50px");
        $("texto1").css("background-color","#ccc");
        $("texto2").css("background-color","#ccc");
        $("texto3").css("background-color","#ccc");
    });
});