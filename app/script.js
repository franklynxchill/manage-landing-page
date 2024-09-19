
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener("click", () => {
  menu.classList.remove('hidden');
  closeBtn.classList.remove('hidden');
  hamburger.classList.add('hidden');
})

closeBtn.addEventListener('click', ()=>{
  menu.classList.add('hidden');
  closeBtn.classList.add('hidden');
  hamburger.classList.remove('hidden');
})

const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },
  
  breakpoints: {
    768: {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 10,
    },
  },
});

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

email.addEventListener('input', ()=> {
  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }
})

//(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))