var menuBtn = document.getElementById("menuBtn");
var walls = document.getElementById("walls");
var facades = document.getElementById("facades");
var flooring = document.getElementById("flooring");
var ceilings = document.getElementById("ceilings");

walls.onclick = function(){window.location=`/walls`}
facades.onclick = function(){window.location=`/facades`}
flooring.onclick = function(){window.location=`/flooring`}
ceilings.onclick = function(){window.location=`/ceilings`}

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
}



const wrappers = document.querySelectorAll(".wrapper");

wrappers.forEach(wrapper => {
  const carousel = wrapper.querySelector(".carousel");
  const firstImg = carousel.querySelectorAll("img")[0];
  const arrowIcons = wrapper.querySelectorAll("i");

  let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
  let autoplayInterval;

  const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";
  };

  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      let firstImgWidth = firstImg.clientWidth + 14;
      carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60);
    });
  });

  const autoSlide = () => {
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
      return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }

    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  };

  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      carousel.scrollLeft += firstImg.clientWidth + 14;
      showHideIcons();
    }, 3000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
  };

  const dragStart = (e) => {
    isDragStart = true;
    stopAutoplay();
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
    startAutoplay();
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  document.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);

  startAutoplay();
});

