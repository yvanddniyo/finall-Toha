

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});

// Close the dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

// menu bar 

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle('hidden');
  });
});


 const dropB =document.querySelectorAll(".dropdown-click");
 const dropTo =document.querySelectorAll(".dropdown");

dropB.forEach((button, index) => {
  button.addEventListener("click", () =>{
    dropTo[index].classList.toggle("hidden");
  });

  document.addEventListener("click", (event)=>{
    if(!button.contains(event.target)){
      dropTo[index].classList.add("hidden");
    }
  })

})

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




