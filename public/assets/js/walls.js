
var menuBtn = document.getElementById("menuBtn");
if(menuBtn){
    var sideNav = document.getElementById("sideNav");
    var menu = document.getElementById("menu");

    sideNav.style.right = "-250px";

    menuBtn.onclick = function(){
        if(sideNav.style.right == "-250px"){
            sideNav.style.right = 0
            menu.src = "assets/images/close.png"
        }else{
            menu.src = "assets/images/menu.png"
            sideNav.style.right = "-250px"
        }
    }
    var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
    });
}
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        auto:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });