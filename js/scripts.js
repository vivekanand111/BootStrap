$(document).ready(function(){
    $("#mycarousel").carousel({ interval:2000 });
    $("#carouselButton").click(function(){
        if ($("#carouselButton1").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton1").children("span").removeClass('fa-pause');
            $("#carouselButton1").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton1").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton1").children("span").removeClass('fa-play');
            $("#carouselButton1").children("span").addClass('fa-pause');                    
        }
    });
    $("#button1").click(function(){
        $("#loginModal").modal('toggle');
    });
    $("#button2").click(function(){
        $("#ReserveModal").modal('toggle');
    });
});