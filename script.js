/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }
  else{
    navbar.classList.remove("scrolled");
  }

});

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    scrollBtn.style.display = "block";
  }
  else{
    scrollBtn.style.display = "none";
  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

/* =========================
   REVEAL ANIMATION
========================= */

function revealElements(){

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if(elementTop < windowHeight - revealPoint){
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);
revealElements();

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);

    }
    else{
      counter.innerText = target;
    }

  };

  updateCounter();

});