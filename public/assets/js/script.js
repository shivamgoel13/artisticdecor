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

let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let number = document.getElementById('number');


modal.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = {
        name: name.value,
        email:email.value,
        message: message.value,
        number: number.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/contactForm');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.responseText == 'Success'){
            alert('Email Sent');
            name.value = '',
            email.value = '',
            message.value = '',
            number.value = ''
        }else{
            alert('Something went Wrong')
        }
    }
    xhr.send(JSON.stringify(formData))
})




}
