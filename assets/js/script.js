$(document).ready(function(){
    let input=document.querySelector("#input");
    var inputValue=input.value;
   
    $( "#left-top" ).click(function() {
       $("#ball").css({"margin-right":"3px","margin-bottom":"3px"});

    });
    $( "#left-center" ).click(function() {
       $("#ball").css("margin-right","3px");
    });
    $( "#left-bottom" ).click(function() {
       $("#ball").css({"margin-top":"3px","margin-right":"3px"});
    });
     
    $( "#center-top" ).click(function() {
        $("#ball").css("margin-bottom","3px");
     });
     $( "#center" ).click(function() {
        //$("#ball").css("margin","auto");
     });
     $( "#center-bottom" ).click(function() {
        $("#ball").css("margin-top","3px");
     });

     $( "#right-top" ).click(function() {
        $("#ball").css({"margin-bottom":"3px","margin-left":"3px"});
     });
     $( "#right-center" ).click(function() {
        $("#ball").css("margin-left","3px");
     });
     $( "#left-bottom" ).click(function() {
        $("#ball").css({"margin-top":"3px","margin-left":"3px"});
     });
 
});
