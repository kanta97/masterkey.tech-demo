"use script";
$(document).ready(function () {
  

  // preloader code
  $(function () {
    // makes sure the whole site is loaded
    var preloader = $("#preloader div");
    preloader.fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow");
    // will fade out the white DIV that covers the website.
    $("body").delay(350).css({ overflow: "visible" });
  });

 



  
});

