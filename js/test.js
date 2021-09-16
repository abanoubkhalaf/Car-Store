$(function(){
    'use-strict';
      // slider Height

    var winH = $(window).innerHeight(),
        upperH = $(".upper-bar").innerHeight(),
        navH = $(".navbar").innerHeight();
        $(".slider, .carousel-item").height(winH - (upperH + navH));



     // Featured work

     $(".featured-work ul li").on("click", function () {
         $(this).addClass("active").siblings().removeClass("active");
          
         if($(this).data("class")==="All"){
             $(".shuffle-images .col-md").css("opacity","1")
         } else{
            $(".shuffle-images .col-md").css("opacity","0.08");

            $($(this).data("class")).parent().css("opacity","1")
         }
         
     });




})