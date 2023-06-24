var menuBtn = document.getElementById("menuBtn");
if(menuBtn){
    var sideNav = document.getElementById("sideNav");
    var menu = document.getElementById("menu");

    sideNav.style.right = "-250px";

    menuBtn.onclick = function(){
        if(sideNav.style.right == "-250px"){
            sideNav.style.right = 0
            menu.src = "images/close.png"
        }else{
            menu.src = "images/menu.png"
            sideNav.style.right = "-250px"
        }
    }
    var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
    });
}
    // Get the modal element
var modal = document.getElementById("enquiryModal");
if(modal){

// Get the anchor element
var openModalBtn = document.getElementById("openModalBtn");

// Get the close button element
var closeModalBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to open the modal on anchor click
openModalBtn.addEventListener("click", openModal);

// Event listener to close the modal on close button click
closeModalBtn.addEventListener("click", closeModal);
}