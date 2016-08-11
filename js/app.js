function scrollHeader(){
    var topPosition = document.getElementById("navHeader");
    var ypos = window.pageYOffset;
    if(ypos>350){
      topPosition.style.background = "#FFFFFF";
      topPosition.style.transition = "background 2s linear 0s";
    }else{
       topPosition.style.background= "#e2e2e2";
    }
}
  window.addEventListener("scroll",scrollHeader);





$(document).ready(function(){
   $(".carousel-caption h1").addClass("animated zoomIn");
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
 
    
});